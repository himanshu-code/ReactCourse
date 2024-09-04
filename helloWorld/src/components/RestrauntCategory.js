import { useState } from "react";
import ItemList from "./ItemList";

const RestrauntCategory = (props) => {
  //const [isExpanded, setIsExpanded] = useState(false);
  const { title, itemCards } = props.catdata;
  const showItems = props.showItems;
  const index = props.index;

  return (
    <div className="bg-gray-400  w-6/12 mx-auto  hover:bg-green-50 border-b-2 border-black">
      <button
        className="text-xl p-4 font-bold w-full flex justify-between items-center"
        onClick={() =>
          showItems ? props.setShowIndex(null) : props.setShowIndex(index)
        }
      >
        <div>{title}</div>
        <div>{showItems ? "v" : ">"}</div>
      </button>
      {showItems ? (
        <div className="bg-gray-300 p-4">
          <ul>
            {itemCards.map((item) => (
              <li key={item.card.info.id}>
                <ItemList itemdata={item.card.info} />
              </li>
            ))}
          </ul>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
export default RestrauntCategory;
