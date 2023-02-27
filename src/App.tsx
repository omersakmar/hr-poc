import { images } from "./api/imageKeys";
import "./App.scss";
import { listDataRows, resultedArr } from "./lib/Helper";

function App() {
  console.log(resultedArr);
  return (
    <div className="main">
      {resultedArr.map((chunk: any, index: any) => (
        <div className="grid-container">
          {chunk.map((item: any) => (
            <div className="grid-item" key={item.lookupValue}>
              <div className="d-flex flex-row align-items-center">
                <img
                  style={{ width: "100%", height: "auto" }}
                  src={images[item.lookupId]}
                  alt={item.lookupValue}
                />
                <p>{item.lookupValue}</p>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default App;
