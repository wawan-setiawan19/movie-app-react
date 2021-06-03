import React from "react";
import { Col, Row } from "react-bootstrap";
import BasicSkeleton from "./BasicSkeleton";

function DetailSkeleton() {
  const styleDetailWrapper = {
    position: "relative",
    height: "100vh",
    overflow: "hidden",
  };
  const styleWrapperItem = {
    borderRadius: "5px",
    backgroundColor: "#ccc",
    top: "50%",
    position: "absolute",
    width: "80%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    padding: "20px",
  };
  return (
    <div className="wrapper" style={styleDetailWrapper}>
      <div className="shimer"></div>
      <div style={styleWrapperItem}>
        <Row>
          <Col sm={12} md={6} lg={3}>
            <BasicSkeleton type="image" />
          </Col>
          <Col sm={12} md={6} lg={9}>
            <Row>
              <Col>
                <BasicSkeleton type="title" />
              </Col>
            </Row>
            <Row>
              {[1, 2, 3].map((element) => (
                <Col s={12} lg={2} key={element}>
                  <BasicSkeleton type="text" />
                </Col>
              ))}
            </Row>
            <Row>
              <Col s={4} lg={2}>
                <BasicSkeleton type="text" />
              </Col>
            </Row>
            <Row>
              <Col s={12}>
                <BasicSkeleton type="text" heightSkeleton="64px" />
              </Col>
            </Row>
            <Row>
              {[1, 2].map((element) => (
                <Col s={12} lg={2} key={element}>
                  <BasicSkeleton type="text" />
                </Col>
              ))}
            </Row>
            <Row>
              {[1, 2, 3, 4].map((element) => (
                <Col s={12} lg={3} key={element}>
                  <BasicSkeleton type="text" heightSkeleton="80px" />
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default DetailSkeleton;
