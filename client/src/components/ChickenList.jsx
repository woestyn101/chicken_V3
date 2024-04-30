import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';

const FoodList = ({ foods }) => {
  if (!foods) {
    return <h3>No Recipes Yet</h3>;
  }

  return (
    <div>
      <h3 className="text-primary">{title}</h3>
      <div className="flex-row justify-space-between my-4">
        {foods &&
          foods.map((myfood) => (
            <div key={myfood._id} className="col-12 col-xl-6">
              <div className="card mb-3">
                <h4 className="card-header bg-dark text-light p-2 m-0">
                  {myfood.name} <br />
                 
                </h4>

                
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default FoodList;
