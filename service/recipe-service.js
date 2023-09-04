// recipe-service.js
const { query } = require('mysql2/promise'); // Import the query function from mysql2/promise

const getAllRecipes = async (req, res) => {
    try {
      req.dbMysql.query('SELECT * FROM recippedia.recipe', 
      (err, results) => {
        if (err) {
          throw err;
        }
        res.status(200).json(results);
      });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  const getRecipesById = async (req, res) => {
    const { id } = req.params;
    try {
      req.dbMysql.query(
        'SELECT * FROM recippedia.recipe WHERE id = ?',
        [id],
        (err, results) => {
          if (err) {
            throw err;
          }
          if (results.length === 0) {
            res.status(404).json({ error: 'Recipe not found' });
            return;
          }
          res.status(200).json(results[0]);
        }
      );
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  const createRecipe = async (req, res) => {
    const { user_id, name, ingredients, instructions } = req.body;
    try {
      req.dbMysql.query(
        'INSERT INTO recippedia.recipe (user_id, name, ingredients, instructions) VALUES (?, ?, ?, ?)',
        [user_id, name, ingredients, instructions],
        (err, result) => {
          if (err) {
            throw err;
          }
          const newRecipe = { id: result.insertId, user_id, name, ingredients, instructions };
          res.status(201).json(newRecipe);
        }
      );
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  const updateRecipe = async (req, res) => {
    const { id } = req.params;
    const { user_id, name, ingredients, instructions } = req.body;
    try {
      req.dbMysql.query(
        'UPDATE recippedia.recipe SET user_id = ?, name = ?, ingredients = ?, instructions = ? WHERE id = ?',
        [user_id, name, ingredients, instructions, id],
        (err, result) => {
          if (err) {
            throw err;
          }
          if (result.affectedRows === 0) {
            res.status(404).json({ error: 'Recipe not found' });
            return;
          }
          res.status(200).json({ message: 'Recipe updated successfully' });
        }
      );
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  const deleteRecipe = async (req, res) => {
    const { id } = req.params;
    try {
      req.dbMysql.query(
        'DELETE FROM recippedia.recipe WHERE id = ?',
        [id],
        (err, result) => {
          if (err) {
            throw err;
          }
          if (result.affectedRows === 0) {
            res.status(404).json({ error: 'Recipe not found' });
            return;
          }
          res.status(200).json({ message: 'Recipe deleted successfully' });
        }
      );
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  module.exports = {
    getAllRecipes,
    getRecipesById,
    createRecipe,
    updateRecipe,
    deleteRecipe,
  };
  