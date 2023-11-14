const Provider = require('../models/providers.model');

// CREATE
const createProvider = async (req, res) => {
    console.log(req.body);
    try{
        const data = req.body;
        let answer = await new Provider(data).save();
        res.status(201).json(answer);
    }catch (error) {
        console.log(`ERROR: ${error.stack}`);
        res.status(400).json({msj:`ERROR: ${error.stack}`});
    }
}

// READ
const getProvider = async (req, res) => {
        try {
            const id = req.body.company_name;
            let Providers = id? await Provider.find({id}) : await Provider.find({}); //{}
            res.status(200).json(Providers); // Respuesta de la API para 1 Provider
        }
        catch (error) {
            console.log(`ERROR: ${error.stack}`);
            res.status(400).json({msj:`ERROR: ${error.stack}`});
        }
}

// UPATE
const editProvider = async (req, res) => {
    try {
        const data = req.body
        const id = data.company_name;
        if(id){
            let result = await Provider.updateMany({company_name:id},{$set :data})
            if(result.matchedCount == 0)
                res.status(400).json({message: `proveedor ${id} no encontrado`});
            else if(result.modifiedCount == 0)
                res.status(400).json({message: `proveedor ${id} no modificado`});
            else if(result.acknowledged && result.modifiedCount > 0)
                res.status(201).json({message: "proveedor actualizado", provider:{data}});   
        }else{
            res.status(400).json({message: "formato de proveedor erroneo"});
        }
    }
    catch (error) {
        console.log(`ERROR: ${error.stack}`);
        res.status(400).json({msj:`ERROR: ${error.stack}`});
    }
}

// DELETE
const deleteProvider = async (req, res) => {
    try {
        const data = req.body
        const id = data.company_name;
        if(id){
            let result = await Provider.deleteOne({company_name:id})
            if(result.deletedCount == 0)
                res.status(400).json({message: `proveedor ${id} no encontrado`});
            else
                res.status(200).json({message: "proveedor BORRADO", provider:{data}})
        }else{
            res.status(400).json({message: "formato de proveedor erroneo"});
        }
    }
    catch (error) {
        console.log(`ERROR: ${error.stack}`);
        res.status(400).json({msj:`ERROR: ${error.stack}`});
    }
}

module.exports = {
    createProvider,
    getProvider,
    editProvider,
    deleteProvider
}


