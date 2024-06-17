import RestrauntCard from "./Restraunt";
import resObj from "../utils/mockData";
import Shimmer from "./Shimmer";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Body = () => {
  const [resList, setresList] = useState([]);
  const [searchtxt, setSearchtxt] = useState("");
  const [filteredResList, setFilteredResList] = useState([]);
  const getTopRestraunt = () => {
    console.log("filtering");
    let filteredList = resList.filter((item) => {
      return item.info.avgRating >= 4.2;
    });
    setresList(filteredList);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const resp = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.518479249483523&lng=77.01929558068515&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const data = await resp.json();
    //console.log(json);
    console.log(
      data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    );
    setresList(
      data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredResList(
      data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  if (resList.length === 0) {
    return <Shimmer />;
  }
  return (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchtxt}
            onChange={(event) => {
              setSearchtxt(event.target.value);
            }}
          ></input>
          <button
            className="filter-btn"
            onClick={() => {
              const filteredList = resList.filter((res) =>
                res.info.name.toLowerCase().includes(searchtxt.toLowerCase())
              );
              setFilteredResList(filteredList);
            }}
          >
            Search
          </button>
        </div>

        <button className="filter-btn" onClick={getTopRestraunt}>
          Top Rated Restraunt{" "}
        </button>
      </div>
      <div className="res-container">
        {filteredResList.map((res) => {
          return (
            <Link key={res.info.id} to={"/restraunts/" + res.info.id}>
              <RestrauntCard resdata={res} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
