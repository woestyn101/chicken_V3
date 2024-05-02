import { gql } from '@apollo/client';

export const QUERY_FOOD = gql`
  query getfood($name: String!) {
    food(name: $name) {
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

export const QUERY_FOODS = gql`
  query getFoods {
    foods {
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

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      foods {
        _id
        name
        description
        instructions
        ingredients
        image
        foodAuthor
      }
    }
  }
`;

export const QUERY_SINGLE_FOOD = gql`
  query getSingleFood($foodId: ID!) {
    food(foodId: $foodId) {
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

export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
      foods {
        _id
        name
        description
        instructions
        ingredients
        image
        foodAuthor
      }
    }
  }
`;



