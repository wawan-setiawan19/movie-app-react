import React from "react";
import { Col, Row } from "react-bootstrap";

function TrailerElements({ dataTrailer }) {
  const data = dataTrailer.results;
  return (
    <div className="container">
      <h1>Trailer</h1>
      <Row>
        {data.map((element) => (
          <Col sm={3} key={element.id}>
            <iframe
              width="100%"
              height="150"
              src={`https://www.youtube.com/embed/${element.key}`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen="allowfullscreen"
            ></iframe>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default TrailerElements;
