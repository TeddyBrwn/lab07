const express = require("express");
const router = express.Router();
const {
  createProduct,
  getProducts,
  updateProduct,
  deleteProduct,
} = require("../controllers/productController");

// Route để tạo sản phẩm mới
router.post("/product", createProduct);

// Route để lấy danh sách tất cả sản phẩm
router.get("/products", getProducts);

// Route để cập nhật sản phẩm
router.put("/product/:id", updateProduct);

// Route để xóa sản phẩm
router.delete("/product/:id", deleteProduct);

module.exports = router;
