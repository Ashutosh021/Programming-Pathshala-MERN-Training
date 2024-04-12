// const fs = require('fs')

//convert at the time of reading         (synchronous api)

// const data = fs.readFileSync("./my.txt","utf-8")
// console.log(data)



//convert at the time of log data

// const data = fs.readFileSync("./my.txt")
// console.log(data.toString())


// Buffer 
    // const b=new Buffer.from('abxzyz');
    // console.log(b);



// write file sync

// fs.writeFileSync("./my2.txt","opp's here are sasdsa")
// const data = fs.readFileSync("./my2.txt","utf-8")
// console.log(data)






// append file sync

// fs.appendFileSync("./my2.txt","\n there i am write somthing here")
// const data = fs.readFileSync("./my2.txt","utf-8")
// console.log(data)





// promise API
// const fs = require('fs').promises;
// const fs = require('fs/promises');

// const pr = fs.readFile("./my.txt", "utf-8");

// pr.then((res) => {
//     console.log(res);
// }).catch((err) => {
//     console.error("Error reading the file:", err);
// });




// ********************************************
// read file without sync    (callback)
// const fsPromise = require('fs')

// fsPromise.readFile("./my.txt","utf-8",(err,data)=>{
//     if(err){
//         console.log(err);
//     }
//     console.log(data)
// })



// const os = require("os");
// console.log(os.freemem())
// console.log(os.totalmem())
// console.log(os.hostname())
// console.log(os.homedir())