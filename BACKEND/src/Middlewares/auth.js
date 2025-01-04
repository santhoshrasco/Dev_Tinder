const adminAuth = (req, res, next)=>{
    const token = "xyz";
    const authorizedAdmin = token==="xyz";
    if(!authorizedAdmin){
        res.statusCode(400).send(" unauthorised Admin")
    }else{
        next()
    }
};
const userAuth = (req,res,next)=>{
    const token = "abc";
    const authorizedUser = token==="abc";
    if(!authorizedUser){
        res.statusCode(400).send("unauthorised User")
    }else{
        next()
    }
}

module.exports = {adminAuth,userAuth};