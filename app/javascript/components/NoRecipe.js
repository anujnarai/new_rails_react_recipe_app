import React from 'react'
import { Link } from "react-router-dom";


const NoRecipe = () => {
  return (
    <div className="vw-100 vh-50 d-flex align-items-center justify-content-center">
        <h4>
          No recipes yet. Why not <Link to="/new_recipe">create one</Link>
        </h4>
      </div>
  )
}

export default NoRecipe
