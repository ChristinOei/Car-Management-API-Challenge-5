const router = require("express").Router();

const adminProduct = require("../controller/admincontroller");
// const Auth = require('../middleware/auth');

router.get("/", adminProduct.getProduct);

module.exports = router;
