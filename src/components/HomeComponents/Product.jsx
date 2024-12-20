import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "../../redux/cartSlice";
  import {  toast } from "react-toastify";
  import "react-toastify/dist/ReactToastify.css";


export const Product = ({
  product,
  status,
  classes = "",
  minimal = true,
  showDescription = false,
}) => {

  const dispatch = useDispatch();
  const handleAddToCart = async (product) => {
    
    await dispatch(addToCart(product));
      toast.success("product added to cart!");
     

 
  }

  return (
    <div
      // to={`/products/${product.id}`}
      className={`bg-secondary p-1  block   ${classes}`}
    >
      <img
        src={product.imageSrc}
        alt={product.title}
        className="w-full h-auto rounded-t-xl"
      />
      <div className="py-4 px-4 flex flex-col justify-between ">
        <Link to={`/products/${product.id}`} className="sub-title !text-left ">{product.title}</Link>
        <div className="text-yellow-500">★★★★☆</div>
        {showDescription && (
          <p className="text-gray-500 text-sm">
            {product.description ||
              "lorem ipsum dolor sit amet kire lorem ipsum dolor sit amet kirelorem ipsum dolor sit amet kirelorem ipsum dolor sit amet kirelorem ipsum dolor sit amet kirelorem ipsum dolor sit amet kirelorem ipsum dolor sit amet kire"}
          </p>
        )}
        {minimal ? (
          ""
        ) : (
          <>
            <div className="text-gray-700">
              ${product.price?.toFixed(2) || 20}
            </div>
            <button
              className="mt-2 bg-main text-white py-4 px-3 rounded"
              onClick={() => { 
                handleAddToCart(product)
              }}
            >
              Add To Cart
            </button>
          </>
        )}
      </div>
    </div>
  );
};
export default Product;
