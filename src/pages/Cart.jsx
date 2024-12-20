import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { removeFromCart, getTotalPrice } from "../redux/cartSlice";
import { CartDetails, CartSummary, CartCheckout } from "../export.jsx";
import Marquee from "react-fast-marquee";

function Cart() {
  const dispatch = useDispatch();
  
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const cart = useSelector((state) => state.cart.cartItems) ;
  const user = useSelector((state) => state.user.user) || {};
  
    
    const userId =  user.length>0 ? user.id : "";
    const userMetadata = user.length>0 ?   user.user.user_metadata : "";
 
  // clg(user , "user");
  // clg(userId , "userId");
  // clg(userMetadata, "userMetadata");
  useEffect(() => {
    dispatch(getTotalPrice());
  }, [cart, dispatch]);

  return (
    <div className="container mx-auto">
      <div>
        {cart.length === 0 ? (
          <div className="flex justify-center items-center min-h-screen">
            <h5 className="text-3xl text-accent font-bold tracking-wider">
              Cart is empty
            </h5>
          </div>
        ) : (
          <h5 className="mt-16 mb-3 main-title text-left">Your cart</h5>
        )}
      </div>

      <div className="lg:flex justify-between   ">
        <CartDetails cart={cart} />
        <CartSummary cart={cart} totalPrice={totalPrice} />
      </div>
      <CartCheckout
        cart={cart}
        totalPrice={totalPrice}
        user_metadata={userMetadata}
        userId={userId}
      />
    </div>
  );
}

export default Cart;
