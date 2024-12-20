// components/index.js

import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import Cart from "./pages/Cart.jsx";
import About from "./pages/About.jsx";
import ContactUs from "./pages/ContactUs.jsx";
import ProductDetails from "./pages/ProductDetails.jsx";
// home
import Skeletons from "./components/Skeletons.jsx";
import TrendingProducts from "./components/HomeComponents/TrendingProducts.jsx";
import BestOffers from "./components/HomeComponents/BestOffers.jsx";
import BestOffersItem from "./components/HomeComponents/BestOffersItem.jsx";
import Products from "./components/HomeComponents/Products.jsx";
import ProductsSection from "./components/HomeComponents/ProductsSection.jsx";
import Product from "./components/HomeComponents/Product.jsx";

import Blog from "./components/HomeComponents/Blog.jsx";
import BlogPost from "./components/HomeComponents/BlogPost.jsx";

import DiscountedProducts from "./components/HomeComponents/DiscountedPRoducts.jsx";
import Hero from "./components/HomeComponents/Hero.jsx";
import MailingList from "./components/HomeComponents/MailingList.jsx";
import NewArrivals from "./components/HomeComponents/NewArrivals.jsx";
import OldProduct from "./components/HomeComponents/OldProduct.jsx";
import OldProducts from "./components/HomeComponents/OldProducts.jsx";

import WhyUs from "./components/AboutComponents/WhyUs.jsx";
import WhyUsCard from "./components/AboutComponents/WhyUsCard.jsx";
// about page
import ContentSection from "./components/AboutComponents/ContentSection.jsx";
import Timeline from "./components/AboutComponents/Timeline.jsx";
import TimelineItem from "./components/AboutComponents/TimelineItem.jsx";
import Founders from "./components/AboutComponents/Founders.jsx";
import FounderItem from "./components/AboutComponents/FounderItem.jsx";

//contact us

import ContactFormSection from "./components/ContactUsComponents/ContactFormSection.jsx";
import Questions from "./components/AboutComponents/Questions.jsx";
import FeedBacks from "./components/ContactUsComponents/FeedBacks.jsx";
import FeedBackItem from "./components/ContactUsComponents/FeedBackItem.jsx";

//cart
import CartDetails from "./components/CartComponents/CartDetails.jsx";
import CartSummary from "./components/CartComponents/CartSummary.jsx";
import CartCheckout from "./components/CartComponents/CartCheckout.jsx";
import CartItem from "./components/CartComponents/CartItem.jsx";


//auth
import SignUp from "./components/Auth/SignUp.jsx";
import SignIn from "./components/Auth/SignIn.jsx";
import ForgotPassword from "./components/Auth/ForgotPassword.jsx";

import Footer from "./components/Footer.jsx";

import { supabase } from "./supabase";

//table names 
export const productsTable = "products2";
export   {
  Navbar,
  Home,
  Cart,
  About,
  ContactUs,
  ProductDetails,
  //home
  Skeletons,
  OldProducts,
  OldProduct,
  BestOffers,
  BestOffersItem,
  TrendingProducts,
  Products,
  ProductsSection,
  Product,
  Blog,
  BlogPost,
  DiscountedProducts,
  Hero,
  MailingList,
  NewArrivals,
  // about page
  ContentSection,
  WhyUs,
  WhyUsCard,
  Timeline,
  TimelineItem,
  Founders,
  FounderItem,
  // contact us
  ContactFormSection,
  Questions,
  FeedBacks,
  FeedBackItem,
  //cart
  CartItem,
  CartDetails,
  CartSummary,
  CartCheckout,
  Footer,
  //auth
  SignUp,
  SignIn,
  ForgotPassword,
  supabase,
};
