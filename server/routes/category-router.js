const express = require("express");
const router = express.Router();
const categories = require("../controllers/category-controller");
const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })
// const upload = require("../middleware")


router.get("/category", categories.getAllCategories);
router.get("/category/:id", categories.getOneCategory);
router.post("/category" , upload.single("imageUrl") ,categories.createCategory);
router.put("/category/:id", categories.updateCategory);
router.delete("/category/:id", categories.deleteCategory);


module.exports = router;
