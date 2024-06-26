import React from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";

const Star = ({ ratings, reviews }) => {
  const ratingStar = Array.from({ length: 5 }, (elem, index) => {
    let number = index + 0.5;

    return (
      <span key={index}>
        {ratings >= index + 1 ? (
          <FaStar className="icon" />
        ) : ratings >= number ? (
          <FaStarHalfAlt className="icon" />
        ) : (
          AiOutlineStar
        )}
      </span>
    );
  });

  return (
    <>
      <div className="icon-style">
        {ratingStar}
        <p>({reviews} customer reviews)</p>
      </div>
    </>
  );
};

export default Star;
