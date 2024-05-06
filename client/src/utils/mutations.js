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
  mutation addFood($name: String!, $description: String, $instructions: String, $ingredients: String, $image: String, $foodAuthor: String ) {
    addFood(name: $name, description: $description, instructions: $instructions, ingredients: $ingredients, image: $image, foodAuthor: $foodAuthor ) {
      _id
      name
      description
      instructions
      ingredients
      image
      foodAuthor
     
    }
  }
`;


export const REMOVE_FOOD = gql`
  mutation removefood($id: ID!, ) {
    removeFood(_id:$id) {
      _id
      name
      description
      instructions
      ingredients
      image
      foodAuthor
    }
  }
`;

export const UPDATE_FOOD = gql`
  mutation updateFood($foodid: ID!,$name: String!, $description: String, $instructions: String, $ingredients: String, $image: String, $foodAuthor: String ) {
    updateFood(foodid: $foodid, name: $name, description: $description, instructions: $instructions, ingredients: $ingredients, image: $image, foodAuthor: $foodAuthor ) {
      _id
      name
      description
      instructions
      ingredients
      image
      foodAuthor
     
    }
  }
`;



