const mongoose = require('mongoose');
var Schema = mongoose.Schema;
require('../config/db_mongo') // Conexión a BBDD MongoDB

/*
{
    "_id": ObjectId("62b062cff3fa93bf9d66fa28"),
    "title": "Tortilla - Marquina",
    "price": 1.80,
    "description":"La mejor tortilla de la zona en el Teatro Marquina",
    "provider": ObjectId("62b062cff3fa93bf9d66fa06")
}
*/

const objectSchema = {
    title: { 
        type: String, 
        required: true,
        unique: true 
    },
    price: { 
        type: Number, 
        required: true 
    },
    description: { 
        type: String, 
        required: true 
    },
    provider:{
        type: Schema.Types.ObjectId, 
        ref: 'Provider'
    }
      
};
// Crear el esquema
const productSchema = mongoose.Schema(objectSchema);

// Crear el modelo --> Colección
const Product = mongoose.model('Product', productSchema);

module.exports = Product;
