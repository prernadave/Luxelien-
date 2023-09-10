const poolPromise = require("../config");

const CategoryController = {}

CategoryController.getParentCategory = async (req, res) => {
    try {
      const pool = await poolPromise;
      const [rows, fields] = await pool.query('SELECT * FROM parent_categories');
      res.status(200).json(rows);
    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ error: error.message });
    }
  };

  CategoryController.getCategories = async (req, res) => 
  {
    const parentCategoryId = req.params.parentCategoryId;
    try {
      const pool = await poolPromise;
      const [rows, fields] = await pool.query(`SELECT * FROM categories Where parent_category_id = ${parentCategoryId}`);
      res.status(200).json(rows);
    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ error: error.message });
    }
  }

  CategoryController.getSubCategories = async (req, res) => 
  {
    const categoryId = req.params.categoryId;
    try {
      const pool = await poolPromise;
      const [rows, fields] = await pool.query(`select * from subcategories Where category_id = ${categoryId}`);
      res.status(200).json(rows);
    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ error: error.message });
    }
  }
    module.exports = CategoryController;
    
