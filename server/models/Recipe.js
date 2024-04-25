const mongoose = require('mongoose');

const { Schema } = mongoose;

const recipeSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  ingredients: {
    type: String
  },
  instructions: {
    type: String
  },
  image: {
    type: String
  }
});

const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;
