import React from "react";
import './skeleton.css'

function BasicSkeleton({ type }) {
  return <div className={`skeleton ${type}`}>
    <div className="shimer"></div>
  </div>;
}

export default BasicSkeleton;
