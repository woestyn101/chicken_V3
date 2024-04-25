const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
      _id: ID!
      username: String!
      email: String!
  
  }

  type recipe {
      authors: [String]
      description: String
      name: String!
      image: String
      instructions: String!
      ingredients:  String!
  }

  type Auth {
      token: ID!
      user: User
  }

  type Query {
      me: User  

  }

  input recipeData {
    authors: [String]
      description: String
      name: String!
      image: String
      instructions: String!
      ingredients:  String!

  }

  type Mutation {
      login( email: String!, password: String!): Auth
      addUser(username: String!, email: String!, password: String!): Auth
   
  }
`;

module.exports = typeDefs;
