import Teriyaki from "../resources/teriyaki-chicken.jpg";
import Karaage from "../resources/karaage.jpg";

export const recipeData = [
  {
    path: "teriyaki-chicken",
    title: "Teriyaki Chicken",
    img: Teriyaki,
    difficulty: "Easy",
    ingredients: ["chicken thigh", "flour", "oil", "teriyaki sauce"],
    steps: [
      "Cover chicken thighs with flour",
      "Put some oil into pan",
      "Put chicken thighs on pan (skin down)",
      "Flip chicken thighs",
      "Add teriyaki sauce into pan and mix well with chicken thighs",
      "Cut chicken thighs and serve",
    ],
  },
  {
    path: "karaage",
    title: "Karaage",
    img: Karaage,
    difficulty: "Easy",
    ingredients: [
      "chicken thigh",
      "potato starch (corn starch)",
      "ginger",
      "oil",
      "karaage marinade sauce",
    ],
    steps: [],
  },
];
