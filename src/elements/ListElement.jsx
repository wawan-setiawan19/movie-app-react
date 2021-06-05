import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import CardSkeleton from "../Skeletons/CardSkeleton";
import CardElement from "./CardElement";

function ListElement({ categories }) {
  const [list, setList] = useState(null);
  const title = categories.split("_");
  useEffect(() => {
    const getData = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${categories}?api_key=222e6532a1c40df943028811b533a90d&language=en-US`
      );
      const data = await response.json();
      setList(data.results);
    };
    getData();
  }, [categories]);

  return (
    <>
      <h2
        style={{ textTransform: "uppercase" }}
      >{`${title[0]} ${title[1]}`}</h2>
      <Row style={{ marginBottom: "10px" }}>
        {list == null
          ? [1, 2, 3, 4, 5, 6, 7, 8].map((element) => (
              <Col xs={6} md={4} lg={3} key={element}>
                <CardSkeleton />
              </Col>
            ))
          : list.map((element) => (
              <Col xs={6} md={4} lg={3} key={element.id}>
                <CardElement
                  title={element.original_title}
                  poster={element.poster_path}
                  idMovie={element.id}
                />
              </Col>
            ))}
      </Row>
    </>
  );
}

ListElement.defaultProps = {
  categories: "now_playing",
};

export default ListElement;
