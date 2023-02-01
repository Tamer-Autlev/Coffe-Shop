import classes from "./review.module.css";
import reviwer1 from "../../Images/pic-1.png";
import reviwer2 from "../../Images/pic-2.png";
import reviwer3 from "../../Images/pic-3.png";
import reviewPic from "../../Images/quote-img.png";
const reviewers = [
  { name: `Zack`, image: reviwer1 },
  { name: `john`, image: reviwer3 },
  { name: `Matilda`, image: reviwer2 },
];
const Review = () => {
  const star = (
    <svg
      className={classes.star}
      xmlns="http://www.w3.org/2000/svg"
      height="40"
      width="40"
    >
      <path d="m10.958 34.917 2.375-10.25-7.958-6.917 10.5-.917L20 7.125l4.125 9.708 10.5.917-7.958 6.917 2.375 10.25L20 29.5Z" />
    </svg>
  );
  const halfStar = (
    <svg
      className={classes.half_star}
      xmlns="http://www.w3.org/2000/svg"
      height="40"
      width="40"
    >
      <path d="m20 12.75.083 14.333 5.792 3.417-1.458-6.667 4.958-4.416-6.75-.709Zm-9.042 22.167 2.375-10.25-7.958-6.917 10.5-.917L20 7.125l4.125 9.708 10.5.917-7.958 6.917 2.375 10.25L20 29.5Z" />
    </svg>
  );
  return (
    <section className={classes.review} id="review">
      <h1 className={classes.heading}>
        customer's <span>review</span>
      </h1>
      <div className={classes.box_container}>
        {reviewers.map((user, index) => {
          return (
            <div key={index} className={classes.box}>
              <img src={reviewPic} alt="" className={classes.quote} />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
                nulla sit libero nemo fuga sequi nobis? Necessitatibus aut
                laborum, nisi quas eaque laudantium consequuntur iste ex aliquam
                minus vel? Nemo.
              </p>
              <img src={user.image} className={classes.user} alt="" />
              <h3>{user.name}</h3>
              <div className={classes.stars}>
                <i>{star}</i>
                <i>{star}</i>
                <i>{star}</i>
                <i>{star}</i>
                <i>{halfStar}</i>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Review;
