const Product = require('../models/products.model');
const Provider = require('../models/providers.model');

// CREATE
const createProduct = async (req, res) => {
    try{
        const data = req.body;
        if(data.provider){
            let obj = {_id: data.provider}
            let providerAnswer = await Provider.find(obj);
            if(providerAnswer.length > 0){
                let answer = await new Product(data).save();
                res.status(201).json({message: 'producto creado', producto: answer});
            }else{
                res.status(400).json({message: "producto no creado , proveedor no encontrado"});
            }
        }else{
            res.status(400).json({message: "producto no creado , proveedor no encontrado"});
        }
        
    }catch (error) {
        console.log(`ERROR: ${error.stack}`);
        res.status(400).json({msj:`ERROR: ${error.stack}`});
    }
}

// READ
const getProduct = async (req, res) => {
        try {
            let Products = await Product.find({}).populate('provider').exec()
            res.status(200).json(Products);
        }
        catch (error) {
            console.log(`ERROR: ${error.stack}`);
            res.status(400).json({msj:`ERROR: ${error.stack}`});
        }
}

// UPATE
const editProduct = async (req, res) => {
    try {
        const data = req.body
        const id = data.company_name;
        const providerId = data.provider;
        if(id && providerId){
            let obj = {_id: data.provider}
            let providerAnswer = await Provider.find(obj);
            if(providerAnswer.length > 0){
                let result = await Product.updateMany({company_name:id},{$set :data})
                if(result.matchedCount == 0)
                    res.status(400).json({message: `producto ${id} no encontrado`});
                else if(result.modifiedCount == 0)
                    res.status(400).json({message: `producto ${id} no modificado`});
                else if(result.acknowledged && result.modifiedCount > 0)
                    res.status(201).json({message: "producto actualizado",product:{data}}); 
            }else{
                res.status(400).json({message: "producto no creado , proveedor no encontrado"});
            }
              
        }else{
            res.status(400).json({message: "formato de producto erroneo"});
        }
    }
    catch (error) {
        console.log(`ERROR: ${error.stack}`);
        res.status(400).json({msj:`ERROR: ${error.stack}`});
    }
}

// DELETE
const deleteProduct = async (req, res) => {
    try {
        const data = req.body
        const id = data.company_name;
        if(id){
            let result = await Product.deleteOne({company_name:id})
            if(result.deletedCount == 0)
                res.status(400).json({message: `producto ${id} no encontrado`});
            else
                res.status(200).json({message: "producto BORRADO", product:{data}})
        }else{
            res.status(400).json({message: "formato de producto erroneo"});
        }
    }
    catch (error) {
        console.log(`ERROR: ${error.stack}`);
        res.status(400).json({msj:`ERROR: ${error.stack}`});
    }
}

module.exports = {
    createProduct,
    getProduct,
    editProduct,
    deleteProduct
}