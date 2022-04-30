import image from "../../files/user.png";
import styles from "./Masthead.module.css";
import Cookie from "../Cookie/Cookie";

function Masthead() {
  return (
    <div className={styles.masthead}>
      <img className={styles.mastheadImage} src={image} alt="user-pic" />
      <div className={styles.mastheadText}>
        <h1 className={styles.mastheadHeading}>Hello World!</h1>
        <br />
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non
        quam pulvinar lectus mollis maximus sit amet sed leo. Phasellus faucibus
        tempor odio, in rhoncus enim pulvinar ut. Pellentesque finibus, dui nec
        facilisis elementum, leo leo pulvinar purus, ac vestibulum est justo at
        nulla.
      </div>
      <div className={styles.scrollDown}>
        <p>CLICK ME</p>
      </div>
      <Cookie />
    </div>
  );
}

export default Masthead;
