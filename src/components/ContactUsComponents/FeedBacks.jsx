import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { FeedBackItem } from "../../export.jsx";

const FeedBacks = ({ data }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    speed: 500,
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
      <div >
        <ul className="-mb-4"> {dots} </ul>
      </div>
    ),
  };

  return (
    <section className="py-8   bg-[#F6F6F6]">
      <div className="container mx-auto mb-10">
        <h3 className="main-title my-8   ">FeedBacks</h3>
        <div className=" mt-1 ">
          <Slider {...settings}>
            {data.map((item, index) => (
              <FeedBackItem
                key={index}
                item={item}
                reversed={index % 2 === 0}
              />
            ))}
          </Slider>
        </div>
        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6  [&>*:nth-child(odd)]:rounded-bl-[10px]">
      </div> */}
      </div>
    </section>
  );
};

export default FeedBacks;
