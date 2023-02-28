import React from "react";
import StarRatings from "react-star-ratings";

interface OverallRatingsProps {
  imgSrc: string;
  avgRating: string;
  badgesTotalAmount: number;
}

const OverallRatings = ({
  imgSrc,
  avgRating,
  badgesTotalAmount,
}: OverallRatingsProps) => {
  return (
    <div className="d-flex align-items-center mb-4">
      <div className="top-container">
        <img src={imgSrc} alt="icon-flag" />
        <div className="span-container">
          <span>{avgRating}</span>
        </div>
      </div>
      <div className="d-flex flex-column">
        <p>Tüm Rozetlerde</p>
        <div className="d-flex gap-2 align-items-center">
          <span>
            <StarRatings
              rating={Number(avgRating)}
              starRatedColor="orange"
              starDimension="20px"
            />
          </span>
          <span>{badgesTotalAmount} Adet</span>
        </div>
      </div>
    </div>
  );
};

export default OverallRatings;
