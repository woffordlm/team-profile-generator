// utilizing file system in order to write file
const fs = require('fs')
// writing file with content and placing it in the dist folder
function writeFile(fileContent) {
    console.log('fileContent:', fileContent)
    return new Promise((resolve, reject) => {
        fs.writeFile("./dist/index.html", fileContent, err => {
            if (err) {
                reject(err);
                return;
            }
            resolve({
                ok: true,
                message: 'File created!'
            });
        });
    })
}
// exporting to index
module.exports = writeFile