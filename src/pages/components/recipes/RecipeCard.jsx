import React from "react";
import Card from "react-bootstrap/Card";

export default function RecipeCard({ title, img, difficulty }) {
  return (
    <div className="col-lg-4 mb-4">
      <Card>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
        </Card.Body>
        <Card.Img
          variant="top"
          src={img}
          style={{ height: "400px", objectFit: "cover" }}
        />
        <Card.Footer>
          <small className="text-muted">{difficulty}</small>
        </Card.Footer>
      </Card>
    </div>
  );
}
