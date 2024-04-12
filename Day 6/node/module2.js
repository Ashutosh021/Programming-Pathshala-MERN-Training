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


