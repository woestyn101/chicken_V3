//const { gql } = require('apollo-server-express');

const typeDefs =`
  type User {
      _id: ID!
      username: String!
      email: String!
  
  }

  type Food {
     name: String!
     description: String
     ingredients: String
     instructions: String    
     image: String
    
}


  type Auth {
      token: ID!
      user: User
  }

  type Query {
      me: User  
      foods: [Food]

  }
  

  type Mutation {
      login( email: String!, password: String!): Auth
      addUser(username: String!, email: String!, password: String!): Auth
      addFood(name: String, description: String, instructions: String, ingredients: String, image: String): Food
   
  }
`;

module.exports = typeDefs;
