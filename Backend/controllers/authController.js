const bcrypt = require("bcrypt");
const User = require("../models/User");

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

module.exports = {
    register
};