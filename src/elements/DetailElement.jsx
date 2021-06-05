import React from "react";
import { Col, Image, Row } from "react-bootstrap";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function DetailElement({
  poster,
  title,
  backdrop,
  rating,
  tahun,
  durasi,
  isForAdult,
  overview,
  genre,
}) {
  const styleDetailWrapper = {
    position: "relative",
    minHeight: "100vh",
    height: "unset",
    // overflow: "hidden",
    backgroundImage: `url(https://image.tmdb.org/t/p/original${backdrop})`,
    backgroundSize: "cover",
    padding: "10px 0",
  };
  const styleWrapperItem = {
    boxShadow: "0 0 50px rgba(255,255,255,0.5)",
    borderRadius: "5px",
    backgroundColor: "rgba(0,0,0,0.5)",
    backdropFilter: "blur(5px)",
    top: "50%",
    position: "relative",
    width: "80%",
    left: "50%",
    transform: "translate(-50%, 0%)",
    padding: "20px",
    color: "white",
  };
  return (
    <div style={styleDetailWrapper}>
      <div style={styleWrapperItem}>
        <Row>
          <Col sm={12} md={6} lg={3}>
            <Image src={`https://image.tmdb.org/t/p/original${poster}`} fluid />
            <div
              style={{ width: 50, position: "absolute", bottom: 10, right: 20 }}
            >
              <CircularProgressbar
                value={rating * 10}
                text={`${rating * 10}%`}
                styles={buildStyles({
                  textColor: "#fff",
                  textSize: "32px",
                  pathColor: `#fff`,
                  trailColor: "#af675f",
                  backgroundColor: "#8E0E00",
                })}
                background={true}
                strokeWidth={15}
              />
            </div>
          </Col>
          <Col sm={12} md={6} lg={9}>
            <Row>
              <Col sm={10}>
                <h1>{title}</h1>
              </Col>
            </Row>
            <Row>
              <Col s={12} lg={1} style={{ borderRight: "1px solid white" }}>
                {tahun.split("-", 1)}
              </Col>
              <Col s={12} lg={2} style={{ borderRight: "1px solid white" }}>
                {`${durasi} menit`}
              </Col>
              <Col s={12} lg={2}>
                {isForAdult ? "Dewasa" : "Semua Umur"}
              </Col>
            </Row>
            <Row>
              <Col s={12} style={{ marginTop: 10 }}>
                <h3>The Story</h3>
                <p>{overview}</p>
              </Col>
            </Row>
            <Row>
              {genre.map((element) => (
                <Col sm={1} key={element.id}>
                  {element.name}
                </Col>
              ))}
            </Row>
            <Row>
              {[1, 2, 3, 4].map((element) => (
                <Col s={12} lg={3} key={element}>
                  {/* <BasicSkeleton type="text" heightSkeleton="80px" /> */}
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default DetailElement;
