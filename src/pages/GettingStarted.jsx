import React from "react";
import Dashi from "../resources/dashi.jpg";
import Miso from "../resources/miso.jpg";
import Ponzu from "../resources/ponzu.jpg";
import SoySauce from "../resources/soy-sauce.jpg";
import Mirin from "../resources/mirin-2.jpg";
import CookingSake from "../resources/cooking-sake.jpg";

function Seasoning({ title, img, substitute }) {
  return (
    <div className="col-lg-2">
      <h4>{title}</h4>
      <img src={img} alt={title} height={200} />
      {substitute ? (
        <>
          <p>
            <strong>Substitute</strong>
          </p>
          <p>{substitute}</p>
        </>
      ) : null}
    </div>
  );
}

export default function GettingStarted() {
  const seasonings = [
    {
      title: "Soy sauce",
      img: SoySauce,
    },
    {
      title: "Mirin",
      img: Mirin,
      substitute: "white wine : sugar = 3:1",
    },
    {
      title: "Cooking Sake",
      img: CookingSake,
      substitute: "water",
    },
    {
      title: "Miso",
      img: Miso,
    },
    {
      title: "Ponzu",
      img: Ponzu,
    },
    {
      title: "Dashi Stock",
      img: Dashi,
    },
  ];
  return (
    <div className="Basic">
      <h2>
        <em>Basic</em>
      </h2>
      <h3>Common seasonings</h3>
      <div className="row mt-5 mb-5">
        {seasonings.map(function (seasoning) {
          return (
            <Seasoning
              title={seasoning.title}
              img={seasoning.img}
              substitute={seasoning.substitute}
            />
          );
        })}
      </div>

      <h3>Common mix sauces</h3>
      <div className="row mt-5">
        <div className="col-lg-4">
          <h4>Teriyaki sauce</h4>
        </div>
        <div className="col-lg-8">
          <p>Soy sauce : Mirin : Cooking sake : sugar = 2:2:2:1</p>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-lg-4">
          <h4>Sushi Vinegar</h4>
        </div>
        <div className="col-lg-8">
          <p>Rice vinegar (180ml) + Sugar (45g) + Salt (18g)</p>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-lg-4">
          <h4>Karaage marinate sauce</h4>
        </div>
        <div className="col-lg-8">
          <p>Soy sauce : Cooking sake = 1:1</p>
        </div>
      </div>
      <hr />
    </div>
  );
}
