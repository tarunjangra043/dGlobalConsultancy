const express = require("express");
const {
  getProducts,
  purchaseProduct,
  renewProduct,
} = require("../controllers/productController");

const router = express.Router();

router.get("/", getProducts);
router.post("/purchase", purchaseProduct);
router.post("/renew", renewProduct);

exports.productRoute = router;
