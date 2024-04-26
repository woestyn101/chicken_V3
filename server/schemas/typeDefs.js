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

  }
  

  type Mutation {
      login( email: String!, password: String!): Auth
      addUser(username: String!, email: String!, password: String!): Auth
   
  }
`;

module.exports = typeDefs;
