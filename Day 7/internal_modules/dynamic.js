const http = require("http");



const htmlTemplate =
`<!DOCTYPE html>
<html lang="en">
    <head>
    <title>Simple Form</title>
    <style>
    .card{
        color:red;
    }
</style>
    </head>
        <body>
            _product_
        </body>
</html>

`
// console.log(htmlTemplate)

const cardTemplate =`
<div class="card">
    <h2>Title</h2>
    <p>data</p>
</div>
`
const fs = require('fs')
const data = fs.readFileSync('./data.json','utf-8')
const dataObj =JSON.parse(data)
const products = dataObj.products;              //sync process
// console.log(products[0].title)


// card template data with data.json 

// const card1 = cardTemplate
//                 .replace('Title',products[0].title)
//                 .replace('data',products[0].description)
// const card2 = cardTemplate
//                 .replace('Title',products[1].title)
//                 .replace('data','Iphone sdf dfsfs')

// const allCards = card1 +card2;

// const page=htmlTemplate.replace('_product_',cardTemplate)


const allCards = products.map((elem)=>{
    let newCard = cardTemplate;
    newCard = newCard.replace('Title',elem.title)
    newCard = newCard.replace('data',elem.description)
    return newCard;
});

const allCardStrings = allCards.join('')

const server = http.createServer((req,res)=>{
        res.writeHead(200,{
            'content-type':'text/html'
        })
        res.end(allCardStrings)
})


server.listen(2000,"localhost",()=>{
    console.log("working on http://localhost:2000")
})
