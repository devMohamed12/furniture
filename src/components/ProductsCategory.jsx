import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { supabase } from "../supabase";
import { Product } from "../export";
import Pagination from "./Pagination";

const ProductsCategory = () => {
  const { category } = useParams();
  const [allProducts, setAllProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSubCategory, setSelectedSubCategory] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(
    category || "kitchens"
  );
  const [categoryData, setCategoryData] = useState({
    data: [],
    subCategories: new Set(),
    title: "kitchen products",
  });

  const productsPerPage = 10;
  const categories = ["kitchens", "office"];

  useEffect(() => {
    fetchProducts(selectedCategory);
  }, [selectedCategory]);

  const fetchProducts = async (category) => {
    const { data, error } = await supabase
      .from("products2")
      .select("*")
      .ilike("category", `%${category}%`);

    if (error) {
      console.error(`Error fetching ${category} products:`, error);
    } else {
      setCategoryData((prev) => ({
        ...prev,
        data,
        subCategories: new Set(data.map((item) => item.sup)),
        title: `${category} products`,
      }));
      setAllProducts(data);
    }
  };

  
  const handleCategoryChange = (category) => {
    setSearchQuery("");
    setSelectedCategory(category);
    setSelectedSubCategory(null);
  };
  
  const handleSubCategoryChange = (subCategory) => {
    setSearchQuery(""); 
    setSelectedSubCategory(subCategory);
  };

  const handleSearchChange = (e) => setSearchQuery(e.target.value);
  // Filter products by search query
  const productsMatchingSearch = allProducts.filter((product) =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Further filter products by selected sub-category
  const filteredProducts = productsMatchingSearch.filter((product) =>
    selectedSubCategory ? product.sup === selectedSubCategory : true
  );

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  return (
    <div className="p-5">
      <div className="container mx-auto">
        <div>
          <label htmlFor="search" className="sub-title">
            Search Products:{" "}
          </label>
          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={handleSearchChange}
            className="p-2 border rounded-md w-4/6 !border-gray-100"
          />
        </div>

        <div className="lg:flex items-center my-6">
          <h2 className="sub-title mr-2 !my-0">Product Categories:</h2>
          <div className="flex gap-4 items-center">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`rounded-md py-1.5 px-3 text-main border-main border-2 hover:!bg-main hover:!text-white ${
                  selectedCategory === cat ? "bg-main !text-white" : ""
                }`}
                onClick={() => handleCategoryChange(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {categoryData.subCategories.size > 0 && (
          <div>
            <h2 className="sub-title !text-left !mb-2 !mt-1">
              Filter by Sub-Category
            </h2>
            <div className="flex gap-3 items-center">
              {Array.from(categoryData.subCategories).map((subCategory) => (
                <button
                  key={subCategory}
                  className={`border-accent border-2 text-accent rounded py-1.5 px-3.5 hover:!bg-accent hover:text-white ${
                    selectedSubCategory === subCategory
                      ? "bg-accent text-white"
                      : ""
                  }`}
                  onClick={() => handleSubCategoryChange(subCategory)}
                >
                  {subCategory}
                </button>
              ))}
            </div>
          </div>
        )}

        <div className="grid my-16 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
          {currentProducts.map((product) => (
            <Product
              product={product}
              key={product.id}
              minimal={false}
              classes="rounded-xl"
            />
          ))}
        </div>

        <Pagination
          productsPerPage={productsPerPage}
          totalProducts={filteredProducts.length}
          paginate={setCurrentPage}
          currentPage={currentPage}
        />
      </div>
    </div>
  );
};

export default ProductsCategory;
