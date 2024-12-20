// src/components/Navbar.jsx
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";


const Navbar = () => {
  const cartItems = useSelector((state) => state.cart.cartItems).length || 0;
  const user = useSelector((state) => state.user.user) || "";
  const userName = user?.user?.user_metadata?.name || "";

 

  const deviceWidth = window.innerWidth;
   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-base-100 relative ">
      <div className="navbar justify-between container mx-auto">
        {/* Navbar Start */}
        <div className="navbar-start w-1/6">
          {/* Mobile Menu Button */}
          <div className="block lg:hidden " onClick={toggleMobileMenu}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </div>
          {/* Logo */}
          <Link to="/" className="btn btn-ghost text-xl">
            furnitureStore
          </Link>
        </div>

        {/* Navbar Center */}
        <div className={`navbar-center hidden  lg:flex`}>
          <ul className="menu menu-horizontal px-2 mx-auto text-[#222222] text-capitalize tracking-wide">
            <li className="pr-4 text-lg">
              <Link to="/">Home</Link>
            </li>
            <li className="pr-4 text-lg">
              <Link to="/about">About</Link>
            </li>
            <li className="pr-4 text-lg">
              <Link to="/contactUs">Contact Us</Link>
            </li>
          </ul>
        </div>

        {/* Navbar End */}
        <div className="navbar-end flex items-center gap-4 xs:w-2/6 lg:w-1/6">
          <Link
            to="/cart"
            className="btn bg-main/90 hover:!bg-main text-white text-sm md:text-base"
          >
            Cart ({cartItems}){/* cart  {cartItems} */}
          </Link>

          {userName ? (
            <button className="btn bg-accent/90 hover:bg-accent text-white text-sm md:text-base">
              Hello, {userName}
            </button>
          ) : (
            <Link
              to="/auth"
              className="btn bg-accent/90 hover:bg-accent text-white text-sm md:text-base"
            >
              Sign Up
            </Link>
          )}
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <MobileMenu isMobileMenuOpen={isMobileMenuOpen} />
    </header>
  );
};

export default Navbar;

const MobileMenu = ({isMobileMenuOpen}) => {
  return (
    <div className={` z-50 lg:hidden ${isMobileMenuOpen ?  ' opacity-100' : ' opacity-0'} absolute top-16 left-0 w-full   bg-base-200/50 backdrop-blur-sm  transition-opacity duration-300 ease-in-out`}>
      <ul className="menu bg-base-200 p-2 text-[#222222] text-capitalize">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contactUs">Contact Us</Link>
        </li>
      </ul>
    </div>
  );
};



