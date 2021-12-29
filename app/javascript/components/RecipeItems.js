import React from "react";
import { Link } from "react-router-dom";

const RecipeItems = ({ recipes }) => {
  
  return (
    <>
      {recipes.map((recipe) => (
        <div key={recipe.uuid} className="col-md-6 col-lg-4">
          <div className="card mb-4">
            <img
              src={recipe.image}
              className="card-img-top"
              alt={`${recipe.name} image`}
            />
            <div className="card-body">
              <h5 className="card-title">{recipe.name}</h5>
              <Link to={`/recipe/${recipe.id}`} className="btn custom-button">
                View Recipe
              </Link>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default RecipeItems;
