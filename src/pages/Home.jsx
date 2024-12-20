import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Products,
  Blog,
  DiscountedProducts,
  Hero,
  MailingList,
  NewArrivals,
  BestOffers,
  TrendingProducts,
  WhyUs,
  supabase,
  FeedBacks,
} from "../export.jsx";
import { whyUsData, heroSectionData, feedbackData } from "../utils/data.jsx";
 
function Home() {
  
  return (
    <>
      <Hero data={heroSectionData} />
      <TrendingProducts />
      <BestOffers />
      <WhyUs data={whyUsData} />
     <Products />
      <MailingList />
      {/* <Blog /> */}
      <FeedBacks data={feedbackData}/>
    </>
  );
}

export default Home;
