import { CartItem } from "../../export";
const CartDetails = ({ cart }) => {
  return (
    <>
      <div className=" ">
        <div className="  w-full">
          {cart.map((item, index) => (
            <CartItem item={item} key={index} />
          ))}
        </div>
      </div>
    </>
  );
};

export default CartDetails;
