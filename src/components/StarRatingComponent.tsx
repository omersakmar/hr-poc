import StarRatings from "react-star-ratings";

interface RatingProps {
  rating: number;
}

const StarRatingComponent = ({ rating }: RatingProps) => {
  return (
    <StarRatings
      rating={rating}
      starRatedColor="#F9C164"
      starDimension="15px"
      starSpacing="0.5px"
      numberOfStars={5}
      starEmptyColor="#dbdbdb"
    />
  );
};

export default StarRatingComponent;
