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

    }
  }
`;

export const QUERY_FOODS = gql`
  query getFoods {
    foods {
      name
      description
      instructions
      ingredients
      image
    }
  }
`;



