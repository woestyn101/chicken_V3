import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_FOOD = gql`
  mutation addFood($name: String!, $description: String, $instructions: String, $ingredients: ingredients, $image: image) {
    addFood(name: $name, description: $description, instructions: $instructions, ingredients: $ingredients, image: $image ) {
      _id
      name
      description
      instructions
      ingredients
      image
     
    }
  }
`;



