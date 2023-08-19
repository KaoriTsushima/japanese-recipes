import React from "react";
export default function Basic() {
  return (
    <div className="Basic">
      <h2>
        <em>Basic</em>
      </h2>
      <h3>Common seasonings</h3>
      <div className="row mt-5 mb-5">
        <div className="col-lg-4">
          <h4>Soy sause</h4>
          <img
            src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/093/973/original/soy-sause.jpg?1692452819"
            alt="soy sause"
            height={200}
          />
        </div>
        <div className="col-lg-4">
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
        <div className="col-lg-4">
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
