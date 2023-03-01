import image3 from "../images/3.png";
import { FixedSizeList as List } from "react-window";
import {
  cleanStr,
  convertDateToLocale,
  getFirstTwoNumbers,
} from "../lib/Helper";
import "../style/component/RPersonComments.scss";
import { images } from "../api/imageKeys";
import StarRatingComponent from "./StarRatingComponent";

interface renderRowProps {
  index: number;
  style: object;
}

const RPersonComments = ({ person }: any) => {
  const renderRow = ({ index, style }: renderRowProps) => (
    <div style={style} className="comment-container">
      {!person.undefined ? (
        <div key={person.ID}>
          <div className="comment-header">
            <img
              src={
                person["RelatedPerson.picture"] === ""
                  ? image3
                  : person["RelatedPerson.picture"]
              }
              className="comment-img"
              alt="related-person-image"
            />
            <div>
              <div className="related-person-title">
                {person["RelatedPerson.title"]}
              </div>
              <div className="related-person-createdAt">
                {convertDateToLocale(person["Created."])}
              </div>
            </div>
          </div>
          <div className="header-rate">
            <img
              src={images[getFirstTwoNumbers(person["Badge."])]}
              className="comment-badge-image"
              alt="awarded badge"
            />
            <div>
              <div style={{ fontSize: "13px" }}>
                {cleanStr(person["Badge."])}
              </div>
              <div>
                <StarRatingComponent rating={Number(person.PraiseRating)} />
              </div>
            </div>
          </div>
          <div style={{ fontSize: "12px" }}>{person.Message}</div>
        </div>
      ) : (
        <div>Yorum bulunamadı.</div>
      )}
    </div>
  );

  return (
    <List height={200} itemCount={1} itemSize={200} width="100%">
      {renderRow}
    </List>
  );
};

export default RPersonComments;
