import React, { useState, useEffect } from "react";
import { Link , Redirect } from "react-router-dom";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const Recipe = () => {
  const { id } = useParams();
  let navigate = useNavigate();
  let ingredientList = "No ingredients available";
  const [recipe, setRecipe] = useState({
    ingredients: "",
  });

  useEffect(async() => {
    const url = `/api/v1/show/${id}`;
    await axios
      .get(url)
      .then((response) => {
        setRecipe(response.data);
      })
      .catch((err) => {
        alert(err);
      });
  }, []);

  
    if (recipe.ingredients.length > 0) {
      ingredientList = recipe.ingredients
        .split(",")
        .map((ingredient, index) => (
          <li key={index} className="list-group-item">
            {ingredient}
          </li>
        ));
  };

  const addHtmlEntities = (str) => {
    return String(str)
      .replace(/&lt;/g, "<")
      .replace(/&gt;/g, ">");
  }


  const createMarkup = () => {
    return {__html:
      addHtmlEntities(recipe.instruction)
    };
  }

  const deleteRecipe = async() => {
    const url = `/api/v1/destroy/${id}`;
    const token = document.querySelector('meta[name="csrf-token"]').content

    const response = await axios.delete(url, {
      header: {
        "X-CSRF-Token": token,
        "Content-Type": "application/json"
      }
    })
    console.log("RESPONSE", response)
    response? navigate("/recipes") : ""
  }
   
  return (
    <div className="">
      <div className="hero position-relative d-flex align-items-center justify-content-center">
        <img
          src={recipe.image}
          alt={`${recipe.image}`}
          className="img-fluid position-absolute"
        />
        <div className="overlay bg-dark position-absolute" />
        <h1 className="display-4 position-relative text-white">
          {recipe.name}
        </h1>
      </div>
      <div className="container py-5">
        <div className="row">
          <div className="col-sm-12 col-lg-3">
            <ul className="list-group">
              <h5 className="mb-2">Ingredients</h5>
              {ingredientList}
            </ul>
          </div>
          <div className="col-sm-12 col-lg-7">
            <h5 className="mb-2">Preparation Instructions</h5>
            <div dangerouslySetInnerHTML={createMarkup()}/>
          </div>
          <div className="col-sm-12 col-lg-2">
            <button type="button" className="btn btn-danger" onClick={deleteRecipe }>
              Delete Recipe
            </button>
          </div>
        </div>
        <Link to="/recipes" className="btn btn-link">
          Back to recipes
        </Link>
      </div>
    </div>
  );
};

export default Recipe;
