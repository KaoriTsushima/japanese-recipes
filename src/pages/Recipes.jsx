import React from "react";
import RecipeCard from "./components/recipes/RecipeCard";
import { recipeData } from "./recipeData";

export default function Recipes() {
  return (
    <div ClassName="Recipes">
      <h2>
        <em>Recipes</em>
      </h2>
      <div className="row m-5">
        {recipeData.map(function (recipe) {
          return (
            <RecipeCard
              title={recipe.title}
              img={recipe.img}
              difficulty={recipe.difficulty}
              path={recipe.path}
            />
          );
        })}
      </div>
    </div>
  );
}
