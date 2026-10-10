const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
    {
        name: {
            type : String,
            required: [true, "Product name is required"],
            trim: true
        },
 


    brand: {

        type: String,
        trim: true
    },

    category:{

        type: String,
        reuird: [true, "Category is required"],
        trim: true
    },


    shortDescription:{
        type: String,
        trim: true
    },


    desxription: {

        type: String,
        trim: true
    },


    price:{

        type: Number,
        reu
        
    }








      },

)

