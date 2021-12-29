import React, { useState, useEffect } from "react";
import axios from "axios";
import RecipeItems from "./RecipeItems";
import NoRecipe from "./NoRecipe";
import { Link } from "react-router-dom";


const Recipes = () => {
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    const url = "/api/v1/recipes/index";
    axios
      .get(url)
      .then((response) => {
        setRecipes(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <section className="jumbotron jumbotron-fluid text-center">
        <div className="container py-5">
          <h1 className="display-4">Recipes for every occasion</h1>
          <p className="lead text-muted">
            We’ve pulled together our most popular recipes, our latest
            additions, and our editor’s picks, so there’s sure to be something
            tempting for you to try.
          </p>
        </div>
      </section>
      <div className="py-5">
        <main className="container">
          <div className="text-right mb-3">
            <Link to="/recipe" className="btn custom-button">
              Create New Recipe
            </Link>
          </div>
          <div className="row">
            {recipes.length > 0 ? <RecipeItems recipes = {recipes}/> : <NoRecipe/>}
          </div>
          <Link to="/" className="btn btn-link">
            Home
          </Link>
        </main>
      </div>
    </>
  );
};

export default Recipes;
