const jwt = require("jsonwebtoken");
const User = require("../models/User");

//protected Routes Token Base

const requireSignIn = async (req , res , next) => {
    try{
        const decode = jwt.verify(
            req.headers.authorization,
            process.env.JWT_SECRET
        );

        req.user = decode;
        next();
    }

    catch(error) {
        console.log(error);
    }


};



//Admin Acess

const isAdmin = async (req, res, next)=>{
    try{

        const user = await User.findById(req.user.id);
        if(user.role !== "admin") {
            return res.status(401).send({
              sucess: false,
              message: "UnAuthorized Access",  
            });
        }

        next();
    } catch(error){
        console.log(error);
        res.status(401).send({
            success: false,
            error,
            message: "Error in admin middleware",
        });
    }
};

module.exports = {
    requireSignIn,
    isAdmin
};