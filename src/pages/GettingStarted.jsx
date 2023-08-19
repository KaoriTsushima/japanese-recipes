import React from "react";
import Dashi from "../resources/dashi.jpg";
import Miso from "../resources/miso.jpg";
import Ponzu from "../resources/ponzu.jpg";

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
  return (
    <div className="Basic">
      <h2>
        <em>Basic</em>
      </h2>
      <h3>Common seasonings</h3>
      <div className="row mt-5 mb-5">
        <div className="col-lg-2">
          <h4>Soy sause</h4>
          <img
            src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/093/973/original/soy-sause.jpg?1692452819"
            alt="soy sause"
            height={200}
          />
        </div>
        <div className="col-lg-2">
          <h4>Mirin</h4>
          <img
            src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/093/976/original/mirin-2.jpg?1692453198"
            alt="mirin"
            height={200}
          />
          <p>
            <strong>Substitute</strong>
          </p>
          <p>white wine : sugar = 3:1</p>
        </div>
        <div className="col-lg-2">
          <h4>Cooking Sake</h4>
          <img
            src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/093/975/original/cooking-sake.jpg?1692453087"
            alt="cooking sake"
            height={200}
          />
          <p>
            <strong>Substitute</strong>
          </p>
          <p>water</p>
        </div>
        <div className="col-lg-2">
          <h4>Miso</h4>
          <img src={Miso} alt="miso" height={200} />
        </div>
        <div className="col-lg-2">
          <h4>Ponzu</h4>
          <img src={Ponzu} alt="ponzu" height={200} />
        </div>
        <div className="col-lg-2">
          <h4>Dashi Stock</h4>
          <img src={Dashi} alt="dashi stock" height={200} />
        </div>
      </div>

      <h3>Common mix sauses</h3>
      <div className="row mt-5">
        <div className="col-lg-4">
          <h4>Teriyaki sause</h4>
        </div>
        <div className="col-lg-8">
          <p>Soy sause : Mirin : Cooking sake : sugar = 2:2:2:1</p>
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
          <h4>Karaage marinate sause</h4>
        </div>
        <div className="col-lg-8">
          <p>Soy sause : Cooking sake = 1:1</p>
        </div>
      </div>
      <hr />
    </div>
  );
}
