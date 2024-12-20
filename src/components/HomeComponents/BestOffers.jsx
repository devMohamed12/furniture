import React, { useState, useEffect } from "react";
import Marquee from "react-fast-marquee";

import { BestOffersItem, Product, productsTable  , supabase } from "../../export.jsx";

const BestOffers = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const { data, error } = await supabase.from(productsTable).select("*");

    if (error) {
      console.error("Error fetching products:", error);
    } else {
      // Shuffle the products array
      const shuffledProducts = data.sort(() => 0.5 - Math.random());
      // Select a subset of random products, e.g., 5 random products
      const randomProducts = shuffledProducts.slice(0, 6);
      setProducts(randomProducts);
     }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="my-18 py-16">
      <h2 className="main-title !mb-12">Best Offers</h2>
      <div className="">

        {/* <Marquee pauseOnHover={true} play={true} className="pb-10">
          {products.map((product) => (
            <Product key={product.id} product={product}  classes="!bg-white mr-6"/>
          ))}
        </Marquee> */}
        <Marquee pauseOnHover={true} play={true} className="pb-10">
          {products.map((product) => (
            <BestOffersItem key={product.id} product={product}  />
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default BestOffers;
