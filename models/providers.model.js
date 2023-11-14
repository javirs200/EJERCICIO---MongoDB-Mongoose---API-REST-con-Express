const mongoose = require('mongoose');
var Schema = mongoose.Schema;
require('../config/db_mongo') // Conexión a BBDD MongoDB

/* ejemplo de objeto
{
    "_id": ObjectId("62b062cff3fa93bf9d66fa06"),//automatico por parte de mongoDB
    "company_name": "Teatro Marquina",
    "CIF": "B40236882",
    "address": "Calle de Prim 11",
    "url_web":"https://www.tortillasmarquina.com"
}
*/

const objectSchema = {
    company_name: { 
        type: String, 
        required: true,
        unique: true
    },
    CIF: { 
        type: String, 
        required: true,
        unique: true
    },
    address: { 
        type: String, 
        required: true
    },
    url_web:{
        type: String, 
        required: true
    }
};
// Crear el esquema
const providerSchema = mongoose.Schema(objectSchema);

// Crear el modelo --> Colección
const Provider = mongoose.model('Provider', providerSchema);

module.exports = Provider;