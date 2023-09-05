import Teriyaki from "../resources/teriyaki-chicken.jpg";
import Karaage from "../resources/karaage.jpg";
import Misoshiru from "../resources/misoshiru.jpg";
import GingerPork from "../resources/ginger-pork.jpg";
import Yakisoba from "../resources/yakisoba.jpg";
import Udon from "../resources/udon.jpg";
import Soba from "../resources/mori-soba.jpg";
import Chirashi from "../resources/chirashi.jpg";

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
  {
    path: "gingerPork",
    title: "Ginger Pork",
    img: GingerPork,
    difficulty: "Easy",
    ingredients: [
      "thin sliced pork belly or pork loin",
      "onion",
      "ginger",
      "oil",
      "Golden ratio sauce",
    ],
    steps: [
      "Slice onion",
      "Put oil in pan",
      "Grilled pork",
      "Add sliced onion into pan",
      "Grate ginger into pan",
      "Add Golden ratio sauce into pan",
      "Mix well",
      "Serve and Enjoy eating",
    ],
  },
  {
    path: "yakisoba",
    title: "Yakisoba",
    img: Yakisoba,
    difficulty: "Easy",
    ingredients: [
      "thin sliced pork belly",
      "bean sprout",
      "carrot",
      "cabbage",
      "oil",
      "egg noodle",
      "Okonomiyaki sauce",
    ],
    steps: [
      "Cut vegetables",
      "Put oil in pan",
      "Grilled pork",
      "Add vegetables into pan",
      "Make sure all ingredients are heated",
      "Add egg noodle into pan",
      "Add some water and loosen the noodles",
      "Add Okonomiyaki sauce and mixed well",
      "Serve and Enjoy eating",
    ],
  },
  {
    path: "udon",
    title: "Basic Udon/Soba (serve for 1)",
    img: Udon,
    difficulty: "Easy",
    ingredients: [
      "dashi stock: 1 tsp",
      "(Konbu: 1)",
      "Tsuyu[water: soy sause: mirin = 10:1:1]",
      "Udon/Soba (dried): around 100g",
    ],
    steps: [
      "Put Tsuyu and dashi stock (and konbu) into sause pan",
      "Start heating Tsuyu",
      "If you are using konbu, remove konbu before starting bubble",
      "Stop heating Tsuyu before boiling",
      "Start heating another pot with prenty water",
      "After boiling water, put udoon/soba into it",
      "Follow instruction (usually around 5 minutes)",
      "Remove water and serve udon/soba into bowl",
      "Serve Tsuyu into udon/soba bowl",
      "Enjoy eating",
    ],
  },
  {
    path: "soba",
    title: "Zaru-Soba[Cold Soba] (serve for 1)",
    img: Soba,
    difficulty: "Easy",
    ingredients: [
      "dashi stock: 1 tsp",
      "(Konbu: 1)",
      "Tsuke-Tsuyu[water: soy sause: mirin = 5:1:1]",
      "Soba (dried): around 100g",
    ],
    steps: [
      "Put Tsuke-Tsuyu and dashi stock (and konbu) into sause pan",
      "Start heating Tsuke-Tsuyu",
      "If you are using konbu, remove konbu before starting bubble",
      "Stop heating Tsuke-Tsuyu before boiling",
      "After cooling down, put into fridge",
      "Start heating another pot with prenty water",
      "After boiling water, put udoon/soba into it",
      "Follow instruction (usually around 5 minutes)",
      "Move soba to mixing bowl and run cold water (Do not threw away boiled water[soba-water] with soba!)",
      "Remove water and put soba into plate",
      "Put Tsuke-Tsuyu into deep plate or cup",
      "Enjoy eating",
      "After eating, add soba-water into the Tsuke-Tsuyu plate/cup",
      "Enjoy 'Soba-yu'!",
    ],
  },
  {
    path: "chirashi",
    title: "Chirashi-zushi",
    img: Chirashi,
    difficulty: "Easy",
    ingredients: [
      "Sushi vinegar",
      "rice",
      "egg",
      "sushi-grade fish (e.g. salmon and tuna)",
      "some seafood (e.g. prawn)",
    ],
    steps: [
      "Make cooked rice",
      "Move rice into sharow bowl and cool down rice",
      "After cooling down rice, add 10% of sushi ginegar (e.g. if 100g of rice, add 10ml of sushi vinegar)",
      "Mix well",
      "Make scrumble egg",
      "Boil seafood",
      "Cut freash fish",
      "Decolate sushi rice with scrumble egg, fish, and seafood",
      "Searve and enjoy eating",
    ],
  },
];
