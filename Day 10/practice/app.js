const { json } = require("body-parser")
const express=require("express")
const app=express()
app.use(express.json())
const fsPro=require("fs/promises")

app.get('/',async(req,res)=>{

    const data=await fsPro.readFile('./data.json','utf-8')
    const Jdata = await JSON.parse(data);
    res.send({
        success:"true",
        data:Jdata
    })
})
app.post('/',async(req,res)=>{
    const db=await fsPro.readFile('./data.json','utf-8')
    const arr= await JSON.parse(db);
    const len=arr.length;
    const data = req.body
    const product=data

    if(len==0){
        product.id=1;
    }
    else{
        product.id = arr[len - 1].id + 1;
    }
    arr.push(product);
    fsPro.writeFile("./data.json",JSON.stringify(arr));
    res.send({
        success:true,
        length:len, 
        product:product 
    })
})
app.put('/',(req,res)=>{
    res.send("Hii Put")
})
app.delete('/',(req,res)=>{
    res.send("Hii Delete")
})

app.listen(3300,()=>{
    console.log("http:localhost:3300")
})