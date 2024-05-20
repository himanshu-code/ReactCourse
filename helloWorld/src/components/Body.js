import RestrauntCard from "./Restraunt";
import resObj from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  const [resList, setresList] = useState(resObj);
  const getTopRestraunt = () => {
    console.log("filtering");
    let filteredList = resList.filter((item) => {
      return item.info.avgRating >= 4.2;
    });
    setresList(filteredList);
  };
  return (
    <div className="body">
      <div className="filter">
        <button className="filter-btn" onClick={getTopRestraunt}>
          Top Rated Restraunt{" "}
        </button>
      </div>
      <div className="res-container">
        {resList.map((res) => {
          return <RestrauntCard resdata={res} key={res.info.id} />;
        })}
      </div>
    </div>
  );
};

export default Body;
