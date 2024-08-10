import React, { useState } from "react";
import "./index.css";

export default function Carousel({ images }) {
  const [current, setCurrent] = useState(0);

  function slideLeft() {
    if (current === 0) {
      setCurrent(images.length - 1);
    } else {
      setCurrent(current - 1);
    }
  }

  function slideRight() {
    if (current === images.length - 1) {
      setCurrent(0);
    } else {
      setCurrent(current + 1);
    }
  }
  return (
    <div className="carousel">
      <div className="carousel_wrapper">
        {images.map((image, index) => {
          return (
            <div
              className={
                index == current
                  ? "carousel_card carousel_card-active"
                  : "carousel_card"
              }
            >
              <img
                className="card_image"
                key={index}
                src={image}
                alt=""
                width={1000}                
              />
              <div className="card_overlay">
                <h2 className="card_title"></h2>
              </div>
            </div>
          );
        })}
        <div className="carousel_arrow_left" onClick={slideLeft}>
          &lsaquo;
        </div>
        <div className="carousel_arrow_right" onClick={slideRight}>
          &rsaquo;
        </div>
        <div className="carousel_pagination">
          {images.map((_, index) => {
            return (
              <div
                key={index}
                className={
                  index == current
                    ? "pagination_dot pagination_dot-active"
                    : "pagination_dot"
                }
              ></div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
