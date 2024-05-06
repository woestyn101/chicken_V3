import React from 'react';
import { Link, useParams } from 'react-router-dom';
import '../components/styles/navBar.css';
import { useQuery } from '@apollo/client';
import ChickenList from './ChickenList';
import { QUERY_FOODS } from '../utils/queries';
import UpdateRecipeForm from "./UpdateFood";
import UserFoodList from './UserFoodList'

const Updating = () => {
  const { loading, data } = useQuery(QUERY_FOODS);
  const foods = data?.foods || [];
  console.log(foods);
  
  return (
    <>
    <h1>Update Board</h1>
    <UpdateRecipeForm></UpdateRecipeForm>
    
   
    
    
    </>
   
  );
};

export default Updating;
