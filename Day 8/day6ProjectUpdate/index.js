const http = require("http");
const fs = require("fs");
const url = require("node:url");

const htmlTemplate = `<!DOCTYPE html>
<html lang="en">
<head>
    <title>Simple Form</title>
    <style>
        _style_
    </style>
</head>
<body>
    <div class="header">
        <div class="logo">LOGO</div>
        <div class="search-box">
            <input type="text" placeholder="Search...">
        </div>
        <div class="tabs">
            <div class="tab">Home</div>
            <div class="tab">Service</div>
            <div class="tab">Contact</div>
            <div class="tab">About</div>
        </div>
    </div>
    <div class="products">
    _products_
    </div>
    <footer>
    <p>This is Footer<br>
    <a href="mailto:hege@example.com">contact@us123.com</a>
    </p>
    </footer>
</body>
</html>
`;
const styleTemplate = `
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
}

.header {
    background-color: #5D5E5C;
    color: white;
    display: flex;
    justify-content: space-between;
    padding: 10px;
    align-items: center;
}

.logo {
    font-size: 20px;
    font-weight: bold;
}

.search-box {
    margin: 0 8px;
}

.search-box input[type="text"] {
    padding: 5px;
    border-radius: 5px;
    border: 1px solid #ccc;
    width:300px;
}

.tabs {
    display: flex;
}

.tab {
    padding: 4px 8px;
    background-color: #444;
    color: white;
    margin-right: 10px;
    cursor: pointer;
}

.tab:last-child {
    margin-right: 0;
}

.products {
    display: grid;
    grid-template-columns: 1fr;
    gap: 20px;
    padding: 20px;
    text-align:center;
    background-color:#848482;
}

.card {
    border: 2px solid #262626;
    padding: 10px;
    width:400px;
    height:450px;
    border-radius:10px;
    margin:0 auto;
    background-color:#E7E7E6;
    
}
img{
    width:250px;
    height:200px;
    object-fit: contain;
    transition:all ease-in 2s;
    display:block;
    margin:0 auto;
}
img:hover{
  transform:scale(1.1);
}
.card h2 {
    font-size: 18px;
    margin-bottom: 5px;
}

.card p {
    font-size: 14px;
    color: #666;
    padding:10px;
}
button{
    margin-top:30px;
    padding:15px;
    border-radius:10px;
    border:none;
    background-color:#ed745a;
    transition:background-color ease-in 0.6s;
}
button:hover{
    background-color:#FF5733;
}

@media (min-width: 600px) {
    .products {
        grid-template-columns: repeat(3, 1fr);
    }
}

footer {
    text-align: center;
    padding: 40px;
    background-color: crimson;
    color: white;
}


`;
const cardTemplate = `
<div class="card">
    <img src="_src_"/>
    <h2>Title</h2>
    <h4> &#8377 _pri_</h4>
    <p>data</p>
    <a  href="/product?id=_idHere_">
    <button>Checkout</button>
    </a>
</div>
`;


const data = fs.readFileSync("./data.json", "utf-8");
const dataObj = JSON.parse(data);
const products = dataObj.products;

const allCards = products.map((elem) => {
  let newCard = cardTemplate;
  newCard = newCard.replace("_idHere_", elem.id);
  newCard = newCard.replace("_src_", elem.thumbnail);
  newCard = newCard.replace("Title", elem.title);
  newCard = newCard.replace("_pri_", elem.price);
  newCard = newCard.replace("data", elem.description);
  return newCard;
});

const allCardStrings = allCards.join("");
const finalHtml = htmlTemplate
  .replace("_products_", allCardStrings)
  .replace("_style_", styleTemplate);

//create Server
const server = http.createServer((req, res) => {
  const { pathname, query } = url.parse(req.url, true);
  if (pathname === "/") {
    res.writeHead(200, {
      "content-type": "text/html",
    });
    res.end(finalHtml);
  } else if (pathname === "/product") {
        const urlId = query.id;
        const selectedItem = products.filter((elem) => {
            return elem.id == urlId;
        });

        if (urlId > 0 && urlId <= 30) {
        res.end(`
        <div class="q-card" style="width: 18rem; border: 1px solid #ccc; box-shadow: 0 2px 5px rgba(0,0,0,0.1); margin: 20px; padding: 10px;">
    <img class="q-card-img" src="${selectedItem[0].thumbnail}" alt="Card image cap" style="width: 100%; height: 260px;object-fit: contain; border-bottom: 1px solid #eee;">
    <div class="q-card-body" style="padding: 10px;">
        <h5 class="q-card-title" style="font-size: 18px; color: #333;">${selectedItem[0].title}</h5>
        <p class="q-card-text" style="font-size: 14px; color: #666;">${selectedItem[0].description}</p>
    </div>
    <div class="q-card-body" style="padding: 10px;">
        <a href="product?id=${urlId - 1}" class="q-btn" style="padding: 8px 12px; background-color: #007bff; color: white; text-decoration: none; border-radius: 5px; margin-right: 10px;">Prev</a>
        <a href="product?id=${+urlId + 1}" class="q-btn" style="padding: 8px 12px; background-color: #28a745; color: white; text-decoration: none; border-radius: 5px;">Next</a>
    </div>
</div>

        `);
        } else {
      res.end("Product ID not found");
    }
  } else {
    res.end("404");
  }
});
server.listen(2000, "localhost", () => {
  console.log("working on http://localhost:2000");
});
