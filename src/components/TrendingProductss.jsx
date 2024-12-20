// import React, { useEffect, useState } from "react";
// import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

// import { Swiper, SwiperSlide } from "swiper/react";

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import "swiper/css/scrollbar";
// import { supabase } from "../supabase";

// const TrendingProducts = () => {
//   const [dataa, setData] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);

//   const getData = async () => {
//     try {
//       const { data, error } = await supabase
//         .from("products2")
//         .select("*")
//         .limit(10);
//       if (error) throw error;
//       setData(data);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   useEffect(() => {
//     getData();
//   }, []);

//   const breakpoints = {
//     480: {
//       slidesPerView: 1,
//       spaceBetween: 10,
//     },
//     768: {
//       slidesPerView: 3,
//       spaceBetween: 15,
//     },
//     1024: {
//       slidesPerView: 3,
//       spaceBetween: 20,
//     },
//   };

//   // Loading state
//   if (isLoading) return <div>Loading...</div>;

//   // No data state
//   if (dataa.length === 0) return <div>No products available.</div>;

//   return (
//     <div className="w-5/6 mx-auto min-h-[500px]">
//       <div>a7a</div>

//       {dataa && (
//         <Swiper
//           modules={[Pagination, Navigation]}
//           pagination={{ clickable: true }}
//           navigation
//           slidesPerView={2}
//           spaceBetween={30}
//           breakpoints={breakpoints}
//           autoplay={{
//             delay: 3000,
//             disableOnInteraction: false,
//           }}
//         >
//           {dataa.map((item) => (
//             <SwiperSlide key={item.id}>
//               <div className="bg-white p-5 rounded-xl">
//                 <img src={item.imageSrc} alt={item.name} />
//                 <h3>{item.name || "a7a"}</h3>
//                 <p>{item.price || "a7a" }</p>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       )}
//     </div>
//   );
// };

// export default TrendingProducts;


import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { supabase } from "../supabase";

const TrendingProducts = () => {
  const [dataa, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // Add loading state

  const getData = async () => {
    try {
      const { data, error } = await supabase
        .from("products2")
        .select("*")
        
      if (error) throw error;
      setData(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setIsLoading(false); // End loading state
    }
  };

  useEffect(() => {
    getData();
  }, []);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
     swipeToSlide: true,
    autoplay: false,
    autoplaySpeed: 3000,
    // fade: true,
    // arrows: true,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    appendDots: (dots) => (
      <div>
        <ul className="-mb-4"> {dots} </ul>
      </div>
    ),
  };

  // Loading state
  if (isLoading) return <div>Loading...</div>;

  // No data state
  if (dataa.length === 0) return <div>No products available.</div>;

  return (
    <>
      <div className="w-5/6 mx-auto min-h-[500px]">
                   <>
                      <div>a7a</div>
          <Slider {...settings}>
            { dataa.slice(0, 10).map((item) => (
                <div key={item.id} className="bg-white p-5 rounded-xl">
                    <img src={item.imageSrc} alt={item.name} />
                <h3>{item.name || "a7a"}</h3>
                <p>{item.price || "a7a"}</p>
              </div>
            ))} 
          </Slider>
        </>
       </div>
    </>
  );
};

export default TrendingProducts;  

 



