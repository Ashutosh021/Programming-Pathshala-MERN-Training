const fsPro = require("fs/promises");
const getAllProducts = async (req, res) => {
  // const data =fs.readFileSync('./data.json',"utf-8");
  const data = await fsPro.readFile("./data.json", "utf-8");
  // const arr=JSON.parse(data).products;
  const arr = JSON.parse(data);
  res.json({
    status: "success",
    // results:arr.length,
    data: {
      products: arr,
    },
  });
};

const addProduct = async (req, res) => {
  const data = req.body;
  const db = await fsPro.readFile("./data.json", "utf-8");
  const arr = JSON.parse(db);
  const len = arr.length;
  const newProduct = data;
  if (len == 0) {
    newProduct.id = 1;
  } else {
    newProduct.id = arr[len - 1].id + 1;
  }
  arr.push(newProduct);
  fsPro.writeFile("./data.json", JSON.stringify(arr));
  res.json({
    status: "success",
    result: 1,
    data: {
      products: data,
    },
  });
};

const replaceProduct = async (req, res) => {
  const arr = JSON.parse(await fsPro.readFile("./data.json", "utf8"));
//   res.send("karya pragati par hai");
  const reqId = parseInt(req.params.id);

  const data = req.body;
  data.id = reqId;
  const newArr = arr.map((elem) => {
    if (elem.id == reqId) return data;
    else return elem;
  });
  fsPro.writeFile("./data.json", JSON.stringify(newArr));
  res.json({
    status: "success",
    results: 1,
    data: {
      newProduct: data,
    },
  });
  console.log(data);
};

const deleteProduct = async (req, res) => {
  const reqid = parseInt(req.params.id);
  const arr = JSON.parse(await fsPro.readFile("./data.json", "utf-8"));
  const newarr = arr.filter((elem) => {
    if (elem.id === reqid) return false;
    else return true;
  });
  fsPro.writeFile("./data.json", JSON.stringify(newarr));
  res.json({
    status: "success",
    data: {
      newProduct: null,
    },
  });
};

module.exports = {
  getAllProducts,
  addProduct,
  replaceProduct,
  deleteProduct,
};
