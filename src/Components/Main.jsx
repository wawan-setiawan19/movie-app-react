import React from "react";
import { Container } from "react-bootstrap";
import CarouselElement from "../elements/CarouselElement";
import ListElement from "../elements/ListElement";
import Footer from "./Footer";

function Main() {
  return (
    <>
      <CarouselElement></CarouselElement>
      <Container>
        <ListElement />
      </Container>
      <Footer />
    </>
  );
}

export default Main;
