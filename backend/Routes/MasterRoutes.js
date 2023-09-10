const express = require('express');
const CategoryController = require('../Controllers/CategoryController');
const router = express.Router();

router.get('/parent/category/list', CategoryController.getParentCategory)
router.get('/category/list/:parentCategoryId', CategoryController.getCategories)
router.get('/subcategory/list/:categoryId',CategoryController.getSubCategories)

module.exports = router;
