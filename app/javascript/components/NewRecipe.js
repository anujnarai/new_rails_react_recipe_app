import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'

const NewRecipe = () => {
  const [newRecipe, setNewRecipe] = useState({
    name: "",
    ingredients: "",
    instruction: "",
  });
  
  const handleSubmit = (e) =>{
    e.preventDefault()
    alert(`${newRecipe.name}
    Ingredients: ${newRecipe.ingredients}
    instruction: ${newRecipe.instruction}`)

  }
  console.log(newRecipe.name);
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-sm-12 col-lg-6 offset-lg-3">
          <h1 className="font-weight-normal mb-5">
            Add a new recipe to our awesome recipe collection.
          </h1>
          <form action="post" onSubmit = {handleSubmit}>
            <div className="form-group">
              <label htmlFor="recipeName">Recipe Name</label>
              <input
                type="text"
                className="form-control"
                value={newRecipe.name}
                name="name"
                id="recipeName"
                required
                onChange={(e) => setNewRecipe({ ...newRecipe, name: e.target.value })}
              />
            </div>
            <div className="form-group">
              <label htmlFor="recipeIngredients">Ingredients</label>
              <input
                type="text"
                value={newRecipe.ingredients}
                className="form-control"
                name="ingredients"
                id="recipeIngredients"
                required
                onChange={(e) => setNewRecipe({ ...newRecipe, ingredients: e.target.value })}
              />
              <small id="ingredientsHelp" className="form-text text-muted">
                Separate each ingredient with a comma.
              </small>
            </div>
            <div className="mt-3">
              <label htmlFor="instruction">Preparation Instructions</label>
            </div>
            <textarea
              name="instruction"
              value={newRecipe.instruction}
              onChange={(e) => setNewRecipe({ ...newRecipe, instruction: e.target.value })}
              id="instruction"
              required
              cols="64"
              rows="5"
            />
            <div>
              <button type="submit" className="btn custom-button mt-3">
                Create Recipe
              </button>
            </div>
            <Link to="/recipes" className="btn btn-link mt-3">
              Back to recipes
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewRecipe;
