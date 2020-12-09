const fs = require('fs')
const util = require('util')
const child_process = require('child_process')
const chalk = require('chalk')

/**
 * @func
 * @name createFolder- 创建文件或文件夹
 */
const createFolder = async (folderName) => {
    const folederQueue = Array.isArray(folderName) ? folderName : new Array(folderName)
    await fs.mkdir(folderName, (err) => {
        if (err) throw err
    })
    return null
}
/**
 * @func
 * @name createWriteFile - 编写文档
 */

const createWriteFile = async (path, content = '') => {
    const writeStream = fs.createWriteStream(path, {
        encoding: 'utf-8',
        autoClose: true
    })
    await writeStream.open()
    await writeStream.write(typeof content !== 'object' ? content : JSON.stringify(content))
    return null
}

/**
 * @func
 * @name createWriteFile - 编写文档
 */
copyFile = async (targetFilePath, copyFilePath) => {
    await fs.copyFile(targetFilePath, copyFilePath, err => {
        if (err) throw err
    });
    return null
}

/**
 * @func
 * @name run - 运行指令
 */
const run = async (cmd) => {
    const exec = util.promisify(child_process.exec);
    log(chalk.green(cmd))
    await exec(cmd);
    return null
}

/**
 * @func
 * @name log - 打印日志
 */
const log = console.log

module.exports = {
    createWriteFile,
    copyFile,
    createFolder,
    run,
    log,
}