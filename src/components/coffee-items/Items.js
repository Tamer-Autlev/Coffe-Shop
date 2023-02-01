import classes from "./items.module.css";
import latte from "../../Images/menu-1.png";
import americano from "../../Images/menu-2.png";
import espresso from "../../Images/menu-3.png";
import mocha from "../../Images/menu-4.png";
import doubleEspresso from "../../Images/menu-5.png";
import mocchiato from "../../Images/menu-6.png";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/cartSlice";

const coffeItems = [
  {
    id: `m1`,
    image: americano,
    name: `Dark Coffee`,
    price: 3.99,
    discount: 4.99,
    quantity: 1,
  },
  {
    id: `m2`,
    image: latte,
    name: `CAFFÈ LATTE`,
    price: 6.99,
    discount: 8.99,
    quantity: 1,
  },
  {
    id: `m3`,
    image: espresso,
    name: `ESPRESSO `,
    price: 5.99,
    discount: 6.99,
    quantity: 1,
  },
  {
    id: `m4`,
    image: doubleEspresso,
    name: `DOUBLE ESPRESSO `,
    price: 6.99,
    discount: 7.99,
    quantity: 1,
  },
  {
    id: `m5`,
    image: mocha,
    name: `MOCHA`,
    price: 3.99,
    discount: 4.99,
    quantity: 1,
  },
  {
    id: `m6`,
    image: mocchiato,
    name: `Macchiato`,
    price: 3.99,
    discount: 4.99,
    quantity: 1,
  },
];
const Items = ({ oncartQ, onRef }) => {
  const dispatch = useDispatch();

  const ItemHandler = (item) => {
    dispatch(addToCart(item));
  };

  const items = coffeItems.map((item) => {
    return (
      <div ref={onRef} className={classes.box} key={item.id}>
        <div>
          <img src={item.image} alt="" />
        </div>

        <h3>{item.name}</h3>

        <div className={classes.price}>
          {item.price} <span>{item.discount}</span>
        </div>
        <button
          className={classes.btn}
          onClick={() => {
            ItemHandler(item);
            return oncartQ;
          }}
        >
          Add to cart
        </button>
      </div>
    );
  });
  return (
    <section className={classes.menu}>
      <h2 className={classes.heading}>
        our <span className={classes.second_word}>products</span>
      </h2>

      <div className={classes.box_container}>{items}</div>
    </section>
  );
};

export default Items;
