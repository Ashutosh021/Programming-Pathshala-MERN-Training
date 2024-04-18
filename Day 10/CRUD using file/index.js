const express = require("express")
// const fs=require("fs")
const fsPro=require("fs/promises")
const app=express();
const productController = require('./controllers/productsController')
const userController = require('./controllers/userController.js')

app.use(express.json());

app.use((req,res,next)=>{
    const time=new Date().toLocaleString();
    fsPro.appendFile('./log.txt',req.url+'\t'+time+'\n');
    next();
})

app.get('/api/products',productController.getAllProducts)
app.post('/api/products',productController.addProduct)
app.put('/api/products/:id',productController.replaceProduct)
app.delete('/api/products/:id',productController.deleteProduct)



app.get('/api/user',userController.getUser)
app.post('/api/user',userController.addUser)
app.put('/api/user',userController.replaceUser)
app.delete('/api/user',userController.deleteUser)






// app.get('/api/user',(req,res)=>{
//     res.status(501);
//     res.json(
//         {
//             status:"success",
//             message:"Get Route is not Implemented"
//         }
//     );
// })
// app.post('/api/user',(req,res)=>{
//     res.status(501);
//     res.json(
//         {
//             status:"success",
//             message:"Post Route is not Implemented"
//         }
//     );
// })
// app.put('/api/user',(req,res)=>{
//     res.status(501);
//     res.json(
//         {
//             status:"success",
//             message:"Put Route is not Implemented"
//         }
//     );
// })
// app.delete('/api/user',(req,res)=>{
//     res.status(501);
//     res.json(
//         {
//             status:"success",
//             message:"Deleted Route is not Implemented"
//         }
//     );
// })
















// app.get("/api/product",async(req,res)=>{
//     // const data =fs.readFileSync('./data.json',"utf-8");
//     const data = await fsPro.readFile('./data.json',"utf-8");
//     // const arr=JSON.parse(data).products;
//     const arr=JSON.parse(data);
//     res.json(
//         {
//             status:"success",
//             // results:arr.length,
//             data:{
//                 products:arr
//             }
//         }
//     );
// });


// app.post("/api/product",async(req,res)=>{
//     const data=req.body;
//     const db=await fsPro.readFile('./data.json',"utf-8");
//     const arr=JSON.parse(db);
//     const len=arr.length;
//     const newProduct=data;
//     if(len==0){
//         newProduct.id=1;
//     }else{
//         newProduct.id=(arr[len-1].id)+1;
//     }
//     arr.push(newProduct);
//     fsPro.writeFile('./data.json',JSON.stringify(arr));
//     res.json({
//         status:"success",
//         result:1,
//         data:{
//             products:data
//         }
//     });
// })


// app.put('/api/product/:id', async (req, res) => {
//     const arr = JSON.parse(await fsPro.readFile("./data.json", "utf8"));
//     res.send("karya pragati par hai");
//     const reqId = parseInt(req.params.id);
    
//     const data = req.body;
//     data.id = reqId;
//     const newArr = arr.map((elem) => {
//         if (elem.id == reqId) return data;
//         else return elem;
//     });
//     fsPro.writeFile("./data.json", JSON.stringify(newArr));
//     res.json({
//         status: 'success',
//         results: 1,
//         data: {
//             newProduct:data,
//         }
//     })
//     console.log(data);
// })


// app.delete('/api/product/:id',async(req,res)=>{
//     const reqid=parseInt(req.params.id)
//     const arr=JSON.parse(await fsPro.readFile("./data.json","utf-8"))
//     const newarr=arr.filter((elem)=>{
//         if(elem.id===reqid) return false;
//         else return true;
//     })
//     fsPro.writeFile("./newdata.json",JSON.stringify(newarr));
//     res.json({
//         status:'success',
//         data:{
//             newProduct:null
//         }
//     })
// })

app.listen(3300,()=>{
    console.log("http://localhost:3300")
})