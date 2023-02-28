import React from "react";
import "../style/component/CardComponent.scss";
import StarRatings from "react-star-ratings";
import { images } from "../api/imageKeys";
interface CardComponentProps {
  item: {
    lookupId: number;
    lookupValue: string;
    count: number;
    averagePraiseRating: number;
  };
}

const CardComponent = ({ item }: CardComponentProps) => {
  return (
    <div className="carousel-item-container">
      <div className="avatar-container">
        <img src={images[item.lookupId]} alt={item.lookupValue} />
      </div>
      <div>
        <p className="lookupValue-text">{item.lookupValue}</p>
        <span>
          <StarRatings
            rating={item.averagePraiseRating}
            starRatedColor="#F9C164"
            starDimension="15px"
            numberOfStars={5}
            name="rating"
          />
        </span>
        <p className="count-text">{item.count} Adet</p>
      </div>
    </div>
  );
};

export default CardComponent;
