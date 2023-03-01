import "../style/component/CardComponent.scss";
import { images } from "../api/imageKeys";
import StarRatingComponent from "./StarRatingComponent";
interface CardComponentProps {
  badge: {
    lookupId: number;
    lookupValue: string;
    count: number;
    averagePraiseRating: number;
  };
}

const CardComponent = ({ badge }: CardComponentProps) => {
  return (
    <div className="header-rate">
      <img
        src={images[badge.lookupId]}
        className="header-badge-image"
        alt={badge.lookupValue}
      />
      <div>
        <div style={{ fontSize: "13px" }}>{badge.lookupValue}</div>
        <div>
          <StarRatingComponent rating={badge.averagePraiseRating} />
        </div>
        <div className="badge-count-text">{badge.count} Adet</div>
      </div>
    </div>
  );
};

export default CardComponent;
