/**
 * 使用node内建模块os
 */

const os = require('os')
const mem = os.freemem / os.totalmem * 100
console.log(`内存占用率${mem.toFixed(2)}%`);

/**
 * 使用第三方模块
 */
const download = require('download-git-repo');
const ora = require('ora');
const process = ora(`下载。。。。。。项目`)
process.start()
download('github:su37josephxia/vue-template1', 'test', err => {
    if (err) {
        // console.log('Error');
        process.fail()
    } else {
        // console.log('success');
        process.succeed()
    }
})

/**
 * 使用promise重构上面代码
 */

const repo = 'github:su37josephxia/vue-template';
const desc = 'test'
clone(repo, desc)

async function clone(repo, desc) {
    const { promisify } = require('util')
    const download = promisify(require('download-git-repo'));
    const ora = require('ora');
    const process = ora(`下载。。。。。。项目`)
    process.start()
    try {
        await download(repo, desc)
    } catch (error) {
        process.fail()
    }
    process.succeed()
}

