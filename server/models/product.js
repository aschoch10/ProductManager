const mongoose = require ('mongoose');

const ProductSchema = new mongoose.Schema({
    title:{
        type: String,
        required: [true, "{PATH} must be present"], 
        minlength: [5, "{PATH} must be at least 5 characters"]
    },
    price:{
        type: String,
        required: [true, "{PATH} must be present"], 
        minlength: [5, "{PATH} must be at least 5 characters"]
    },
    description: {
        type: String,
        minlength: [5, "{PATH} must be at least 5 characters"]
    }
}, {timestamps: true})

const Product = mongoose.model("Product", ProductSchema);
module.exports = Product;