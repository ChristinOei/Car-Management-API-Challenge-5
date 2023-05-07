const router = require("express").Router();
const productController = require("../controller/productController");
// const Auth = require("../middleware/auth");

// midleware
const Auth = require("../middleware/auth");

// API
// product
router.get("/", Auth, productController.getProducts);
router.get("/search", Auth, productController.searchProduct);
router.get("/:id", Auth, productController.getProductById);
router.put("/:id", Auth, productController.editProduct);
router.delete("/:id", Auth, productController.deleteProduct);
router.post("/", Auth, productController.createProduct);

// Dashboard

module.exports = router;
