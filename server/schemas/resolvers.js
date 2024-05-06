const { AuthenticationError } = require('apollo-server-express');
const { User, Food } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    users: async () => {
      return User.find().populate('foods');
    },
    foods: async (parent, { username }) => {
      const params = username ? { username } : {};
      return Food.find(params).sort({ createdAt: -1 });
    },
    food: async (parent, { foodId }) => {
      return Food.findOne({ _id: foodId });
    },
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id }).populate('foods');
      }
      throw new AuthenticationError('You need to be logged in');
    },
  },
  Mutation: {
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });
      if (!user) {
        throw new AuthenticationError('No user found with this email address');
      }
      const correctPw = await user.isCorrectPassword(password);
      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }
      const token = signToken(user);
      return { token, user };
    },
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);
      return { token, user };
    },
    addFood: async (parent, args, context) => {
      try {
        const myfood = await Food.create(args);
        const updatedUser = await User.findByIdAndUpdate(
          context.user._id,
          { $push: { foods: myfood._id } },
          { new: true }
        ).populate('foods');
        return myfood;
      } catch (error) {
        console.log(error);
        throw new Error('Failed to add food');
      }
    },
    updateFood: async (parent, args, context) => {
      try {
        const myfood = await Food.create(args);
        const updatedUser = await User.findByIdAndUpdate(
          context.user._id,
          { $push: { foods: myfood._id } },
          { new: true }
        ).populate('foods');
        return myfood;
      } catch (error) {
        console.log(error);
        throw new Error('Failed to add food');
      }
    },
    removeFood: async (parent, { id }, context) => {
      try {
        const removedFood = await Food.findByIdAndDelete(id);
        if (!removedFood) {
          throw new Error('Food not found');
        }
        const updatedUser = await User.findByIdAndUpdate(
          context.user._id,
          { $pull: { foods: id } },
          { new: true }
        ).populate('foods');
        return removedFood;
      } catch (error) {
        console.log(error);
        throw new Error('Failed to remove food');
      }
    },
  },
};

module.exports = resolvers;
