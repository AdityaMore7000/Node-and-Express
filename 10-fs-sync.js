const {readFileSync,writeFileSync} = require('fs')
// import only what you need

// Alternate way as follows:
//import {readFileSync,writeFileSync} from 'fs' 

const first = readFileSync('./content/first.txt','utf8');
const second = readFileSync('./content/second.txt','utf8');
console.log(first,'\n',second);

writeFileSync(
    './content/result-sync.txt',
    `Here is the result : ${first}, ${second}`,
    {flag : 'a'}
)