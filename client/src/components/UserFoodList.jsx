import { Link } from 'react-router-dom';
import "../components/styles/navBar.css";
import { useQuery } from '@apollo/client';
import { QUERY_ME } from '../utils/queries';

const FoodCard = ({ food }) => {
  return (
    <div className="col mb-4">
      <div className="card h-100 w-100">
        <div className="card-header bg-dark text-light">
          {food.name}
        </div>
        <div className="card-body">
          <h6><strong><u>Description</u></strong></h6>
          <p className="card-text">{food.description}</p>
          <h6><strong><u>Instructions</u></strong></h6>
          <p className="card-text">{food.instructions}</p>
          <h6><strong><u>Ingredients</u></strong></h6>
          <p className="card-text">{food.ingredients}</p>
          <h6><strong><u>Image</u></strong></h6>
          <img src={food.image} ></img>
          <h6><span className="deleteBtn">DELETE</span></h6>
          <Link className="updateBtn" data-foodid={food._id} to={`/update/${food._id}`} >
                  UPDATE
                </Link>
                  </div>
      </div>
    </div>
  );
};

function UsersFood() {
  const { loading, data  } = useQuery(QUERY_ME);
  console.log(data);
  let user;
  const userData = data?.me   || {};

  // if (data) {
  //   user = data.user;
  // }

  if (loading) {
    return <div>Loading...</div>;
  }

  console.log(userData);

  return (
    <>
      <div className="container my-1">
        <Link to="/">← Back to Main Page</Link>
        
        {userData ? (
          <>
            <h2>
           Recipes for {userData.username} {userData.email}
            </h2>
            <div className="container-fluid">
      <div className="row">
        {userData.foods.map((food, i) => (
          
          <FoodCard key={i} food={food} />
          
        ))}
      </div>
      
    </div>
           
          </>
        ) : null}
      </div>
    </>
  );
}

export default UsersFood;
