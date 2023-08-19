import React from "react";

export default function Chicken() {
  return (
    <div className="Chicken">
      <h3>Chicken Dish</h3>
      <div className="chicken-dishes">
        <h4>Teriyaki Chicken</h4>
        <div className="row">
          <div className="col-lg-4">
            <img
              src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/093/997/original/teriyaki-chicken.jpg?1692474497"
              alt="teriyaki-chicken"
            />
          </div>
          <div className="col-lg-8">
            <h5>Ingredients</h5>
            <ul>
              <li>Chicken thigh</li>
              <li>Flour</li>
              <li>Teriyaki sauce</li>
              <li>Oil</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
