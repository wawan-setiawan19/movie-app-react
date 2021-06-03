import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

function CardElement({ poster, title, idMovie }) {
  return (
    <Card style={{ marginTop: "20px" }}>
      <Card.Img
        variant="top"
        src={`https://image.tmdb.org/t/p/original${poster}`}
        style={{ maxHeight: "400px", objectFit: "cover" }}
      />
      <Card.Title
        style={{ padding: "0 10px", marginTop: "10px" }}
        className="text-truncate"
      >
        {title}
      </Card.Title>
      <Button
        className="bg-gradient"
        style={{ margin: "10px", border: "none" }}
      >
        <Link to={`${idMovie}`} className="link">
          Lihat Detail
        </Link>
      </Button>
    </Card>
  );
}

CardElement.defaultProps = {
  poster: "https://image.tmdb.org/t/p/original",
  title: "Title",
};

export default CardElement;
