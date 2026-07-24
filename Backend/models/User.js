const mongoose = require("mongoose");

const  userSchema  = new mongoose.Schema({

    Username : {
        type : String,
        required : true
    },

    Email : {
        type : String,
        required : true,
        unique : true
    },

    Password : {
        type :  String,
        required : true

    },

    Address : {
        type : String,
        required : true
    },

    PhoneNo : {

        type : String,
        required : true
    },

    Role : {
        type : String,
        required : true
    }
    

},{timestamps : true});

module.exports = mongoose.model("User",userSchema);