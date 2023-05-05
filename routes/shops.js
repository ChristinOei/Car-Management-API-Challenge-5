const router = require("express").Router();
const shopController = require("../controller/shopController");
// midleware
const Auth = require("../middleware/auth");
const checkrole = require("../middleware/checkrole");

// shops
// Bikin API produk yg tidak bisa diakses kecuali admin dan superadmin
router.get("/", shopController.getShops);
router.get("/search", Auth, shopController.searchShops);
router.get("/:id", Auth, shopController.getShopById);
router.put("/:id", Auth, shopController.editShop);
router.delete("/:id", Auth, shopController.deleteShop);
router.post("/api/v1/shops", Auth, checkrole(`admin`), shopController.createShop);

// Dashboard

module.exports = router;
