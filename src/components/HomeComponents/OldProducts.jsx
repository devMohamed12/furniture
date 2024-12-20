// import React, { useState, useEffect } from "react";
// import { Product, Skeletons } from "../export";
// import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
// import { useFetchApi } from "../utils/fetchApi";

// const Products = () => {
//   //fetching product data

//   const [filteredProducts, setFilteredProducts] = useState([]);
//   const {
//     loading: productsLoading,
//     data: products,
//     error: productsError,
//   } = useFetchApi("");

//   // ========================================

//   // fetching categories data

//   const {
//     loading: categoriesLoading,
//     data: categories,
//     error: categoriesError,
//   } = useFetchApi("categories");

//   // ========================================

//   const handleChange2 = (param) =>
//   {
//     if (param === "all") {
//       setFilteredProducts(products);
//     } else {
//       setFilteredProducts(
//         products.filter((product) => product.category === param)
//       );
//     }
//   };
//   useEffect(() => {
//     const checKProducts = sessionStorage.getItem("products");

//     setFilteredProducts(checKProducts ? JSON.parse(checKProducts) : products);

//   }, [products]);

//   return (
//     <div className="my-0 pb-5">
//       <h2 className="main-title my-3">This is our products</h2>

//       <div className="text-center mb-10">
//         {categoriesLoading ? (
//           <Skeletons products={false} count={6} />
//         ) : (
//           <>
//             <button
//               className="btn bg-main text-white mr-2"
//               onClick={() => handleChange2("all")}
//             >
//               All
//             </button>

//             {categories?.map((category, index) => (
//               <button
//                 className="btn ml-2 bg-main text-white hover:bg-main"
//                 key={index}
//                 onClick={() => handleChange2(category)}
//               >
//                 {category}
//               </button>
//             ))}
//           </>
//         )}
//       </div>

//       {/* Render loading indicator, error message, or products */}
//       <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
//         <Masonry gutter="50px">
//           {productsLoading
//             ?

//             [...Array(10)].map((_, index) => (
//               <Skeletons key={index} products={true} />

//               ))
//             : filteredProducts?.map((product) => (
//                 <Product
//                   product={product}
//                   key={product.id}
//                   className={"bg-white"}
//                 />
//               ))}
//         </Masonry>
//       </ResponsiveMasonry>
//     </div>
//   );
// };

// export default Products;

import React, { useState, useEffect, useCallback, memo } from "react";
import { Product, Skeletons } from "../../export";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { useFetchApi } from "../../utils/fetchApi";

const OldProducts = memo(() => {
  // Fetching product data
  const [filteredProducts, setFilteredProducts] = useState([]);
  const {
    loading: productsLoading,
    data: products,
    error: productsError,
  } = useFetchApi("");

  // Fetching categories data
  const {
    loading: categoriesLoading,
    data: categories,
    error: categoriesError,
  } = useFetchApi("categories");

  // Handle category change
  const handleChange2 = useCallback(
    (param) => {
      if (param === "all") {
        setFilteredProducts(products);
      } else {
        setFilteredProducts(
          products.filter((product) => product.category === param)
        );
      }
    },
    [products]
  );

  // Effect to handle session storage
  useEffect(() => {
    const checkProducts = sessionStorage.getItem("products");
    setFilteredProducts(checkProducts ? JSON.parse(checkProducts) : products);
  }, [products]);

  // Error handling
  if (productsError || categoriesError) {
    return <div>Error loading data. Please try again later.</div>;
  }

  return (
    <section className="container mx-auto my-0 pb-5">
      <h2 className="main-title my-3">This is our products</h2>

      <div className="text-center mb-10">
        {categoriesLoading ? (
          <Skeletons products={false} count={6} />
        ) : (
          <>
            <button
              className="btn bg-main text-white mr-2"
              onClick={() => handleChange2("all")}
            >
              All
            </button>

            {categories?.map((category, index) => (
              <button
                className="btn ml-2 bg-main text-white hover:bg-main"
                key={index}
                onClick={() => handleChange2(category)}
              >
                {category}
              </button>
            ))}
          </>
        )}
      </div>

      {/* Render loading indicator, error message, or products */}
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
        <Masonry gutter="50px">
          {productsLoading
            ? Array.from({ length: 10 }, (_, index) => (
                <Skeletons key={index} products={true} />
              ))
            : filteredProducts?.map((product) => (
                <Product
                  product={product}
                  key={product.id}
                  className={"bg-white"}
                />
              ))}
        </Masonry>
      </ResponsiveMasonry>
    </section>
  );
});

export default OldProducts;
