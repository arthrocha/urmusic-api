const fsExtra = require('fs-extra')
const path = require("path")


module.exports = function emptyDir(_, _, next){
    fsExtra.emptyDirSync(path.resolve(__dirname,"../../mp3"));
    return next()
}