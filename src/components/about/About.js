import aboutImg from "../../Images/about-img.jpeg";
import classes from "./about.module.css";
const About = () => {
  return (
    <section className={classes.about}>
      <h1 className={classes.heading}>
        <span className={classes.about_first_word}>about</span> us
      </h1>

      <div className={classes.row}>
        <div className={classes.image}>
          <img src={aboutImg} alt="" />
        </div>

        <div className={classes.content}>
          <h3>what makes our coffee special?</h3>
          <p>
            We buy only from reputable farmers and millers at volumes equal to
            several hundred acres. We grade our coffees into different sizes and
            quality, throw out the lower quality beans and blind taste our
            grades and types individually to find the best roasting temperature
            that bring out the best taste for that specific size and coffee bean
            different roasting temperatures for different coffee. We do this
            constantly to maintain a consistent and high-quality roast every
            time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
