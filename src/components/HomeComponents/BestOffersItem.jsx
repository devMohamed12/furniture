const BestOffersItem = ({product}) => (
  <div className="card w-72 bg-base-100 shadow-md mr-5">
    <figure>
      <img
        src={product.imageSrc}
        alt="Shoes"
      />
    </figure>
    <div className="card-body p-5">
      <h2 className="card-title my-0">
        {product.title}!
        {/* <div className="badge badge-secondary">NEW</div> */}
      </h2>
      <p className="text-sm mt-1 mb-5">{product.description || "lorem ipsum dolor sit amet"}</p>
      <div className="card-actions justify-end">
        <div className="badge badge-outline  bg-accent text-white p-4">
          Best sales{" "}
        </div>
      </div>
    </div>
  </div>
);

export default BestOffersItem;
