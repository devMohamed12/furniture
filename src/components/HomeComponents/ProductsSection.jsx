import { useNavigate } from "react-router-dom";
import { Product } from "../../export";
import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ProductsSection = ({ data }) => {
  const { data: products, sup, title  , category } = data;
 
  const [selectedSup, setSelectedSup] = useState(null);
  const navigate = useNavigate();

  const filterProductsBySup = (supCategory) => {
    if (supCategory === null) return products;
    return products.filter((product) => product.sup === supCategory);
  };

  const filteredProducts = selectedSup
    ? filterProductsBySup(selectedSup)
    : products;
  
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    swipeToSlide: true,
    autoplay: false,
    autoplaySpeed: 3000,
    // fade: true,
    arrows: true,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  
  };
  return (
    <section className="section-space !my-32 bg-secondary">
      <h2 className="main-title "> {title} </h2>
      <div className=" flex flex-col relative gap-2 lg:gap-0 lg:flex-row ">
        {/* side 01 */}
        <div className="min-w-[25%] bg-[#1B1B1B] text-white">
          <div className="lg:py-16 lg:px-5 py-5 px-3">
            <h2 className="border-b border-main  font-extrabold text-uppercase text-2xl pb-3">
              LIVING ROOM
            </h2>
            <ul className="list-none p-0 lg:block flex gap-3 flex-wrap">
              {Array.from(sup).map((item) => (
                <li
                  className="lg:my-5 my-2 cursor-pointer"
                  onClick={() => setSelectedSup(item)}
                  key={item}
                >
                  {item}
                </li>
              ))}
              <li
                className="lg:my-5 my-2  cursor-pointer"
                onClick={() =>
                  navigate(`/products2/${category || "kitchens"}`) 
                }
              >
                view all
              </li>
            </ul>
          </div>
        </div>
        {/* side 02 */}
        <div className="p-5   overflow-x-hidden    min-w-12 products-slider max-lg:h-fit">
          <Slider {...settings}>
          {filteredProducts?.slice(0, 30).map((product) => (
            <Product
              product={product}
              key={product.id}
              classes="!bg-white  min-w-[30%] mr-5 rounded-xl"
              minimal={false}
            />
          ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};
export default ProductsSection;
