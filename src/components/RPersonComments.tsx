import { Col, Container, Row } from "react-bootstrap";
import StarRatings from "react-star-ratings";
import image3 from "../images/3.png";
import {
  cleanStr,
  convertDateToLocale,
  getFirstTwoNumbers,
} from "../lib/Helper";
import "../style/component/RPersonComments.scss";
import { images } from "../api/imageKeys";

const RPersonComments = ({ person }: any) => {
  return (
    <section>
      <Container>
        <Row xs={1} className="px-4 gap-3 justify-content-center">
          <Col className="shadow-lg p-3 mb-5 bg-body-tertiary rounded">
            <div className="d-flex align-items-center mb-4">
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
                <p className="related-title">{person["RelatedPerson.title"]}</p>
                <p className="related-date">
                  {convertDateToLocale(person["Created."])}
                </p>
              </div>
            </div>
            <div className="d-flex align-items-center gap-4">
              <div>
                <img
                  style={{ width: "72px" }}
                  src={images[getFirstTwoNumbers(person["Badge."])]}
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
            <p className="mt-4 related-message">{person.Message}</p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default RPersonComments;
