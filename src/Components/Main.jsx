import React from "react";
import { Container } from "react-bootstrap";
import CarouselElement from "../elements/CarouselElement";
import FilterElements from "../elements/FilterElements";
import ListElement from "../elements/ListElement";

function Main() {
  return (
    <>
      <CarouselElement></CarouselElement>
      <Container>
        <FilterElements />
        <ListElement />
      </Container>
    </>
  );
}

export default Main;
