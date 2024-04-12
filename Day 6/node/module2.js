<<<<<<< HEAD
function sum(a,b){
    return a+b;
    // console.log(a+b)               //print on console
}



function mul(a,b){
    return a*b;
}



// single function export
module.exports=sum;




// multiple function export
module.exports={
    sum:sum,
    mul:mul
};



// Upper and this are equivalent             In ES6 by default 'sum':sum   equivalent to sum
// module.exports={
//     sum,
//     mul
// };


=======
function sum(a,b){
    return a+b;
    // console.log(a+b)               //print on console
}



function mul(a,b){
    return a*b;
}



// single function export
module.exports=sum;




// multiple function export
module.exports={
    sum:sum,
    mul:mul
};



// Upper and this are equivalent             In ES6 by default 'sum':sum   equivalent to sum
// module.exports={
//     sum,
//     mul
// };


>>>>>>> 59a0b268195fbb671256444ba536d09bf9300fc8
