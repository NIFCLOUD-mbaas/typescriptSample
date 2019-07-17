import * as fs from "fs-extra"

// Check public folder
var isExistPublic = fs.existsSync('dist/public')
if (!isExistPublic) {
    fs.mkdirSync("dist/public")
}
// Check views folder
// var isExistViews = fs.existsSync('dist/views')
// if (!isExistViews) {
//     fs.mkdirSync("dist/views")
// }
// Copy Asset files
try {
    fs.copy("./src/public/js", "dist/public/js/")
    fs.copy("./src/public/css", "dist/public/css/")
    fs.copy("./src/public/images", "dist/public/images/")
    // Copy views
    // fs.copy("./views", "dist/")
    console.log("Copy file is successfully!")
} catch(err) {
    console.error(err)
}
