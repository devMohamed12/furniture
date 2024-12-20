import { useEffect, useState } from "react";

import { Product, productsTable, supabase } from "../../export.jsx";

const TrendingProducts = () => {
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
    <section className="mb-16 py-16  bg-secondary">
      <div className="w-5/6 mx-auto">
        <h2 className="main-title">Trending Products</h2>
        <div className="grid grid-cols-1  xl:grid-cols-3 gap-8 my-5">

          
          {products?.map((product, index) => (
            <Product
              key={product.id}
              product={product}
              status="trending"
              showDescription={index === 0}
              classes={`rounded-md hover:shadow-lg transition-all duration-300 cursor-pointer !p-0 !rounded-xl   !bg-white !text-left  ${
                index === 0 ? "lg:col-span-2 lg:row-span-2" : ""
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

//  <div
//    key={product.id}
//    className="first:col-span-2 first:row-span-2 min-h-10  bg-[#F6F6F6] border border-gray-200 rounded-md p-7 shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer"
//  >
//    <img src={product.imageSrc} alt={product.title} className="w-full h-auto" />
//    <h2 className="sub-title">{product.title}</h2>
//    <p className="text-xl font-bold text-center">{product.category}</p>
//  </div>;

export default TrendingProducts;
