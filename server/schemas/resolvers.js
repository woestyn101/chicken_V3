// const { AuthenticationError } = require('apollo-server-express');
const { User, Food } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');


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
            console.log(context.user);
            if (context.user) {
              let userData = await User.findOne({ _id: context.user._id }).select('-__v').populate('foods');
              console.log(userData);
              return userData
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
            try {
                const myfood = await Food.create(args);           
               console.log(args._id);

                let updatedUser = await User.findByIdAndUpdate(args._id,  {
                  $push: { foods: myfood._id},
                });
                console.log(updatedUser);
        
               // return myfoods;

            } catch (error) {
                console.log(error)
            }
           
        },
        updateFood: async (parent, { _id, name, description, ingredients, instructions, foodAuthor }) => {
             
          return await Food.findByIdAndUpdate(_id, args, { new: true });
        },
        removeFood: async (parent, args) => {
          return await Food.findByIdAndDelete(_id, args, { new: true });
        },
        
    },
    
};

module.exports = resolvers;