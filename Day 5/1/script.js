// let arr = [2,4,6,8,10];

// function printPretty(elem){
   //    console.log(elem)
   // }
   
   // function printArray(arr){
      //    for(let i=0;i<arr.length;i++){
//       printPretty(arr[i]);
//    }
//    arr.forEach(printPretty)
// }


// printArray(arr)


// let arr = [2,4,6,8,10];
// arr.forEach((elem,idx,arr)=>{
//       // console.log(j);
//       console.log(bn);
//    })
   
   
   


//    const numbers = [65, 44, 12, 4];
//    const newArr = numbers.map( (num) => {
//       return num * 10;
//     })
   
//  console.log(newArr)



// setTimeout

// console.log("first");
// setTimeout(()=>{
//    console.log("Hii")
// },3000)



// console.log("GEC Started");

// function printPreety(elem){
//    console.log("PrettyStart")
//    let ans = 123;
//    console.log(ans)
//    console.log("PrettyEnd")
// }

// setTimeout(printPreety,1000);
// console.log("GEC End");


var btn = document.getElementById("btn")
btn.addEventListener("click",()=>{
   console.log("Hello")
   btn.innerText="Button Clicked"
})
console.log(btn)
