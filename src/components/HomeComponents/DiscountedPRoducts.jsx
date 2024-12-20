import React, { useEffect, useState } from "react";
import { Product } from "../../export";
import Marquee from "react-fast-marquee";
import { useFetchApi } from "../../utils/fetchApi";

const DiscountedProducts = () => {
  const {
    loading: productsLoading,
    data: products = [],
    error: productsError,
  } = useFetchApi("");

  const [discountedProducts, setDiscountedProducts] = useState([]);

  useEffect(() => {
    const handleDiscounts = async (arr = [], num = 6) => {
      if (num > arr.length) {
        throw new Error(
          "Number of elements requested exceeds the array length."
        );
      }

      const discountedSet = new Set();

      while (discountedSet.size < num) {
        const randomIndex = Math.floor(Math.random() * arr.length);
        const randomElement = arr[randomIndex];
        discountedSet.add(randomElement);
      }

      return Array.from(discountedSet);
    };

    const fetchDiscountedProducts = async () => {
      try {
        const productsArray = await handleDiscounts(products, 6);
        setDiscountedProducts(productsArray);
      } catch (error) {
        console.error(error.message);
      }
    };

    if (!productsLoading && !productsError) {
      fetchDiscountedProducts();
    }
  }, [products, productsLoading, productsError]);

  if (productsLoading) {
    return <div>Loading...</div>;
  }

  if (productsError) {
    return <div>Error loading products: {productsError.message}</div>;
  }

  return (
    <section className="container mx-auto">
      <Marquee pauseOnHover={true} play={false} className="pb-10">
        {discountedProducts.map((product, idx) => (
          <Product
            product={product}
            key={product.id}
            suggestedProduct={true}
            className="mr-10 w-80"
          />
        ))}
      </Marquee>
    </section>
  );
};

export default DiscountedProducts;
