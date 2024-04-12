function printIt(e) {
    e.preventDefault();
    const t = e.target;
    for (let i = 0; i < t.length; i++) {
        // if checkbox -> then type =checkbox
        if (t[i].type === "radio" && t[i].checked) {
            console.log(t[i].value);
        }
        if (t[i].type !== "radio") {
            console.log(t[i].value)
        }

    }
}



// Higeher order function 
    // a function that accept fucntion as a parameter or return a function as parameter

    let a = function sum(a=2,b=6){
        console.log(a+b);
        return print();
    }

    
    function print(x=5){
        console.log(`hiii ${x} byee`);
    }
    a()