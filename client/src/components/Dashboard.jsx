import React from 'react';
import { Link } from 'react-router-dom';
import '../components/styles/navBar.css';
import { useQuery } from '@apollo/client';
import ChickenList from './ChickenList';
import { QUERY_FOODS } from '../utils/queries';
import RecipeForm from "./AddFood";
import FoodList2 from "./ChickenList2";
import UserFoodList from './UserFoodList'

const Chicken = () => {
  const { loading, data } = useQuery(QUERY_FOODS);
  const foods = data?.foods || [];
  return (
    <>
    <h1>Dashboard</h1>
    <RecipeForm></RecipeForm>
    <h2>Your recipes:</h2>
    <UserFoodList></UserFoodList>
    <ChickenList 
     foods={foods}/>
      <ChickenList image={foods.image}/>

    
    
    </>
   
  );
};

export default Chicken;
