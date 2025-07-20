import React from "react";
import { assets } from "../assets/assets";

function StarRating({ rating = 5 }) {
  return (
    <>
      {Array(5)
        .fill("")
        .map((_, index) => {
          return (
            <img
              src={
                rating > index ? assets.starIconFilled : assets.starIconOutlined
              }
              alt="star-icon"
              className="w-4.5 h-4.5"
              key={index}
            />
          );
        })}
    </>
  );
}

export default StarRating;
