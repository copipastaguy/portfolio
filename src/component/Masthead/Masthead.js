import image from "../../image/user.png";
import styles from "./Masthead.module.css";

function Masthead() {
  return (
    <div className={styles.masthead}>
      <img className={styles.mastheadImage} src={image} alt="user-image" />
      <div className={styles.mastheadText}>
        <h1 className={styles.mastheadHeading}>Hello World!</h1>
        <br />
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non
        quam pulvinar lectus mollis maximus sit amet sed leo. Phasellus faucibus
        tempor odio, in rhoncus enim pulvinar ut. Pellentesque finibus, dui nec
        facilisis elementum, leo leo pulvinar purus, ac vestibulum est justo at
        nulla.
      </div>
    </div>
  );
}

export default Masthead;
