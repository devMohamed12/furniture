import React, { useState, useEffect } from "react";
import { supabase } from "../../supabase";
import { ProductsSection } from "../../export";
const Products = () => {
  const [kitchenData, setKitchenData] = useState({
    data: [],
    sup: new Set(),
    title: "kitchen products",
    category: "Kitchens",
  });
  const [officeData, setOfficeData] = useState({
    data: [],
    sup: new Set(),
    title: "office products",
    category: "office",
  });

  const fetchProducts = async (category, setData) => {
    const { data, error } = await supabase
      .from("products2")
      .select("*")

      .ilike("category", `%${category}%`);
    // .limit(30);

    if (error) {
      console.error(`Error fetching ${category} products:`, error);
    } else {
      setData((prev) => ({
        ...prev,
        data: data,
        sup: new Set(data.map((item) => item.sup)),
      }));
     }
  };

  const fetchGroupedProducts = async () => {
    const { data, error } = await supabase
      .from("products2")
      .select("category, count:category");
 
    if (error) {
     } 
  };


  useEffect(() => {
    fetchProducts("Kitchens", setKitchenData);
    fetchProducts("office", setOfficeData);
    fetchGroupedProducts()
  }, []);

  return (
    <>
      <ProductsSection data={kitchenData} />
      <ProductsSection data={officeData} />
    </>
  );
};

export default Products;
