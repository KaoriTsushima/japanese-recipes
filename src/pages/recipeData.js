import Teriyaki from "../resources/teriyaki-chicken.jpg";
import Karaage from "../resources/karaage.jpg";
import Misoshiru from "../resources/misoshiru.jpg";

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
    steps: [
      "Cut chicken to your preferred size",
      "Put chicken into a bowl or bag",
      "Grate some ginger into it",
      "Marinate the chicken with karaage marinade sauce and ginger",
      "Wait at least 30 minutes",
      "Prepare bowl with potato starch",
      "Pick chicken one by one and put into potato starch",
      "Cover chicken with potato starch",
      "Put oil into a deep pan",
      "Deep fry for 10-15 minutes",
      "Serve and Enjoy eating",
    ],
  },
  {
    path: "misoshiru",
    title: "Basic Miso soup (serve for 4)",
    img: Misoshiru,
    difficulty: "Easy",
    ingredients: [
      "dashi stock: 1 tsp",
      "water: 800ml",
      "miso: 1/3 - 1/2 ladle",
    ],
    steps: [
      "Start heating the water in a pot",
      "Add dashi stock",
      "Add roughly 1/3 ladle of miso and adjust to your preferred strength",
      "Make sure the miso has completely melted",
      "(Add your favourite veggies etc)",
      "Serve and enjoy eating",
    ],
  },
];
