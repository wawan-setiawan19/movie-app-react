import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Carousel } from "react-bootstrap";
import CarouselSkeleton from "../Skeletons/CarouselSkeleton";

function CarouselElement({ categories }) {
  const [movie, setMovie] = useState(null);
  const getData = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${categories}?api_key=222e6532a1c40df943028811b533a90d&language=en-US&page=1`
    );
    const data = await response.json();
    setMovie(data.results);
  };

  useEffect(() => {
    getData();
  });

  return (
    <>
      {movie == null ? (
        <CarouselSkeleton />
      ) : (
        <Carousel fade={true} indicators={false} nextIcon={""} prevIcon={""}>
          {movie.map((element) => (
            <Carousel.Item key={element.id} interval={2000}>
              <img
                className="d-block w-100"
                src={`https://image.tmdb.org/t/p/original${element.backdrop_path}`}
                alt="First slide"
                style={{ height: "100vh", objectFit: "cover" }}
              />
              <Carousel.Caption
                style={{
                  backgroundColor: "rgba(0,0,0,0.4)",
                  borderRadius: "10px",
                  backdropFilter: "blur(10px)",
                  padding: "0 20px",
                }}
              >
                <h3>{element.original_title}</h3>
                <p className="text-truncate">{element.overview}</p>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      )}
    </>
  );
}

CarouselElement.defaultProps = {
  categories: "upcoming",
};

export default CarouselElement;
