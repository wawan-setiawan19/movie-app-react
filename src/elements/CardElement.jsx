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
      <Link to={`${idMovie}`} className="link" style={{ padding: 10 }}>
        <Button
          className="bg-gradient"
          style={{ width: "100%", border: "none", display: "block" }}
        >
          Lihat Detail
        </Button>
      </Link>
    </Card>
  );
}

CardElement.defaultProps = {
  poster: "https://image.tmdb.org/t/p/original",
  title: "Title",
};

export default CardElement;
