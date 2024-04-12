<<<<<<< HEAD
async function fetchAPI(){
    var res = await fetch('https://dummyjson.com/products')
    var data =await res.json()
    console.log(data)
}

=======
async function fetchAPI(){
    var res = await fetch('https://dummyjson.com/products')
    var data =await res.json()
    console.log(data)
}

>>>>>>> 59a0b268195fbb671256444ba536d09bf9300fc8
fetchAPI();