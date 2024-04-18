const fsPromise=require('fs/promises')

const getAllProducts=async(req,res)=>{
    const data=await fsPromise.readFile('./data.json','utf-8')
    const arr=JSON.parse(data);
    res.json({
        status:'success',
        data:{
            products:arr,
        }
    })
}
const addProduct=async (req, res) => {
    // console.log(Object.keys(req))
    // console.log(req.body)
    const data = req.body;
    const db = await fsPromise.readFile('./data.json', 'utf-8')
    const arr = JSON.parse(db)
    const len = arr.length;
    const newProduct = data;
    if (len == 0) {
        newProduct.id = 1;
        // console.log(arr)
        // arr.push(data);
        // console.log(arr);
        // fspromise.writeFile('./newdata.json',JSON.stringify(arr));
    }
    else {
        newProduct.id = (arr[len - 1].id) + 1;
        // const neweId=db[len-1];
    }
    arr.push(newProduct)
    fsPromise.writeFile('./data.json', JSON.stringify(arr));
    res.json({
        status: 'success',
        result: 1,
        data: {
            newProduct: newProduct,
        }
    })
    // res.send('work in progress.....')
}
const replaceproduct=async (req, res) => {
    const arr = JSON.parse(await fsPromise.readFile("./data.json", "utf8"));
    // res.send("karya pragati par hai");
    const reqid = parseInt(req.params.id);

    const data = req.body;
    data.id = reqid;
    const newArr = arr.map((elem) => {
        if (elem.id == reqid) return data;
        else return elem;
    });
    fsPromise.writeFile("./data.json", JSON.stringify(newArr));
    res.json({
        status: 'success',
        results: 1,
        data: {
            newProduct: data,
        }
    })
    console.log(data);
}



const deleteProduct=async (req, res) => {
    const reqid = parseInt(req.params.id)
    const arr = JSON.parse(await fsPromise.readFile("./data.json", "utf-8"))
    const newarr = arr.filter((elem) => {
        if (elem.id === reqid) return false;
        else return true;
    })
    fsPromise.writeFile("./data.json", JSON.stringify(newarr));
    res.json({
        status: 'success',
        data: {
            newProduct: null
        }
    })
}
module.exports={
    getAllProducts,
    addProduct,
    replaceproduct,
    deleteProduct,
}