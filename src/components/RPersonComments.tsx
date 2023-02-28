import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import StarRatings from "react-star-ratings";
import image3 from "../images/3.png";
import { cleanStr, convertDateToLocale } from "../lib/Helper";
import "../style/component/RPersonComments.scss";
import { images } from "../api/imageKeys";
const RPersonComments = ({ person }: any) => {
  return (
    <Container>
      <Row xs={1} md={2} lg={3} className="px-4 gap-3 justify-content-center">
        <Col className="shadow p-3 mb-5 bg-body-tertiary rounded">
          <div className="d-flex align-items-center">
            <img
              style={{
                verticalAlign: "middle",
                width: "50px",
                height: "50px",
                borderRadius: "50%",
              }}
              src={image3}
              alt=""
            />
            <div className="d-flex flex-column mt-4 ml-2">
              <p>{person["RelatedPerson.title"]}</p>
              <p>{convertDateToLocale(person["Created."])}</p>
            </div>
          </div>
          <div className="d-flex align-items-center gap-4">
            <div>
              <img
                style={{ width: "72px" }}
                src={images[person["Badge."].charAt(0)]}
                alt="rewarded badge"
              />
            </div>
            <div>
              <p>{cleanStr(person["Badge."])}</p>
              <span>
                <StarRatings
                  rating={Number(person.PraiseRating)}
                  starRatedColor="orange"
                  starDimension="20px"
                  numberOfStars={5}
                  name="rating"
                />
              </span>
            </div>
          </div>
          <p className="mt-4">{person.Message}</p>
        </Col>
      </Row>
    </Container>
  );
};

export default RPersonComments;
