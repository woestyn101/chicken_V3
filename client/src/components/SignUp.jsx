import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { ADD_FOOD } from '../utils/mutations';

const RecipeForm = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [instructions, setInstructions] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [image, setImage] = useState('');
  const [addFood, { error }] = useMutation(ADD_FOOD);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addFood({
        variables: { name, description, instructions, ingredients, image },
      });

      window.location.reload();
    } catch (err) {
      console.error(err, "error here");
    }
  };

  return (
    <div className='container mt-4 d-flex justify-content-center align-items-center min-vh-100'>
      <div className='card'>
        <div className='card-header'>
          Add your recipe:
        </div>
        <div className='card-body'>
          <form className="d-flex flex-column align-items-center" onSubmit={handleFormSubmit}>
            <div className="col-12 col-lg-9">
              <label>Name:
                <input
                  placeholder="Recipe Name..."
                  value={name}
                  className="form-control"
                  onChange={(event) => setName(event.target.value)}
                />
              </label><br/>
              <label>Description:
                <input
                  placeholder="Description..."
                  value={description}
                  className="form-control"
                  onChange={(event) => setDescription(event.target.value)}
                />
              </label><br/>
              <label>Instructions:
                <input
                  placeholder="Instructions..."
                  value={instructions}
                  className="form-control"
                  onChange={(event) => setInstructions(event.target.value)}
                />
              </label><br/>
              <label>Ingredients:
                <input
                  placeholder="Ingredients..."
                  value={ingredients}
                  className="form-control"
                  onChange={(event) => setIngredients(event.target.value)}
                />
              </label><br/>
              <label>Image:
                <input
                  placeholder="Image URL..."
                  value={image}
                  className="form-control"
                  onChange={(event) => setImage(event.target.value)}
                />
              </label><br/><br/>
              <button className="btn btn-primary" type="submit">
                Add Recipe
              </button>
            </div>      
            {error && (
              <div className="col-12 my-3 bg-danger text-white p-3">
                Something went wrong...
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default RecipeForm;
