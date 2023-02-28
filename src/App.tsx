import { useEffect, useState } from "react";
import {
  Card,
  Carousel,
  CarouselItem,
  Col,
  Container,
  Row,
} from "react-bootstrap";
import StarRatings from "react-star-ratings";
import { images } from "./api/imageKeys";
import "./App.scss";
import {
  badgeCountAndAverage,
  badgesTotalAmount,
  resultedArr,
} from "./lib/Helper";
import listData from "./api/list-data.json";
import iconFlag from "./images/icon_flag.png";
function App() {
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
    <>
      <Container>
        <div className="d-flex align-items-center mb-4">
          <div className="top-container">
            <img src={iconFlag} alt="icon-flag" />
            <div className="span-container">
              <span>{averagePraiseRating}</span>
            </div>
          </div>
          <div className="d-flex flex-column">
            <p>Tüm Rozetlerde</p>
            <div className="d-flex gap-2 align-items-center">
              <span>
                <StarRatings
                  rating={Number(averagePraiseRating)}
                  starRatedColor="orange"
                  starDimension="20px"
                />
              </span>
              <span>{badgesTotalAmount} Adet</span>
            </div>
          </div>
        </div>
        <Carousel>
          {resultedArr.map((result: object[], index: number) => (
            <CarouselItem key={index}>
              <Row>
                {result.map((item: any) => (
                  <Col xs={6}>
                    <Card className="d-flex justify-content-around">
                      <Card.Img
                        src={images[item.lookupId]}
                        alt={item.lookupValue}
                        style={{ width: "52px", height: "auto" }}
                      />

                      <Card.Title>{item.lookupValue}</Card.Title>
                      <span className="">
                        <StarRatings
                          rating={item.averagePraiseRating}
                          starRatedColor="orange"
                          starDimension="10px"
                          numberOfStars={5}
                          name="rating"
                        />
                      </span>
                      <Card.Text>{item.count} Adet</Card.Text>
                    </Card>
                  </Col>
                ))}
              </Row>
            </CarouselItem>
          ))}
        </Carousel>
      </Container>
    </>
  );
}

export default App;
