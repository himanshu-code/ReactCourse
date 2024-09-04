import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";
const ItemList = ({ itemdata }) => {
  console.log("props " + itemdata);
  const { name, price, imageId, defaultPrice } = itemdata;
  console.log("imageI" + imageId);
  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };
  return (
    <div className="flex justify-between content-center border-b-2 border-black my-4 py-2">
      <div className="flex  items-center">
        <span>
          <img src={CDN_URL + imageId} className="w-20" alt="food image" />
        </span>
        <p className="ml-2">{name}</p>
      </div>

      <div>
        <div>{price / 100 || defaultPrice / 100}</div>
        <button
          className="bg-white p-2  shadow-lg mt-2 rounded-md"
          onClick={() => handleAddItem(itemdata)}
        >
          Add +
        </button>
      </div>
    </div>
  );
};

export default ItemList;
