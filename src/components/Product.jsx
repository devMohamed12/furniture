import { Link } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { addToCart } from "../redux/cartSlice.js";

function Product({ product, className, suggestedProduct = false }) {
  // const dispatch = useDispatch();

  return (
    <Link
      to={`/products/${product.id}`}
      className={`h-fit block py-9 px-6  hover:shadow-lg hover:-translate-y-7 transition-all duration-500 rounded-xl ${
        className || ""
      }`}
    >
      <div className={!suggestedProduct ? "w-80 h-80 overflow-hidden" : ""}>
        <img
          className={`mx-auto ${
            suggestedProduct ? "max-w-full max-h-full object-contain" : ""
          }`}
          src={product.image || product.img}
          alt={product.title}
        />
      </div>
      <div>
        <h3 className="main-title text-xl text-center text-black mt-9">
          {/* {product.title.slice(0, 40) } .... */}
          {product.title}
        </h3>
        <p className="my-3 text-subText">
          {/* {product.description.slice(0, 50) } .... */}
        </p>
        <p className="mb-1 text-center">Price is {product.price}$</p>

        {/* <Link
          to={`/products/${product.id}`}
          className="hidden btn bg-main btn-lg text-white hover:bg-main self-center justify-center w-full mb-3"
        >
          See more
        </Link> */}
        {/* 
        {!suggestedProduct && (
          <button
            className="btn bg-main hover:bg-main btn-lg text-white block w-full mb-3"
            onClick={() => {
              dispatch(addToCart(product));
            }}
          >
            Buy now
          </button>
        )} */}
      </div>
    </Link>
  );
}

export default Product;
