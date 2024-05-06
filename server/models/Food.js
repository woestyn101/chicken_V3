const { Schema, model } = require('mongoose');

const foodSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true, 
  },
  description: {
    type: String,
  },
  instructions: {
    type: String,
  },
  ingredients: {
    type: String,
  },
  image: {
    type: String,
  },
  foodAuthor: {
    type: String,
    required: true, 
    trim: true, 
  },
  createdAt: {
    type: Date,
    default: Date.now, 
  },
});


const Food = model('Food', foodSchema);

module.exports = Food;
