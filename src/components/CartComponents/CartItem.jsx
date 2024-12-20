import { removeFromCart, addToCart } from "../../redux/cartSlice";
import { useDispatch } from "react-redux";
const CartItem = ({ item }) => {
  const dispatch = useDispatch(); 
  const { imageSrc, title, qty } = item;

  return (
    <div className=" flex items-center  gap-4  lg:gap-16  shadow-md rounded-xl min-h-44 mb-7  p-1  pl-6  bg-[#f5f5f5]/40">
      <div className="lg:w-2/6 w-3/6">
        <img src={imageSrc} alt={title} className="max-w-full" />
      </div>

      <div className="  w-full">
        <h6 className="mb-4">{title}</h6>

        <div className="my-2 flex items-center">
          <p className="mx-3">Count:</p>
          <button
            onClick={() => {
              dispatch(addToCart(item));
            }}
            className="  py-1 px-2.5 text-xl  rounded-md block bg-accent  text-white"
          >
            +
          </button>
          <p className="mx-3">{qty}</p>
          <button
            onClick={() => {
              dispatch(removeFromCart(item));
            }}
            className=" py-1 px-2.5 text-xl  rounded-md block bg-rose-600   text-white"
          >
            -
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
