import React from "react";
import { Link } from "react-router-dom";
import "../components/styles/navBar.css";
import RecipeForm from "./AddFood";

const Dashboard = () => {
  return (
    <>
      <RecipeForm></RecipeForm>
    </>
  );
};

export default Dashboard;
