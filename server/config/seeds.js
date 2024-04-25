const db = require('./connection');
const { User, Recipe } = require('../models');
const cleanDB = require('./cleanDB');

db.once('open', async () => {
  await cleanDB('Recipe', 'Recipes');
  await cleanDB('User', 'users');


  const Recipes = await Recipe.insertMany([
    {
      name: 'Buffalo Chicken Wrap',
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: 'cookie-tin.jpg',
      instructions: 'https://tastesbetterfromscratch.com/buffalo-chicken-wrap/',
      ingredients: 'canola oil for frying, 1 cup all-purpose flour, 1/4 teaspoon black pepper, 1 teaspoon salt, 1/2 cup buttermilk, 8 chicken tenders, 1/4 cup Franks Red Hot sauce, 1/4 cup butter, four 12 inch wraps (I used Jalapeno cheddar, though thats up to you), 1/2 head romaine lettuce, roughly chopped, 1 cup blue cheese, crumbled, 1 tomato, stemmed, seeded, and chopped'
    },
    {
      name: 'Marry Me Chicken',
      description:
        'Praesent sed lacinia mauris. Nulla congue nibh magna, at feugiat nunc scelerisque quis. Donec iaculis rutrum vulputate. Suspendisse lectus sem, vulputate ac lectus sed, placerat consequat dui.',
      image: 'canned-coffee.jpg',
      instructions: 'https://littlesunnykitchen.com/marry-me-chicken/',
      ingredients: '3 large chicken breasts, 1/2 teaspoon salt, 1/4 teaspoon ground black pepper, 6 tablespoons all-purpose flour, 2 tablespoons olive oil, 2 tablespoons unsalted butter, 3 cloves garlic (minced), 1 cup chicken stock, 1 cup heavy cream, 1/2 cup parmesan cheese, 1 teaspoon chili flakes, 1/4  teaspoon oregano, 1/4 teaspoon thyme, 1/3 cup sundried tomatoes (chopped), 1 tablespoon fresh basil'
    },
    {
      name: 'Chicken Alfredo',
      description:
        'Donec volutpat erat erat, sit amet gravida justo sodales in. Phasellus tempus euismod urna. Proin ultrices nisi ut ipsum congue, vitae porttitor libero suscipit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam lacinia a nisi non congue.',
      image: 'toilet-paper.jpg',
      instructions: 'https://www.delish.com/cooking/recipe-ideas/a53695/one-pot-chicken-alfredo-recipe/',
      ingredients: '2 tablespoon extra-virgin olive oil, 2 boneless skinless chicken breasts, Kosher salt to taste, Freshly ground black pepper to taste , 2 cups low-sodium chicken broth, 2 cups whole milk, 2 cloves garlic (finely chopped), 8 oz fettuccine, 1 cup finely grated Parmesan , 1/2 cup heavy cream, Chopped fresh parsley for serving'
    },
    {
      name: 'Tuscan Chicken Skillet',
      description:
        'Donec volutpat erat erat, sit amet gravida justo sodales in. Phasellus tempus euismod urna. Proin ultrices nisi ut ipsum congue, vitae porttitor libero suscipit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam lacinia a nisi non congue.',
      image: 'toilet-paper.jpg',
      instructions: 'https://www.foodnetwork.com/recipes/food-network-kitchen/tuscan-chicken-skillet-5421728',
      ingredients: 'Kosher salt and freshly ground black pepper, 12 ounces fettuccine , 4 slices bacon (chopped), 1 pound chicken tenders (cut into 1-inch pieces), 2 cloves garlic (minced) 4 plum tomatoes (chopped), 1 cup heavy cream, 5 ounces baby spinach, 3/4 cup grated Parmesan, 3 tablespoons chopped fresh basil'
    }
  ]);

  console.log('Recipes seeded');

  await User.create({
    firstName: 'Pamela',
    lastName: 'Washington',
    email: 'pamela@testmail.com',
    password: 'password12345',
  });

  await User.create({
    firstName: 'Elijah',
    lastName: 'Holt',
    email: 'eholt@testmail.com',
    password: 'password12345'
  });

  console.log('users seeded');

  process.exit();
});
