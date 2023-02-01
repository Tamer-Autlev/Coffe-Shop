import React from "react";
import classes from "./NavBar.module.css";
import logo from "../../Images/logo.png";
import { useState } from "react";
import CartItems from "../cart-items/CartItems";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const NavBar = () => {
  const [cart, setCart] = useState(false);
  const showCart = cart ? `active` : ``;
  const setCartHandler = () => {
    setCart(!cart);
  };
  const [cartItem, setCartItem] = useState(true);
  const setCartItemHandler = () => {
    setCartItem(!cartItem);
  };
  const cartQ = cartItem ? `cartActive` : ``;
  const totalQuantity = useSelector((state) => state.totalQuantity);
  return (
    <>
      <header className={classes.header}>
        <CartItems
          oncartQ={setCartItemHandler}
          showCart={showCart}
          onShowCart={setCartHandler}
        />
        <img className={classes.img} src={logo} alt="" />
        <div className={classes.navbtn}>
          <Link to="/">Home</Link>

          <Link to="/shop">Shop</Link>
          <Link to="/contacts">Contact</Link>
        </div>

        <div className={classes.cartContainer}>
          <svg
            onClick={setCartHandler}
            className={classes.cart}
            xmlns="http://www.w3.org/2000/svg"
            height="40"
            width="40"
          >
            <path d="M12.25 35.167q-1 0-1.688-.688-.687-.687-.687-1.687 0-1.042.687-1.73.688-.687 1.73-.687 1 0 1.687.687.688.688.688 1.73 0 1-.688 1.687-.687.688-1.729.688Zm15.667 0q-1.042 0-1.709-.688-.666-.687-.666-1.687 0-1.042.687-1.73.688-.687 1.688-.687t1.708.687q.708.688.708 1.73 0 1-.708 1.687-.708.688-1.708.688ZM8.958 7.5h21.667q1.083 0 1.646.896.562.896.062 1.812l-4.666 8.5q-.375.625-.959.98-.583.354-1.208.354h-12l-2.208 4q-.209.375.02.833.23.458.688.458h18.333v1.417H12.125q-1.417 0-2.063-1.083-.645-1.084-.02-2.292l2.666-4.708-6.25-13.084h-3V4.167h3.917Z" />
          </svg>
          <span className={classes.totalQty}>
            <p className={classes[cartQ]}>{totalQuantity}</p>
          </span>
        </div>
      </header>
    </>
  );
};

export default NavBar;
