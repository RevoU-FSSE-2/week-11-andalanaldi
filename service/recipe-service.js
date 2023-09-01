// recipe-service.js
const { query } = require('mysql2/promise'); // Import the query function from mysql2/promise

// ...

const getAllRecipes = async (req, res) => {
    try {
        const recipes = await query("SELECT * FROM recippedia.recipe WHERE isDeleted = false");
        res.status(200).json({
            message: 'Recipes successfully retrieved',
            data: recipes,
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getRecipesById = async (req, res) => {
    try {
        const id = req.params.id;
        const [recipe] = await query(`SELECT * FROM recippedia.recipe WHERE id = ?`, [id]);

        if (!recipe) {
            res.status(404).json({ error: 'Recipe not found' });
            return;
        }

        res.status(200).json({
            message: 'Recipe successfully retrieved',
            data: recipe,
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};



const createRecipe = async (req, res) => {
    const { user_id, name, ingredients, instructions, created_at, updated_at } = req.body;
  
    try {
      const newRecipes = await query(`
        INSERT INTO recippedia.recipe (user_id, name, ingredients, instructions, created_at, updated_at)
        VALUES (?, ?, ?, ?, ?, ?)
      `, [user_id, name, ingredients, instructions, created_at, updated_at]);
  
      res.status(200).json({
        message: 'Recipe request successfully created',
        data: newRecipes, 
      });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
};

const updateRecipe = async (req, res) => {
    const { id, name, ingredients, instructions, created_at, updated_at } = req.body;

    try {
        const updatedRecipes = await query(`
            UPDATE recippedia.recipe
            SET name = ?, ingredients = ?, instructions = ?, created_at = ?, updated_at = ?
            WHERE id = ?
        `, [name, ingredients, instructions, created_at, updated_at, id]);

        if (updatedRecipes[0].affectedRows === 0) {
            // Recipe not found
            res.status(404).json({ error: 'Recipe not found' });
            return;
        }

        res.status(200).json({
            message: 'Recipe successfully updated',
            data: updatedRecipes,
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


const deleteRecipe = async (req, res) => {
    const id = req.params.id;

    try {
        const deletedRecipes = await query(`
            DELETE FROM recippedia.recipe
            WHERE id = ?
        `, [id]);

        if (deletedRecipes[0].affectedRows === 0) {
            // Recipe not found
            res.status(404).json({ error: 'Recipe not found' });
            return;
        }

        res.status(200).json({
            message: 'Recipe successfully deleted',
            data: deletedRecipes,
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


module.exports = {
  getAllRecipes,
  getRecipesById,
  createRecipe,
  updateRecipe,
  deleteRecipe
};
