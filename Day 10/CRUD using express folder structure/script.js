// const express = require('express');
// const fspromise = require('fs/promises');
// // const productController=require('./Controller/productController.js')
// const productRouter = require('./routes/productRoute.js')
// const userController=require('./Controller/userController.js')
// const app = express();



// app.use(express.json())
// app.use((req, res, next) => {
//     // console.log('request ');
//     const time= new Date().toLocaleString();
//     fspromise.appendFile('./log.txt',req.url+'\t'+time+'\n');
//     next();
// })




// app.use('/api/products',productRouter);
// app.use('/api/user',userController);

// // productRouter.route('/')
// // .get(productController.getAllProducts)
// // .post(productController.addProduct);

// // productRouter.route('/:id')
// // .put(productController.replaceproduct)
// // .delete(productController.deleteProduct);




// // app.route('/api/products')
// //     .get(product.getAllProducts)
// //     .post(product.addProduct)

// // app.route('api/products/:id')
// //     .put(product.editProduct)
// //     .delete(product.deleteProduct)    
        
// app.route('/api/users')
//     .get(userController.getuser)
//     .post(userController.adduser)
//     .delete(userController.deleteuser)
//     .put(userController.edituser)

// // app.get('/api/products', product.getAllProducts);
// // app.post('/api/products', product.addProduct);
// // app.put('/api/products/:id', product.editProduct);
// // app.delete('/api/products/:id', product.deleteProduct);
// // app.get('/api/users',userController.getuser);
// // app.post('/api/users',userController.adduser);
// // app.put('/api/users',userController.edituser);
// // app.delete('/api/users',userController.deleteuser);
// app.listen(3300);


const express=require("express")
const fsPromise=require('fs/promises')
const productRouter=require('./routes/productRoute.js')
const userRouter=require('./routes/userRoute.js')

const app=express();
app.use(express.json());
app.use('/api/products',productRouter)
app.use('/api/user',userRouter)
app.listen(3300);