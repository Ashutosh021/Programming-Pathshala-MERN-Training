const http = require("http");

const server = http.createServer((req,res)=>{
    res.end("<h1>Hello world!</h1>")
})

server.listen(4500,"localhost",()=>{
    console.log("http://localhost:4500")
})



// const http = require("http");

// const server = http.createServer((req, res) => {
//     res.end("<h1>Hello world!</h1>");
// });

// server.listen(2000, "localhost", () => {
//     console.log("working on http://localhost:2000");
// });

