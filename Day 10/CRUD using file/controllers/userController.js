const getUser = (req,res)=>{
    res.status(501);
    res.json(
        {
            status:"success",
            message:"Get Route is not Implemented"
        }
    );
}

const addUser=(req,res)=>{
    res.status(501);
    res.json(
        {
            status:"success",
            message:"Post Route is not Implemented"
        }
    );
}


const replaceUser=(req,res)=>{
    res.status(501);
    res.json(
        {
            status:"success",
            message:"Put Route is not Implemented"
        }
    );
}


const deleteUser=(req,res)=>{
    res.status(501);
    res.json(
        {
            status:"success",
            message:"Deleted Route is not Implemented"
        }
    );
}

module.exports = {
    getUser,
    addUser,
    replaceUser,
    deleteUser
};