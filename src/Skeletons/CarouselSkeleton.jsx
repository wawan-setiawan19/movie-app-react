import React from "react";
import BasicSkeleton from "./BasicSkeleton";

function CarouselSkeleton() {
  const styleWrapperCarousel = {
    overflow: "hidden",
    height: "100vh",
    position: "relative",
  };

  const styleWrapperItem = {
    borderRadius: '5px',
    backgroundColor: "#ccc",
    bottom: "20px",
    position: "absolute",
    width: "80%",
    left: "50%",
    transform: "translateX(-50%)",
    padding: "20px 10px",
  };
  return (
    <div style={styleWrapperCarousel} className='wrapper'>
      <div className="shimer"></div>
      <div style={styleWrapperItem}>
        <BasicSkeleton type="title" />
        <BasicSkeleton type="text" />
      </div>
    </div>
  );
}

export default CarouselSkeleton;
