import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_URL } from "../utils/constants";
import useRestrauntMenu from "../utils/useRestrauntMenu";
import RestrauntCategory from "./RestrauntCategory";

const RestrauntMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestrauntMenu(resId);
  const [showIndex, setShowIndex] = useState(0);
  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;
  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
  console.log(
    "itemcards-> ",
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards
  );
  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ==
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  console.log(categories);
  return (
    <div className="Menu text-center">
      <h1 className="text-6xl font-bold m-8 text-red-400">{name}</h1>
      <p className="text-2xl m-4">
        {cuisines.join(", ")} -{costForTwoMessage}
      </p>

      {categories.map((c, index) => (
        <RestrauntCategory
          catdata={c.card.card}
          key={c.title}
          showItems={showIndex === index}
          index={index}
          setShowIndex={(index) => setShowIndex(index)}
        />
      ))}
    </div>
  );
};

export default RestrauntMenu;
