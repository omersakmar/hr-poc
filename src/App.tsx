import { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import StarRatings from "react-star-ratings";
import { images } from "./api/imageKeys";
import "./App.scss";
import {
  badgeCountAndAverage,
  badgesTotalAmount,
  resultedArr,
} from "./lib/Helper";
import listData from "./api/list-data.json";
function App() {
  const [averagePraiseRating, setAveragePraiseRating] = useState<string>("0");
  const list: any = listData;
  useEffect(() => {
    const totalPraiseRating = list.Row.reduce(
      (acc: number, row: any) => acc + parseInt(row.PraiseRating),
      0
    );
    const avgPraiseRating = totalPraiseRating / list.Row.length;
    setAveragePraiseRating(avgPraiseRating.toFixed(2));
  }, []);

  return (
    <div className="main">
      <div className="container">
        {resultedArr.map((result: object[]) =>
          result.map((item: any) => (
            <div className="card">
              <div className="card-img">
                <img
                  style={{ width: "100px", height: "auto", objectFit: "cover" }}
                  src={images[item.lookupId]}
                  alt={item.lookupValue}
                />
              </div>
              <div className="card-content">
                <h3>{item.lookupValue}</h3>
                <StarRatings
                  rating={3}
                  starRatedColor="orange"
                  starDimension="20px"
                  numberOfStars={5}
                  name="rating"
                />
                <p>{item.count} Adet</p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default App;
