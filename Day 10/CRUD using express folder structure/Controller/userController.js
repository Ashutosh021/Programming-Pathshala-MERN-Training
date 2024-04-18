const fsPromise=require('fs/promises')
const getuser=(req,res)=>{
    res.status(501);
    res.json({
        status:'fail',
        message:'GET: Route is not yet implemented',
    });
}
const adduser=(req,res)=>{
    res.status(501);
    res.json({
        status:'fail',
        message:'POST: Route is not yet implemented',
    });
}
const edituser=(req,res)=>{
    res.status(501);
    res.json({
        status:'fail',
        message:'PUT: Route is not yet implemented',
    });
}
const deleteuser=(req,res)=>{
    res.status(501);
    res.json({
        status:'fail',
        message:'DELETE: Route is not yet implemented',
    });
}
module.exports={
    getuser,edituser,deleteuser,adduser
}