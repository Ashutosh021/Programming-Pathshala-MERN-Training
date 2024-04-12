//  Promise

// var ans = new Promise((res, rej) => {
//   var ans = 5;
//   if (ans === 5) {
//     return res("5 is here");
//   } else {
//     return rej("5 not here");
//   }
// })
//   .then(function (data) {
//     console.log(data);
//   })
//   .catch(function (data) {
//     console.log(data);
//   });

//  Example of Promise

// function createOrder(x,fn){
//     console.log(x);
//     setTimeout(()=>{fn('123'),1000});
//     setTimeout(()=>{fn('123'),2000});
// }

// function makeOrder(orderId){
//     console.log(orderId)
// }

// createOrder('soap',makeOrder)

// new Promise
// const pr = new Promise((res,rej)=>{
//     if(false){
//         res("true");
//     }
//     else{
//         rej("false");
//     }
// })
// .then(function(dt){
//     console.log(dt);
// })
// .catch(function(dt){
//     console.log(dt)
// })

// random number
// const ans = new Promise((res,rej)=>{
//         var num = Math.round(Math.random()*10);
//         if(num<5){
//             res(`Less than 5  => ${num}`);
//         }
//         else{
//             rej(`Greater than 5  => ${num}`)
//         }
//     })
//     .then(function(data){
//         console.log(data);
//     })
//     .catch(function(data){
//         console.log(data)
//     })

// const t1 = new Promise((res,rej)=>{
//     res("Done task 1");
// })

// const t2 = t1.then(function(data){
//     console.log(data);
//     return new Promise((res,rej)=>{
//         res("Done task 2");
//     })
// })
// t2.then(function(data){
//     console.log(data)
// })




// setTimeout(function abc() {
//   console.log("I am One");
// }, 0);
// const pr = new Promise((res, rej) => {
//   setTimeout(() => {
//     res("done");
//   }, 0);
// });
// pr.then(function (res) {
//   setTimeout(() => {
//     res("done");
//   }, 0);
// });
// setTimeout(function xyz() {
//   console.log("I am two");
// }, 0);
