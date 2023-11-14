const providerApiController = require('../controllers/provider.controller');
const router = require('express').Router();

router.get("/:id?", providerApiController.getProvider);
router.post("/", providerApiController.createProvider);
router.put("/", providerApiController.editProvider);
router.delete("/:id?", providerApiController.deleteProvider);

module.exports = router;
