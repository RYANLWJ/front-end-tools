const { PROJECT_PACKAGE_JSON, PROJECT_ROOT_PATH } = require("./config.json");
const { name: LIBRARY_NAME } = PROJECT_PACKAGE_JSON;
const semverInc = require("semver/functions/inc");
const inquirer = require("inquirer");
const packageJson = require(PROJECT_PACKAGE_JSON);

const distDirPackageJson = require(PROJECT_PACKAGE_JSON);
const { run, createWriteFile, copyFile, log } = require("./utils");

const { version: currentVersion } = packageJson;

/**
 * @returns {object} - nextVersions: 获取下个可发行的所有版本
 */
const getNextVersions = () => ({
  major: semverInc(currentVersion, "major"),
  minor: semverInc(currentVersion, "minor"),
  patch: semverInc(currentVersion, "patch"),
  premajor: semverInc(currentVersion, "premajor"),
  preminor: semverInc(currentVersion, "preminor"),
  prepatch: semverInc(currentVersion, "prepatch"),
  prerelease: semverInc(currentVersion, "prerelease"),
});

/**
 * @returns {string} - nextVersion: 选择并获取可发行的下个版本
 */
const getNextVersion = async () => {
  const nextVersions = getNextVersions();
  const { nextVersion } = await inquirer.prompt([
    {
      type: "list",
      name: "nextVersion",
      message: `请选择将要发布的版本 (当前版本 ${currentVersion})`,
      choices: Object.keys(nextVersions).map((key) => ({
        name: `${key} => ${nextVersions[key]}`,
        value: nextVersions[key],
      })),
    },
  ]);
  return nextVersion;
};

/**
 * @param {string} - nextVersion: 下个版本
 */
const updatePackageJson = async (nextVersion) => {
  const newPackageJson = {
    ...packageJson,
    version: nextVersion,
    scripts: {
      ...packageJson.scripts,
      clean: `rimraf ${LIBRARY_NAME}/{dist,esm,lib}`,
      publish: `npm publish `,
    },
  };
  const newDistPackageJson = {
    ...distDirPackageJson,
    name: packageJson.name,
    author: packageJson.author,
    version: nextVersion,
    description: packageJson.description,
    repository: packageJson.repository,
    license: packageJson.license,
    keywords: packageJson.keywords,
  };
  await createWriteFile(PROJECT_PACKAGE_JSON, newPackageJson);
  await run(`npx prettier --write ${PROJECT_PACKAGE_JSON} `);

  return null;
};

/**
 * @func
 * @name push - 代码推送git仓库
 * @param {string} nextVersion - 下个版本号
 */
const push = async (nextVersion) => {
  await run("cd ../ && git add .");
  const { message } = await inquirer.prompt([
    {
      type: "input",
      name: "message",
      message: `下个版本 ${nextVersion}，可输入commit信息`,
      default: "", // 默认值
    },
  ]);
  await run(`cd ../ && git commit -m "v${nextVersion}${message && `: ${message}`}"`);
  await run("cd ../ && git push");
  return null;
};

/**
 * @func
 * @name build - 组件库打包
 */
const build = async () => {
  await run(`cd ${PROJECT_ROOT_PATH} && npm run build`);
  return null;
};

/**
 * @func
 * @name publish - 发布至npm
 */
const publish = async () => {
  const { publish } = await inquirer.prompt([
    {
      type: "confirm",
      name: "publish",
      message: `是否发布npm?`,
      default: true,
    },
  ]);
  if (publish) {
    await run("npm run publish");
  }
};

/**
 * @func
 * @name tag - 打tag并推送至git
 */
const tag = async (nextVersion) => {
  log(nextVersion);
  await run(`git tag v${nextVersion}`);
  await run(`git push origin tag v${nextVersion}`);
  return null;
};

/**
 * @func
 * @name main - 工程主入口
 */
const main = async () => {
  try {
    // =================== 获取下个可发布版本号 ===================
    const nextVersion = await getNextVersion();
    //  =================== 开始执行 ===================
    const startTime = Date.now();
    // =================== 处理版本号与备份关键文件 ===================
    await updatePackageJson(nextVersion);

    // =================== 组件库打包 ===================
    await build();
    // =================== 代码推送git仓库 ===================
    await push(nextVersion);
    // =================== 打tag并推送至git ===================
    await tag(nextVersion);
    // =================== 发布至npm ===================
    await publish();

    log(`发布流程结束 共耗时${((Date.now() - startTime) / 1000).toFixed(3)}s`);
  } catch (err) {
    log(`发布失败，失败原因：${err}`);
  }
};

main();
