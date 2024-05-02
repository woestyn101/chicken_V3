import React from "react";

const FoodCard = ({ food }) => {
  return (
    <div className="col mb-4">
      <div className="card h-100 w-100">
        <div className="card-header bg-dark text-light">{food.name}</div>
        <div className="card-body">
          <h6>
            <strong>
              <u>Description</u>
            </strong>
          </h6>
          <p className="card-text">{food.description}</p>
          <h6>
            <strong>
              <u>Instructions</u>
            </strong>
          </h6>
          <p className="card-text">{food.instructions}</p>
          <h6>
            <strong>
              <u>Ingredients</u>
            </strong>
          </h6>
          <p className="card-text">{food.ingredients}</p>
          <h6>
            <strong>
              <u>Image</u>
            </strong>
          </h6>
          <p className="card-text">{food.image}</p>
        </div>
      </div>
    </div>
  );
};

const FoodList = ({ foods }) => {
  if (!foods) {
    return <h3>No Recipes Yet</h3>;
  }

  return (
    <div className="container-fluid">
      <div className="row">
        {foods.map((food, i) => (
          <FoodCard key={i} food={food} />
        ))}
      </div>
    </div>
  );
};

export default FoodList;
