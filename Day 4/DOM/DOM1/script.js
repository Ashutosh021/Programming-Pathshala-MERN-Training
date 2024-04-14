
// document.querySelector('.h1').style.color= "red";
// document.getElementById('h1').style.color= "blue";
// document.getElementsByTagName('p')[0].style.color= "yellow";
// document.getElementsByClassName('cls')[0].style.color="purple";




// document.querySelector('.h1').innerHTML= "red";
// document.getElementById('h1').innerHTML= "blue";
// document.getElementsByTagName('p')[0].innerHTML= "yellow";
// document.getElementsByClassName('cls')[0].innerHTML="purple";

const ne = document.createElement("h3");
ne.innerHTML = "asds";
console.log(ne);

const fr = document.getElementsByClassName('firstDiv');
fr[0].appendChild(ne);



