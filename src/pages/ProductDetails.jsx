// src/pages/ProductDetails.jsx
import { useParams } from "react-router-dom";
 import { useEffect, useState } from "react";
import ProductInfo from "../components/ProductDetailsComponents/ProductInfo.jsx";
 import { supabase } from "../supabase/index.js";
 import SuggestProducts from "../components/ProductDetailsComponents/SuggestProducts.jsx";
 import Reviews from "../components/ProductDetailsComponents/Reviews.jsx";

function ProductDetails() {
  const productDetails = useParams();
  const [product, setProduct] = useState({});
  const [suggestedProducts, setSuggestedProducts] = useState([]);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const { data, error } = await supabase
          .from("products2")
          .select("*")
          .eq("id", productDetails.productID)
          .single();

        if (error) {
          console.error("Error fetching product:", error);
        } else {
          setProduct(data);
 
          // Fetch suggested products based on the category
          fetchSuggestedProducts(data.category);
        }
      } catch (err) {
        console.error("Unexpected error:", err);
      }
    };

    const fetchSuggestedProducts = async (category) => {
      try {
        const { data, error } = await supabase
          .from("products2")
          .select("*")
          .like("category", `%${category}%`)
          .neq("id", productDetails.productID); // Exclude the current product

        if (error) {
          console.error("Error fetching suggested products:", error);
        } else {
          setSuggestedProducts(data);
         }
      } catch (err) {
        console.error("Unexpected error:", err);
      }
    };

    fetchProduct();
  }, [productDetails.productID]);

 

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [productDetails.productID]);

  return (
    <>
      <ProductInfo product={product} />
      <SuggestProducts suggestedProducts={suggestedProducts} />
      <Reviews />
     
    </>
  );
}

export default ProductDetails;
