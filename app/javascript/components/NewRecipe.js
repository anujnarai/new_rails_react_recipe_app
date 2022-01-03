import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const NewRecipe = () => {
  const [newRecipe, setNewRecipe] = useState({
    name: "",
    ingredients: "",
    instruction: "",
  });

  const handleSubmit = async(e) => {
    const { name, ingredients, instruction } = newRecipe;
    e.preventDefault();
    if (name.length == 0 || ingredients.length == 0 || instruction.length == 0)
      return;

    const body = {
      name,
      ingredients,
      instruction: instruction.replace(/\n/g, "<br> <br>"),
    };
    const token = document.querySelector('meta[name="csrf-token"]').content;
    const url = "/api/v1/recipes/create";
    await axios
      .post(url, {
        method: "POST",
        headers: {
          "X-CSRF-Token": token,
          "Content-Type": "application/json",
        },
        body,
      })
      .then((res) => {
        console.log("RESPONSE", res);
      })
      .catch((err) => {
        toast("error");
      });
    setNewRecipe({name: "", ingredients: "", instruction: ""});
  };
  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col-sm-12 col-lg-6 offset-lg-3">
            <h1 className="font-weight-normal mb-5">
              Add a new recipe to our awesome recipe collection.
            </h1>
            <form action="post" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="recipeName">Recipe Name</label>
                <input
                  type="text"
                  className="form-control"
                  value={newRecipe.name}
                  name="name"
                  id="recipeName"
                  required
                  onChange={(e) =>
                    setNewRecipe({ ...newRecipe, name: e.target.value })
                  }
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
                  onChange={(e) =>
                    setNewRecipe({ ...newRecipe, ingredients: e.target.value })
                  }
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
                onChange={(e) =>
                  setNewRecipe({ ...newRecipe, instruction: e.target.value })
                }
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
    </>
  );
};

export default NewRecipe;
