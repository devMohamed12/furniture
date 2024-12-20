import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import {
  Navbar,
  Home,
  Cart,
  About,
  ContactUs,
  ProductDetails,
  Footer,
  SignUp,
  SignIn,
  ForgotPassword,
} from "./export.jsx";

import "./index.css";
import Auth from "./components/Auth/Auth.jsx";
import ProductsCategory from "./components/ProductsCategory.jsx";
import TrendingProductss from "./components/TrendingProductss.jsx";
import TTT from "./TTT.jsx";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
        <Routes>
          {/* <Route path="*" element={<Navigate to="/" />} /> */}

          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          
          <Route path="contactUs" element={<ContactUs />} /> 

          <Route path="cart" element={<Cart />} />
          <Route path="/products/:productID" element={<ProductDetails />} />
          <Route path="signUp" element={<SignUp />} />
          <Route path="signIn" element={<SignIn />} />
          <Route path="forgotPassword" element={<ForgotPassword />} />
          <Route path="auth" element={<Auth />} />
           <Route path="products2/:category" element={<ProductsCategory />} />
           <Route path="trending" element={<TrendingProductss />} />
           <Route path="ttt" element={<TTT />} />
        </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
