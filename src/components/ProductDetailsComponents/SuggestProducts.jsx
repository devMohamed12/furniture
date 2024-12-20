import React from "react";
import Marquee from "react-fast-marquee";
import { Product } from "../../export";

const SuggestProducts = ({ suggestedProducts }) => {
  return (
    <div className=" section-space !py-22 bg-secondary">
      <h2 className="main-title !mb-12">More nice products</h2>

      {suggestedProducts.length > 0 && (
        <Marquee pauseOnHover={true} play={true}>
          {suggestedProducts.map((product) => (
            <Product
              product={product}
              key={product.id}
              minimal={true}
              classes={"mr-12 !bg-white rounded-xl"}
            />
          ))}
        </Marquee>
      )}
    </div>
  );
};

export default SuggestProducts;
