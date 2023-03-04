const os = require('os')
const user = os.userInfo();
//info about user
console.log(user);

// uptime of PC in seconds
console.log(`The system uptime is : ${os.uptime()} seconds`)

const currentOS = {
    name : os.type(),
    release : os.release(),
    totalMem : os.totalmem(),
    freeMem : os.freemem(),
}

console.log(currentOS);