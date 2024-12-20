const CartSummary = ({ cart, totalPrice }) => {
  return (
    <div className="lg:w-2/5 w-full  self-start">
      {cart.length > 0 && (
        <div className="flex flex-col gap-3 justify-center h-full">
          <div>Items price: ${totalPrice?.toFixed(2) || 0}</div>
          {/* The commented-out sections are removed because you're already dispatching getTotalPrice()
              <div>
                <div>Tax price: ${getTotalPrice().taxPrice.toFixed(2)}</div>
              </div>
              <div>
                <div>Shipping price: ${getTotalPrice().shippingPrice.toFixed(2)}</div>
              </div>
              <div>
                <div>Total price: ${getTotalPrice().totalPrice.toFixed(2)}</div>
              </div>
              */}
        </div>
      )}
    </div>
  );
};

export default CartSummary;
