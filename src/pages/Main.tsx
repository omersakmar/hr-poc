import { useEffect, useState } from "react";
import listData from "../api/list-data.json";
import OverallRatings from "../components/OverallRatings";
import iconFlag from "../images/icon_flag.png";
import { badgesTotalAmount, resultedArr } from "../lib/Helper";
import { Carousel, CarouselItem } from "react-bootstrap";
import CardComponent from "../components/CardComponent";
import RPersonComments from "../components/RPersonComments";
import "./Main.scss";

const Main = () => {
  const [averagePraiseRating, setAveragePraiseRating] = useState<string>("0");
  const list: any = listData;
  useEffect(() => {
    const totalPraiseRating = list.Row.reduce(
      (acc: number, row: any) => acc + parseInt(row.PraiseRating),
      0
    );
    const avgPraiseRating = totalPraiseRating / list.Row.length;
    setAveragePraiseRating(avgPraiseRating.toFixed(1));
  }, []);

  return (
    <div>
      <div>
        <OverallRatings
          imgSrc={iconFlag}
          avgRating={averagePraiseRating}
          badgesTotalAmount={badgesTotalAmount}
        />
        <Carousel className="p-3 mb-5">
          {resultedArr.map((result: object[]) => (
            <CarouselItem>
              <div className="grid-container">
                {result.map((item: any) => (
                  <CardComponent item={item} />
                ))}
              </div>
            </CarouselItem>
          ))}
        </Carousel>
      </div>
      {list.Row.map((person: any) => (
        <RPersonComments person={person} />
      ))}
    </div>
  );
};

export default Main;
