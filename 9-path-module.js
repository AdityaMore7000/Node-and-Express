const path = require('path')

console.log(path.sep);
const filePath = path.join('/content','subfoulder','test.txt')
console.log(filePath);


const base = path.basename(filePath);
console.log(base); //get only the last part i.e. test.txt in our case

const absolute = path.resolve(__dirname,'content','subfoulder','test.txt')
console.log(absolute); //get the absolute path 