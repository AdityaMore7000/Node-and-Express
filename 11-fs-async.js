const {readFile,writeFile} = require('fs')

readFile(
    './content/first.txt',
    'utf-8',
    (err,result)=>{
        if(err){
            console.log(err);
            return;
        }
        else{
            console.log(result);
            var first = result;
        }
        readFile('./content/second.txt','utf8',(err,result)=>{
            if(err){
            console.log(err);
            return;
        }
        else{
            console.log(result);
            var second = result;
        }
        writeFile('./content/result-async.txt',`Here is the result ${first} and ${second}`,(err,result)=>{
            if (err) {console.log(err);return;}
            console.log(result)
        })
        })
    }
)