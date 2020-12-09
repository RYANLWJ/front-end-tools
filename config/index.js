// 获取组件库名称
const { name: LIBRARY_NAME } = require('../package.json')

// 项目根目录路径配置
const DIR_NAME = __dirname + '../'
const DIR_NAME2 = __dirname + '../'

// node全局变量配置
const ENV = process.env.NODE_ENV || 'production'
const PROJECT = process.env.NODE_PROJECT || 'ProjectA'

// 入口文件路径配置
const SRC_PATH = DIR_NAME + '/lib/'
// const SRC_PATH2 = SRC_PATH +   `/${PROJECT}`
// const PUBLIC_PATH = DIR_NAME + '/public'


// 出口文件路径配置
const OUTPUT_PATH = DIR_NAME2 + '/dist'

// 组件库路径配置
const LIBRARY_DIST_DIR_PATH = `./${LIBRARY_NAME}` // 上传到npm的文件包文件名路径
const DIR_PACKAGE_JSON_PATH = `./package.json` // 项目根目录的package.json路径
const LIBRARY_PACKAGE_JSON_PATH = "./package.json" // 组件根目录的package.json路径
// const LIBRARY_README_MARKDOWN_PATH = `${LIBRARY_DIST_DIR_PATH}/README.md` // 组件根目录的README.md
const COPY_LIBRARY_PACKAGE_JSON_PATH = `./copy/package.json` // 备份组件库的json文件路径
// const COPY_LIBRARY_README_MARKDOWN_PATH  = `./copy/${LIBRARY_NAME}.md` // 备份组件库的README.md
// const LIBRARU_PACKAGES_PATH = './packages' // 组件库入口，packages目录
// const LIBRARY_DIST_PATH  = '/dist' // 组件库出口, dist目录
// const PATHS = { // gulpfile.js里入口出口文件路径配置
//     // 入口文件
//     css: `${LIBRARU_PACKAGES_PATH}/**/index.css`, // 组件库入口的所有css
//     less: `${LIBRARU_PACKAGES_PATH}/**/index.less`, // 组件库入口的所有less
//     js: `${LIBRARU_PACKAGES_PATH}/index.js`, // 组件库入口的index.js
//     scripts: `${LIBRARU_PACKAGES_PATH}/**/*.{ts,tsx,js,jsx}`, // 组件库入口各组件模块
//     assets: `${LIBRARU_PACKAGES_PATH}/**/*.{jpg,jpeg,png,md}`, // 组件库入口静态资源文件
//     // cjs与lib组件库
//     lib: `${LIBRARY_DIST_DIR_PATH}/lib`, // 生成lib目录，cjs规范的组件库
//     esm: `${LIBRARY_DIST_DIR_PATH}/esm`, // 生成ems目录，ems规范的组件库
//     // dist组件库
//     dist : LIBRARY_DIST_DIR_PATH + LIBRARY_DIST_PATH , // 生成dist目录
//     distJS: `${LIBRARY_DIST_DIR_PATH + LIBRARY_NAME}.js`, // gulp生成的dist js目录
//     distJS2: `${LIBRARY_DIST_DIR_PATH + LIBRARY_DIST_PATH }/${LIBRARY_NAME}.js`, // webpack生成的dist js目录
//     distCSS: `${LIBRARY_DIST_DIR_PATH + LIBRARY_DIST_PATH }/*.css`,
//     distCss2: `${LIBRARY_DIST_DIR_PATH + LIBRARY_DIST_PATH }/${LIBRARY_NAME}.css`, // webpack生成的dist css目录
//     // 其他
//     sourmapWrite: './',  // gulp-sourcemaps的书写路径
// }



module.exports = {
    DIR_NAME,
    SRC_PATH,
    // SRC_PATH2,
    // PUBLIC_PATH,
    ENV,
    PROJECT,
    // FAVICON: PUBLIC_PATH + '/favicon.ico',
    // HTML_TEMPLATE_FILE: PUBLIC_PATH + '/index.html',
    // PAGE_PATH: SRC_PATH2+ '/pages',
    // ROUTER_PATH: SRC_PATH2+  '/router',
    // STORE_PATH: SRC_PATH2+ '/store',
    MOCK_PATH: DIR_NAME + '/mock',
    // COMPONENTS_PATH: SRC_PATH2+ '/components',
    // LANG_PATH: SRC_PATH2+ '/lang',
    // COOMON_PATH: SRC_PATH2 + '/utils',
    OUTPUT_PATH,
    CSS_OUTPUT_PATH: 'css/[name][hash:5].css',
    JS_OUTPUT_PATH: 'js/[name][hash:5].js',
    LIBRARY_DIST_DIR_PATH,
    // PATHS,
    DIR_PACKAGE_JSON_PATH,
    LIBRARY_PACKAGE_JSON_PATH,
    // LIBRARY_README_MARKDOWN_PATH,
    LIBRARY_NAME,
    COPY_LIBRARY_PACKAGE_JSON_PATH,
    // COPY_LIBRARY_README_MARKDOWN_PATH,
}