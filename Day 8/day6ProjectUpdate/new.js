const http = require("http");
const fs = require("fs");
const url = require("node:url");

const htmlTemplate = `<!DOCTYPE html>
<html lang="en">
<head>
    <title>Simple Form</title>
    <style>
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        text-decoration: none;
    }

    .header {
        background-color: #333;
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
        align-items:center;
        text-align:center;
    }

    .card {
        border: 1px solid #ccc;
        padding: 10px;
        width:400px;
        height:400px;
        background-color:aqua;
    }
    img{
        width:250px;
        height:200px;
        object-fit: contain;
        transition:all ease-in 2s;
    }
    img:hover{
        // transform:scale(1.1);
        // transform:rotate(360deg);
    }
    .card h2 {
        font-size: 18px;
        margin-bottom: 5px;
    }

    .card p {
        font-size: 14px;
        color: #666;
    }
    button{
        margin-top:20px;
        padding:10px;
        border-radius:10px;
        border:none;
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

const server = http.createServer((req, res) => {
  const { pathname, query } = url.parse(req.url, true);
  if (pathname === "/") {
    res.writeHead(200, {
      "content-type": "text/html",
    });
    const finalHtml = htmlTemplate.replace("_products_", allCardStrings);
    res.end(finalHtml);
  } else if (pathname === "/product") {
    const id = query.id;
    const sItem = products[id-1];

    if (id) {
      //   res.end(`Product Data:\n ${searchItem.title}`);
      res.end(`
    
    <div style="border: 1px solid #ccc;text-align:center; padding: 10px; margin: 10px; width:600px">
        <h4>${sItem.title}</h4>
        <img src="${sItem.thumbnail}" />
        <p>${sItem.description}</p>
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
