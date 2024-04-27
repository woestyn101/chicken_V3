const db = require('./connection');
const { User, Food } = require('../models');
const cleanDB = require('./cleanDB');
const foodData = require('./food.json');
const usersData = require('./users.json');
db.once('open', async () => {
  await cleanDB('Food', 'foods');
  await cleanDB('User', 'users');


  await Food.insertMany(foodData);

  console.log('Recipes seeded');

  await User.insertMany(usersData);

  console.log('users seeded');

  process.exit();
});
