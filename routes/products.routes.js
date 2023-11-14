const productsApiController = require('../controllers/products.controller');
const router = require('express').Router();

router.get("/:id?", productsApiController.getProduct);
router.post("/", productsApiController.createProduct);
router.put("/", productsApiController.editProduct);
router.delete("/:id?", productsApiController.deleteProduct);

module.exports = router;