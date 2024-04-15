const express = require("express")
const app=express()

const htmltemp =
`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Home</h1>
    <h1>About</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, asperiores quaerat quas distinctio fugit laboriosam excepturi quibusdam pariatur eaque debitis.</p>
</body>
</html>
`
app.get("/",(req,res)=>{
    // res.send("<h1>Home</h1>");
    res.send(htmltemp);
})
app.get("/about",(req,res)=>{
    res.send("<h1>About</h1>");
})
app.get("*",(req,res)=>{
    res.send("<h1>404 Error</h1>");
})


app.listen(4500,()=>{
    console.log("Server :- http://localhost:4500");
})