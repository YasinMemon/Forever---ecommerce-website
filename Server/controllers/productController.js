const { v2: cloudinary } = require('cloudinary');
const productModel = require('../models/productModel');

const addProduct = async (req, res) => {
    try {
        const { name, description, price, category, subCategory, sizes, bestseller } = req.body;
        const sizesArray = sizes.split(',').map(size => size.trim());

        const img1 = req.files.img1 && req.files.img1[0];
    const img2 = req.files.img2 && req.files.img2[0];
    const img3 = req.files.img3 && req.files.img3[0];
    const img4 = req.files.img4 && req.files.img4[0];

    const images = [ img1, img2, img3, img4].filter((item) => item !== undefined);

    const imgaeURL = await Promise.all(
        images.map(async (item) => {
            let result = await cloudinary.uploader.upload(item.path, {resource_type: 'image'});
            return result.secure_url;
        })
    )

    const newProduct = await productModel.create({
        name, 
        description,
        price: Number(price),
        category,
        subCategory,
        sizes: sizesArray,
        bestseller: bestseller === 'true' ? 'true' : 'false',
        images: imgaeURL,
        date: Date.now()
    });
    
    res.json({ success:true, message: "product added successfully" });    
    } catch (err) {
        // Return error response if something goes wrong
        return res.status(500).json({ success: false, message: "Server error", error: err.message });
    }
    
}

const removeProduct = async (req, res) => {
    try {
        const { id } = req.body;
        
        // Check if the id is provided
        if (!id) {
            return res.status(400).json({ success: false, message: "Product ID is required" });
        }

        // Attempt to find and delete the product
        const deletedProduct = await productModel.findByIdAndDelete(id);
        
        // If no product is found, return an error
        if (!deletedProduct) {
            return res.status(404).json({ success: false, message: "Product not found" });
        }

        // Return success message if product is deleted
        return res.json({ success: true, message: "Product deleted successfully" });
    } catch (error) {
        // Return error response if something goes wrong
        return res.status(500).json({ success: false, message: "Server error", error: error.message });
    }
}


const listProduct = async (req, res) => {
    try {
        const products = await productModel.find({});
        res.json({success:true, products});
    } catch (err) {
        console.error(err);
        res.json({success:false, message: err.message});
    }
}

const singleProduct = async (req, res) => {
    try {
        const { id } = req.body

        const product = await productModel.findById(id);
        
        if(!product) return res.json({ success:false, message:'page not found 404' }).status(404);

        return res.json({success:true, product});
    } catch (err) {
        // Return error response if something goes wrong
        return res.status(500).json({ success: false, message: "Server error", error: err.message });
    }
}

module.exports = {
    addProduct,
    removeProduct,
    listProduct,
    singleProduct
}