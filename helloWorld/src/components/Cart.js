import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div className="text-center m-5 p-5">
      <h1 className="text-2xl font-bold">Cart</h1>
      <button
        className="bg-purple-500 text-white p-2 m-2 rounded-md "
        onClick={() => handleClearCart()}
      >
        Clear Cart ❌
      </button>
      <div className="bg-gray-300 p-4 w-6/12 m-auto">
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              <ItemList itemdata={item} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default Cart;
