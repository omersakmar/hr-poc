import "./App.scss";

import { images } from "./api/imageKeys";

import { badgeOccurrences, filterBadgeOccurrences } from "./lib/Helper";

function App() {
  return (
    <div className="main">
      {filterBadgeOccurrences(badgeOccurrences).map(
        (chunk: any, index: any) => (
          <div className="grid-container">
            {chunk.map((item: any) => (
              <div className="grid-item" key={item.lookupId}>
                <div className="d-flex flex-row align-items-center">
                  <img
                    style={{ width: "50%" }}
                    src={images[item.lookupId]}
                    alt={item.value}
                  />
                  <p>{item.value}</p>
                </div>
              </div>
            ))}
          </div>
        )
      )}
    </div>
  );
}

export default App;
