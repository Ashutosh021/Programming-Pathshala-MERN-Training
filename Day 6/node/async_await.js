async function fetchAPI(){
    var res = await fetch('https://dummyjson.com/products')
    var data =await res.json()
    console.log(data)
}

fetchAPI();