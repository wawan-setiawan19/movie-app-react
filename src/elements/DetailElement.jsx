import React from "react";
import { Col, Image, Row } from "react-bootstrap";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function DetailElement({ poster, title, backdrop, rating }) {
  const styleDetailWrapper = {
    position: "relative",
    height: "100vh",
    overflow: "hidden",
    backgroundImage: `url(https://image.tmdb.org/t/p/original${backdrop})`,
    backgroundSize: "cover",
  };
  const styleWrapperItem = {
    borderRadius: "5px",
    backgroundColor: "rgba(255,255,255,0.2)",
    backdropFilter: "blur(5px)",
    top: "50%",
    position: "absolute",
    width: "80%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    padding: "20px",
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
                  pathColor: `#8E0E00`,
                  trailColor: "#af675f",
                })}
                strokeWidth={15}
              />
            </div>
          </Col>
          <Col sm={12} md={6} lg={9}>
            <Row>
              <Col sm={10}>
                <h1 className="text-white">{title}</h1>
              </Col>
            </Row>
            <Row>
              <Col s={12} lg={2}>tahun</Col>
            </Row>
            <Row>
              <Col s={4} lg={2}>
                {/* <BasicSkeleton type="text" /> */}
              </Col>
            </Row>
            <Row>
              <Col s={12}>
                {/* <BasicSkeleton type="text" heightSkeleton="64px" /> */}
              </Col>
            </Row>
            <Row>
              {[1, 2].map((element) => (
                <Col s={12} lg={2} key={element}>
                  {/* <BasicSkeleton type="text" /> */}
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
