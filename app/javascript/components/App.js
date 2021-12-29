import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import NewRecipe from "./NewRecipe";
import Recipe from "./Recipe";
import Recipes from "./Recipes";

const App = () => {
  return (
    <Router>
      <Routes>
         <Route path="/" exact element={<Home/>} />
         <Route path="/recipes" exact element={<Recipes/>} />
         <Route path="/recipe/:id" exact element={<Recipe/>}/>
         <Route path="/recipe" exact element = {<NewRecipe/>}/>
      </Routes>
    </Router>
  );
};

export default App;
