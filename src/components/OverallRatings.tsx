import "../style/component/OverallRatings.scss";
import StarRatingComponent from "./StarRatingComponent";
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
    <div className="header-card">
      <div className="flag-rating-container">
        <img src={imgSrc} alt="icon-flag" style={{ width: "49px" }} />
        <div className="flag-text">{avgRating}</div>
      </div>
      <div className="">
        <div className="header-text">Tüm Rozetlerde</div>
        <div className="ratings-count">
          <StarRatingComponent rating={Number(avgRating)} />
          <div className="total-amount-text">
            <span>{badgesTotalAmount} Adet</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverallRatings;
