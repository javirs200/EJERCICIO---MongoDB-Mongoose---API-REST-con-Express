const express = require('express');

const authorsApiController = require("../controllers/authors.controller");
const authorsApiRouter = express.Router();

// [GET] http://localhost:3000/api/authors/
// [GET] http://localhost:3000/api/authors?email=alejandru@thebridgeschool.es 
authorsApiRouter.get('/', authorsApiController.getAuthors);

// [POST] http://localhost:3000/api/authors/
authorsApiRouter.post('/', authorsApiController.createAuthor);

// [PUT] http://localhost:3000/api/authors/
authorsApiRouter.put('/', authorsApiController.updateAuthor);

// [DELETE] http://localhost:3000/api/authors/
authorsApiRouter.delete('/', authorsApiController.deleteAuthor);

module.exports = authorsApiRouter;
