import React from "react";
import { useParams } from "react-router-dom";
import { recipeData } from "../../recipeData";
import "./RecipeDetails.css";

export default function RecipeDetails() {
  const { recipeName } = useParams();
  const recipeDetails = recipeData.find(function (recipe) {
    return recipe.path === recipeName;
  });
  return (
    <div className="recipe-details">
      <h3>{recipeDetails.title}</h3>
      <div className="row my-5">
        <div className="col-lg-5 img-col">
          <img
            src={recipeDetails.img}
            className="recipe-img "
            alt="recipe-img"
          />
        </div>
        <div className="col-lg-7 ingredients">
          <h4>Ingredients</h4>
          <ul>
            {recipeDetails.ingredients.map(function (ingredient) {
              return <li className="">{ingredient}</li>;
            })}
          </ul>
        </div>
      </div>
      <div className="row">
        <div className="col steps">
          <h4>Instructions</h4>
          <ol>
            {recipeDetails.steps.map(function (step) {
              return <li className="">{step}</li>;
            })}
          </ol>
        </div>
      </div>
    </div>
  );
}
