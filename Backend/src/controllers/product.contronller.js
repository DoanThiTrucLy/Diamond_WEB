import Product from '../models/product.model.js';

// [POST] /product
const createProduct = async(req, res) => {
    const {name, size,  material, chief_officer, Additional_pills, price, image} = req.body;
    try {
        const product = await Product.create({
            name,
            size,
            material, chief_officer, Additional_pills, price, image
        });
        return res.status(201).json(product);
    } catch {
        return res.status(500).json('Something wrong');
    }
}


// [GET] /product
const getProducts = async(req, res) => {
    try {
        const products = await Product.find({});
        return res.status(200).json(products);
    } catch {
        return res.status(500).json('Something wrong');
    }
}

// [DELETE] /product/:id
const deleteProduct = async(req, res) => {
    try {
        const product = await Product.findOneAndDelete({
            _id: req.params.id
        });
        return res.status(200).json(product);
    } catch {
        return res.status(500).json('Something wrong');
    }
}

//[PUT] /product/:id
const updateProduct = async(req, res) => {
    const {name, size, material, chief_officer, Additional_pills, price, image} = req.body;
    try {
        const product = await Product.findOneAndUpdate({
            _id: req.params.id
        }, {name, size, material, chief_officer, Additional_pills, price, image}, {new: true});

        return res.status(200).json(product);
    } catch {
        return res.status(500).json('Something wrong');
    }
}

export default {createProduct, getProducts, deleteProduct, updateProduct};
