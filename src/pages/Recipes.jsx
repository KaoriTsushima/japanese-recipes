import React from "react";
import Teriyaki from "../resources/teriyaki-chicken.jpg";
import RecipeCard from "./components/recipes/RecipeCard";

export default function Recipes() {
  const recipes = [
    {
      title: "Teriyaki Chicken",
      img: Teriyaki,
      difficulty: "Easy",
    },
    {
      title: "Teriyaki Chicken",
      img: Teriyaki,
      difficulty: "Easy",
    },
    {
      title: "Teriyaki Chicken",
      img: Teriyaki,
      difficulty: "Easy",
    },
    {
      title: "Teriyaki Chicken",
      img: Teriyaki,
      difficulty: "Easy",
    },
    {
      title: "Teriyaki Chicken",
      img: Teriyaki,
      difficulty: "Easy",
    },
  ];
  return (
    <div ClassName="Recipes">
      <h2>
        <em>Recipes</em>
      </h2>
      <div className="row m-5">
        {recipes.map(function (recipe) {
          return (
            <RecipeCard
              title={recipe.title}
              img={recipe.img}
              difficulty={recipe.difficulty}
            />
          );
        })}
      </div>
    </div>
  );
}
