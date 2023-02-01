import React from "react";
import classes from "./cartItems.module.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../../store/cartSlice";

const CartItems = ({ showCart, onShowCart }) => {
  const selector = useSelector((state) => state.cart);

  const totalAmount = useSelector((state) => state.totalAmount);
  const dispatch = useDispatch();

  const removeHandler = (item) => {
    dispatch(removeFromCart(item));
  };

  const cancel = selector <= 0 ? `empty` : ``;

  return (
    <>
      <div className={`${classes.cart_items_container} ${classes[showCart]}`}>
        {selector.length > 0 ? (
          <>
            {selector.map((item) => {
              return (
                <div className={classes.cart_item} key={item.id}>
                  <span className={`${classes.fa_itmes}`}></span>
                  <img src={item.image} alt={item.name} />
                  <div className={classes.content}>
                    <h3>{item.name}</h3>
                    <div className={classes.price}>${item.price}</div>
                  </div>
                  <p>x {item.quantity}</p>
                  <svg
                    onClick={() => removeHandler(item)}
                    className={classes.closeIcon}
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12,11.2928932 L16.1464466,7.14644661 C16.3417088,6.95118446 16.6582912,6.95118446 16.8535534,7.14644661 C17.0488155,7.34170876 17.0488155,7.65829124 16.8535534,7.85355339 L12.7071068,12 L16.8535534,16.1464466 C17.0488155,16.3417088 17.0488155,16.6582912 16.8535534,16.8535534 C16.6582912,17.0488155 16.3417088,17.0488155 16.1464466,16.8535534 L12,12.7071068 L7.85355339,16.8535534 C7.65829124,17.0488155 7.34170876,17.0488155 7.14644661,16.8535534 C6.95118446,16.6582912 6.95118446,16.3417088 7.14644661,16.1464466 L11.2928932,12 L7.14644661,7.85355339 C6.95118446,7.65829124 6.95118446,7.34170876 7.14644661,7.14644661 C7.34170876,6.95118446 7.65829124,6.95118446 7.85355339,7.14644661 L12,11.2928932 Z" />
                  </svg>
                </div>
              );
            })}
          </>
        ) : (
          <h2 className={classes.cartEmpty}>cart empty</h2>
        )}
        <button
          onClick={onShowCart}
          className={`${classes.cancelbtn} ${classes[cancel]}`}
        >
          Canel
        </button>
        {selector.length > 0 ? (
          <button className={classes.btn}>Check Out</button>
        ) : (
          ``
        )}
        <div className={classes.priceList}>
          <h2>Total</h2>
          <span>${totalAmount?.toFixed(2)}</span>
        </div>
      </div>
    </>
  );
};

export default CartItems;
