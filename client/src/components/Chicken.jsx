import React from 'react';
import { Link } from 'react-router-dom';
import '../components/styles/navBar.css';
import { useQuery } from '@apollo/client';
import ChickenList from './ChickenList';
import { QUERY_FOODS } from '../utils/queries';

const Chicken = () => {
  const { loading, data } = useQuery(QUERY_FOODS);
  const foods = data?.foods || [];
  return (
    <>
    <h1>CHICKEN</h1>
    <ChickenList 
     foods={foods}/>
   

    
    
    </>
   
  );
};

export default Chicken;
