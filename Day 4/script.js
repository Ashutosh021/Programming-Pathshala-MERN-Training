// const obj = {
//     name:"ashu",
//     roll:21
// }


// document.write(obj);   // return [object object]

// obj.name = "234";
// document.write(JSON.stringify(obj));


// let arr=[1,2,3];
// console.log(arr);

// const arr2 = [1,2,34]
// arr2[10]=20
// console.log(arr2)


// console.log(typeof(arr))         // object
// console.log(Array.isArray(arr))         // true


// const objArr = {
//     '1':'one',
//     '2':'two',
//     '10':'three',
// }



// const ob = { 
//     name:"something"
// }

// let a=[1,2,3]
// function checkIfObj(inp){
//     if(Array.isArray(inp)){
//         return false;
//     }
//     else if(typeof(inp)=="object"){
//         return true;
//     }
//     else{
//         return false;
//     }
// }

// console.log ( "arr :- " +checkIfObj(null));
// console.log ( "arr :- " +checkIfObj(2));
// console.log ( "arr :- " +checkIfObj(a));
// console.log ( "obj :- " +checkIfObj(ob));



var obj2 = {
    name : "ashu",
    roll : 10,
    sec : 'D'
}

var arr3 = [1,2,3,4];
 
for(var i=0;i<arr3.length;i++){
    console.log(arr3[i]);
}

console.log("\nfor in arr");
for (const i in arr3) {
    console.log(arr3[i]);  
}

console.log("\nfor of arr");
for (const i of arr3) {
    console.log(arr3[i-1]);  
}

console.log("\nfor Each arr");
arr3.forEach((i)=>{
    console.log(i);  
})


console.log("\nfor in obj");
for(const i in obj2){
    console.log(i+":"+obj2[i]);
}

// for(const i of obj2){       // objects are not iterable
//     console.log(i+":"+obj2[i]);
// }