const db = require('./connection');
const { User, Food } = require('../models');
const cleanDB = require('./cleanDB');
const foodData = require('./food.json');
const usersData = require('./users.json');
db.once('open', async () => {

  try{
    await cleanDB('Food', 'foods');
    await cleanDB('User', 'users');

    await User.create(usersData);
  
  
    for (let i = 0; i < foodData.length; i++) {
      const { _id, foodAuthor } = await Food.create(foodData[i]);
      const user = await User.findOneAndUpdate(
        { username: foodAuthor },
        {
          $addToSet: {
            foods: _id,
          },
        }
      );
    }

  }catch (err) {
    console.error(err);
    process.exit(1);
  }
  console.log('all done!');
  process.exit(0);
});
