import React from "react";
import "./Concept.css";

export default function Concept() {
  return (
    <div className="Concept">
      <div className="concept-container">
        <h2>
          <em>Concept</em>
        </h2>
        <div className="row">
          <div className="col-lg-8">
            <p>
              Japanese people love to enjoy ingridient taste itself (e.g.
              sashimi).
            </p>
            <p>So, I believe "Simple is the best!"</p>
            <p>
              My recipes are very simple, so let's cooking end enjoying Japanese
              food!
            </p>
          </div>
          <div className="col-lg-4">
            <img
              src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/093/965/original/sashimi.jpg?1692445949"
              alt="sashimi"
              width="100%"
            />
          </div>
        </div>
        <hr />
      </div>
    </div>
  );
}
