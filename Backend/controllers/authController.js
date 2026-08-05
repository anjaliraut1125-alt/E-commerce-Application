const bcrypt = require("bcrypt");
const User = require("../models/User");
const jwt = require("jsonwebtoken");
// Register User

const register = async ( req , res) => {
    try {
        const { username , email , password , phone  , address , role} = req.body;

        //validation

        // username
        if(!username){
            return res.status(400).json({
                success: false,
                message: "Username is Required.",
            });
        }

        if (username.length < 3){
            return res.status(400).json({
                success: false,
                message: "Username must be at least 3 characters long.",
            });
        }

        // email

        if(!email){
            return res.status(400).json({
                success: false,
                message: "Email is Required.",
            });
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(!emailRegex.test(email)) 
            
            {
            return res.status(400).json({
                success: false,
                message: "Please enter a valid email address.",
            });
        }

        // Password
        
        if(!password){
            return res.status(400).json({
                success: false,
                message: "password is Required.",
            });
        }

        if (password.length < 6) {
            return res.status(400).json({
                success: false,
                message: "Password must be at least 6 characters long.",
            });
        }

        // phone
        if(!phone){
            return res.status(400).json({
                success: false,
                message: "Phone number is Required.",
            });
        }

        const phoneRegex = /^[6-9]\d{9}$/;  

        if(!phoneRegex.test(phone)){
            return res.status(400).json({
                success: false,
                message: "Please Enter a valid 10-digit phone number.",
            });
        }

        // addrss

        if(!address){
            return res.status(400).json({
                success: false,
                message: "Address is Required.",
            });
        }

        if(address.length < 5) {
            return res.status(400).json({
                success: false,
                message: "Address is must be at least 5 characters long.",
            });
        }

        // check existing user

        const existingUser = await User.findOne({email});
        if (existingUser) {
            return res.status(400).json({
                success: false,
                message: "Email Already Exists.",
            });
        }

        // Hssh Password

        const hashPassword = await bcrypt.hash(password, 10);


        // create User

        const user = await User.create({
            username,
            email,
            password: hashPassword,
            phone,
            address,
            role,
        });

        res.status(201).json({
            success: true,
            message: "User Registered Successfully.",
            data: {
                id: user._id,
                username: user.username,
                email: user.email,
                phone: user.phone,
                address: user.address 
            },

        });

    }catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};




// Login user

const login = async (req , res)=> {
    try{
        const { email , password } = req.body;

        //validation

        if (!email) {
            return res.status(400).json({
                success : false,
                message: "Email is required.",
            });
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(!emailRegex.test(email)) {
            return res.status(400).json({
                success: false,
                message: "Please enter a valid email address.",
            });
        }

        if(!password) {
            return res.status(400).json({
                success: false,
                message: "Password is required.",
            });
        }

        // Find User
        
        const user = await User.findOne({ email });

        if(!user) {
            return res.status(401).json({
                success: false,
                message: "Invalid email or password.",
            });
        }

        // Compare Password

        const isMatch  = await bcrypt.compare(password , user.password);

        if(!isMatch) {
            return res.status(401).json({
                suceess: false,
                message: "Invalid email or password."
            })
        }

        // genterate JWT Token
        const token = jwt.sign(
            {
                id: user._id,
                role: user.role,
            },
            process.env.JWT_SECRET,
            {
                expiresIn: process.env.JWT_EXPIRES_IN || "7d" ,
            }
        );

        res.status(200).json({
            success: true,
            message: "Login Successfully.",
            token,
            data:{
                id: user.id,
                username: user.username,
                email: user.email,
                phone: user.phone,
                address: user.address
            },
        });

        
    } catch (error){
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }


};



// Logout USer

const logout = async (req , res) => {
    try{
        
        res.status(200).json({
            success: true,
            message: "Logout successully.",
        });
    
    }catch(error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
    

};


module.exports = {
    register,
    login,
    logout,
};