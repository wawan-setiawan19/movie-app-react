import React from "react";
import { Card } from "react-bootstrap";
import BasicSkeleton from "./BasicSkeleton";

function CardSkeleton() {
  return (
    <Card className="wrapper" style={{ margin: "10px 0" }}>
      <BasicSkeleton type="image" />
      <div style={{ marginTop: "10px", padding: "0 10px 10px 10px" }}>
        <BasicSkeleton type="title" />
        <BasicSkeleton type="button" />
      </div>
    </Card>
  );
}

export default CardSkeleton;
