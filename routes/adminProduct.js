const router = require("express").Router();

const adminProduct = require("../controller/admincontroller");
// const Auth = require('../middleware/auth');

router.get("/", adminProduct.getProduct);
router.get("/create", adminProduct.createProduct);

module.exports = router;
