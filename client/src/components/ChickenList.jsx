import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';

const FoodList = ({ foods }) => {
  if (!foods) {
    return <h3>No Recipes Yet</h3>;
  }

  return (
    <div>
     
      <div className="flex-row justify-space-between my-4">
        {foods &&
          foods.map((myfood, i) => (
            <div key={i} className="col-12 col-xl-6">
              <div className="card mb-3">
                <h4 className="card-header bg-dark text-light p-2 m-0" >
                  {myfood.name} <br />         

                 
                </h4>                
              </div>
              <div className="card-body">
                <h6>Description</h6>
                  {myfood.description} <br />
                  <h6>Instructions</h6>
                  {myfood.instructions} <br />
                  <h6>Ingredients</h6>
                  {myfood.ingredients} <br />
                  <h6>Image</h6>
                  {myfood.image} <br />
                  <h6>Author</h6>
                  {myfood.foodAuthor} <br />
                 
                  
                  
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default FoodList;
