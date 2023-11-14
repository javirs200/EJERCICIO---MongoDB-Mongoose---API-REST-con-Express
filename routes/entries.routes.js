const express = require('express');

const entriesApiController = require("../controllers/entries.controller");
const entriesApiRouter = express.Router();

// [GET] http://localhost:3000/api/entries/
entriesApiRouter.get('/', entriesApiController.getEntries);

//[PUT] http://localhost:3000/api/entries/  -> spect json objet {title, content, date, category} 
entriesApiRouter.put('/', entriesApiController.putEntry);

//[DELETE] http://localhost:3000/api/entries/ acept param title
entriesApiRouter.delete('/:title', entriesApiController.deleteEntry);

module.exports = entriesApiRouter;
