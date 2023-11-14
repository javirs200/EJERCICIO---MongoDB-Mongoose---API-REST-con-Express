const mongoose = require("mongoose");
require('dotenv').config()

mongoose.set('strictQuery', false);

mongoose.connect(process.env.DB_URL); //{ useNewUrlParser: true, useUnifiedTopology: true} deprecated

const db = mongoose.connection;

// Eventos
db.on("error", error => console.log(error));
db.once("open", () => console.log("connection to MongoDB established"));

module.exports = mongoose;