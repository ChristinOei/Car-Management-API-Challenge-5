const router = require("express").Router();
// import package swagger
const swaggerUi = require("swagger-ui-express");
// import file json

const swaggerDocument = require("../docs/swagger.json");
// API docs => dokumentasi API
router.use("/api-docs", swaggerUi.serve);
router.use("/api-docs", swaggerUi.setup(swaggerDocument));

const admin = require("./adminproduct");
const user = require("./users");
const shop = require("./shops");
const product = require("./product");

//API
router.use("/admin/product", admin);
router.use("/api/v1/users/", user);
router.use("/api/v1/shops/", shop);
router.use("/api/v1/product/", product);

// Dashboard

module.exports = router;
