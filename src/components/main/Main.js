import React from "react";
import classes from "./main.module.css";
const Main = () => {
  return (
    <section className={classes.home}>
      <div className={classes.content}>
        <h3>fresh coffee in the morning</h3>
        <p>
          Boost your productivity and build your mood with a glass of coffe in
          the morning
        </p>
        <button className={classes.btn}>get yours now</button>
      </div>
    </section>
  );
};

export default Main;
