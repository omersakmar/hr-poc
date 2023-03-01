import { useEffect, useState } from "react";
import OverallRatings from "../components/OverallRatings";
import iconFlag from "../images/icon_flag.png";
import { badgesTotalAmount, chunkedBadgeInformation } from "../lib/Helper";
import { Carousel, CarouselItem } from "react-bootstrap";
import CardComponent from "../components/CardComponent";
import RPersonComments from "../components/RPersonComments";
import "../style/component/Main.scss";
import { ListDataRow } from "../service";

const Main = () => {
  const [averagePraiseRating, setAveragePraiseRating] = useState<string>("0");

  useEffect(() => {
    const totalPraiseRating = ListDataRow.reduce(
      (acc: number, row: any) => acc + parseInt(row.PraiseRating),
      0
    );
    const avgPraiseRating = totalPraiseRating / ListDataRow.length;
    setAveragePraiseRating(avgPraiseRating.toFixed(1));
  }, []);

  ListDataRow.map((person: any) => console.log(person));

  return (
    <div className="main">
      <header className="header-container">
        {chunkedBadgeInformation.length === 0 ? (
          <div>Rozet bulunamadı.</div>
        ) : (
          <>
            <OverallRatings
              imgSrc={iconFlag}
              avgRating={averagePraiseRating}
              badgesTotalAmount={badgesTotalAmount}
            />
            <Carousel className="p-3 mb-5">
              {chunkedBadgeInformation.map((chunk: object[]) => (
                <CarouselItem>
                  <div className="header-grid">
                    {chunk.map((chunkItem: any) => (
                      <CardComponent badge={chunkItem} />
                    ))}
                  </div>
                </CarouselItem>
              ))}
            </Carousel>
          </>
        )}
      </header>
      <section className="badge-comment-section">
        {ListDataRow.map((person: any) => (
          <RPersonComments person={person} />
        ))}
      </section>
    </div>
  );
};

export default Main;
