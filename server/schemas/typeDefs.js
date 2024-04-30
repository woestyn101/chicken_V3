//const { gql } = require('apollo-server-express');

const typeDefs =`
  type User {
      _id: ID!
      username: String!
      email: String!
      foods:[Food]!
  
  }

  type Food {
    _id: ID
     name: String!
     description: String
     ingredients: String
     instructions: String    
     image: String
     foodAuthor: String
    
}


  type Auth {
      token: ID!
      user: User
  }

  type Query {
    users: [User]
    user(username: String!): User
    foods(username: String): [Food]
    food(foodId: ID!): Food
    me: User
  }
  

  type Mutation {
      login( email: String!, password: String!): Auth
      addUser(username: String!, email: String!, password: String!): Auth
      addFood(name: String, description: String, instructions: String, ingredients: String, image: String): Food
      removeFood(foodId: ID!): Food
   
  }
`;

module.exports = typeDefs;
