import { useState } from 'react';
// Important for useMutation: We import the useMutation hook from @apollo/client
import { useMutation } from '@apollo/client';

// Important for useMutation: We import the specific query we'd like to perform from the mutations.js utility
import { ADD_FOOD } from '../utils/mutations';

const RecipeForm = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [instructions, setInstructions] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [image, setImage] = useState('');

  // Important for useMutation: We pass the mutation we'd like to execute to the useMutation hook
  // The useMutation hook returns an array. The function at index 0 can be dispatched within the component to trigger the mutation query
  // The object at index 1 contains information, such as the error boolean, which we use in this application
  const [addFood, { error }] = useMutation(ADD_FOOD);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      // Important for useMutation: Here we want the mutation to occur in response to a form submission
      // The mutation we want to run also requires mutation parameters to be passed, which we deliver as a variables object
      // let foodData = {
      //    name: name,
      //    description: description,
      //    instructions: instructions,
      //    ingredients: ingredients,
      //    image: image

      // }
      const { data } = await addFood({
        variables: { 
          name,
          description,
          instructions,
          ingredients,
          image

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
        <div className='card-header bg-dark text-light'>
        Add your recipe:
        </div>
        <div className='card-body'>
            <form
        className="d-flex flex-column align-items-center "
        onSubmit={handleFormSubmit}
      >
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
            placeholder="ingredients..."
            value={ingredients}
            className="form-control"
            onChange={(event) => setIngredients(event.target.value)}
          />
          </label><br/>
          <label>Image:
          <input
            placeholder="image..."
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
