
// console.log("Start");
// const req =  fetch("https://dummyjson.com/products")
// console.log(req)
// req.then(()=>console.log('fetched'))
// console.log("End");




// console.log("Start");
// fetch('https://dummyjson.com/products/1')
// .then(res => res.json())
// .then(json => console.log(json))
// console.log("End");
            

console.log("Start");
let  req = fetch('https://dummyjson.com/products/1')
const res = req.then(res=>res.json())
res.then((data)=>console.log(data));         
console.log("End");


// async await

// const Url = "https://dummyjson.com/products";
// async function getapi(Url) {
//     const response = await fetch(Url);
//     var data = await response.json();
//     console.log(data);
// }

// getapi(Url)
