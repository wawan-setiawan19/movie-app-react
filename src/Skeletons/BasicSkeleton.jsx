import React from "react";
import "./skeleton.css";

function BasicSkeleton({ type, heightSkeleton }) {
  return (
    <div className={`skeleton ${type}`} style={{ height: heightSkeleton }}>
      <div className="shimer"></div>
    </div>
  );
}

export default BasicSkeleton;
