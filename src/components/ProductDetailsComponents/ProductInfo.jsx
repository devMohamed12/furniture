import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartSlice";
import { toast } from "react-toastify";

const ProductInfo = ({ product }) => {
  const dispatch = useDispatch();
    const handleAddToCart = async (product) => {
      await dispatch(addToCart(product));
      toast.success("product added to cart!");
    };

  return (
    <section className="mt-10">
      <div className="container mx-auto">
        <div className="flex lg:flex-row flex-col-reverse justify-evenly ">
        {/* text content  */}
        <div className="lg:w-3/6 pt-12">
          {product && (
            <>
              <h3 className="main-title !text-left">{product.title}</h3>
              <p className=" text-lg font-bold">
                Price is {product.price}$
              </p>
              <p className="my-4 text-subText w-5/6">
                {product.description ||
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
              </p>
              <button
                className="btn bg-main/80 hover:bg-main btn-lg text-white"
                onClick={() => {
                  handleAddToCart(product);
                }}
              >
                Buy Now
              </button>
            </>
          )}
        </div>
        {/* image  */}
        <div className="lg:w-2/6">
          {product && <img src={product.imageSrc} alt={product.title} />}
        </div>
        </div>
      `</div>
    </section>
  );
};

export default ProductInfo;
