// const { AuthenticationError } = require('apollo-server-express');
const { User, Food } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');


const resolvers = {
    Query: {
        users: async () => {
            return User.find().populate('foods');
          },
          user: async (parent, { username }) => {
            return User.findOne({ username }).populate('foods');
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
            throw AuthenticationError;
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
        addFood: async (parent, args) => {
            console.log(args)
            const myfood = await Food.create(args);           
            return myfood ;
        },
    },
};

module.exports = resolvers;