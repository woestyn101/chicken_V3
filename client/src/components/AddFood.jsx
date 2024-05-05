import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_FOOD } from '../utils/mutations';

const RecipeForm = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [instructions, setInstructions] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [image, setImage] = useState('');
  const [foodAuthor, setfoodAuthor] = useState('');
  const [addFood, { error }] = useMutation(ADD_FOOD);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await addFood({
        variables: { 
          name,
          description,
          instructions,
          ingredients,
          image,
          foodAuthor
        },
      });
      window.location.reload();
    } catch (err) {
      console.error(err, "error here");
    }
  };

  return (
    <div className='container mt-4 d-flex justify-content-center align-items-center min-vh-100'>
      <div className='card'>
        <div className='card-header bg-dark text-light pt-4'>
          Add your recipe:
        </div>
        <div className='card-body'>
          <form
            className="d-flex flex-column align-items-center "
            onSubmit={handleFormSubmit}
          >
            {/* Form inputs */}
            <button className="btn btn-primary" type="submit">
              Add Recipe
            </button>
          </form>
          {error && (
            <div className="col-12 my-3 bg-danger text-white p-3">
              Something went wrong...
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RecipeForm;
