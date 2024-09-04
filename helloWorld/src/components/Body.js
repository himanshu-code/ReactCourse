import RestrauntCard, { withPromotedLabel } from "./Restraunt";
import resObj from "../utils/mockData";
import Shimmer from "./Shimmer";
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "./../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [resList, setresList] = useState([]);
  const [searchtxt, setSearchtxt] = useState("");
  const [filteredResList, setFilteredResList] = useState([]);
  const { loggedInUser, setUserName } = useContext(UserContext);
  const getTopRestraunt = () => {
    console.log("filtering");
    let filteredList = resList.filter((item) => {
      return item.info.avgRating >= 4.2;
    });
    setresList(filteredList);
  };

  const PromotedRestrauntCard = withPromotedLabel(RestrauntCard);
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
  const onlineStatus = useOnlineStatus();
  if (!onlineStatus)
    return (
      <h1>Looks like you are offline. Please check your Internet Connection</h1>
    );
  if (resList.length === 0) {
    return <Shimmer />;
  }
  return (
    <div className="body bg-white">
      <div className="filter flex">
        <div className="search m-4 p-4">
          <input
            type="text"
            className="border border-solid border-black p-1 rounded-sm"
            value={searchtxt}
            onChange={(event) => {
              setSearchtxt(event.target.value);
            }}
          ></input>

          <button
            className="bg-green-100 px-4 m-4 py-2 radius rounded"
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
        <div className="m-4 p-4 flex items-center ">
          <button
            className="bg-sky-700 px-4 py-2 rounded text-white"
            onClick={getTopRestraunt}
          >
            Top Rated Restraunt{" "}
          </button>
        </div>
        <div className="m-4 p-4 flex items-center ">
          <label className="m-1">User Name</label>
          <input
            type="text"
            className="border border-solid border-black p-1 rounded-sm"
            value={loggedInUser}
            onChange={(event) => {
              setUserName(event.target.value);
            }}
          ></input>
        </div>
      </div>
      <div className="flex flex-wrap justify-center items-stretch">
        {filteredResList.map((res) => {
          return (
            <Link key={res.info.id} to={"/restraunts/" + res.info.id}>
              {res.info.isOpen ? (
                <PromotedRestrauntCard resdata={res} />
              ) : (
                <RestrauntCard resdata={res} />
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
