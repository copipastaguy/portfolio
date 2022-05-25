import image from "../../files/user.png";
import styles from "./Masthead.module.css";
import memoji from "../../files/memoji/sticker02.png";

function Masthead() {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <div className={styles.masthead}>
      {/* <img className={styles.mastheadImage} src={image} alt="user-pic" /> */}
      <img src={memoji} />
      <div className={styles.mastheadText}>
        <h1 className={styles.mastheadHeading}>
          print&#40;&#34;Hello World!&#34;&#41;&#59;
        </h1>
        <p className={styles.mastheadIntro}>
          <span className={styles.coloredWord}>const</span> profile = {""}
          <span className={styles.coloredBracket}>&#123;</span>
          <br />
          &emsp; <span className={styles.coloredWord}>name:</span> "Alfred aka
          copipastaguy", <br />
          &emsp; <span className={styles.coloredWord}>
            where:
          </span> "Singapore", <br />
          &emsp; <span className={styles.coloredWord}>age:</span> {year - 2000},
          <br />
          &emsp; <span className={styles.coloredWord}>what:</span> "Interaction
          Designer/ Front-End Developer",
          <br />
          <span className={styles.coloredBracket}>&#125;</span>
        </p>

        <p className={styles.mastheadIntro}>
          <span className={styles.coloredWord}>const</span> languages = {""}
          <span className={styles.coloredBracket}>&#123;</span>
          <br />
          &emsp; <span className={styles.coloredWord}>frontend:</span>
          "HTML5", "CSS3", "JAVASCRIPT" <br />
          &emsp; <span className={styles.coloredWord}>learning:</span>
          "PYTHON", "REACTJS"
          <br />
          <span className={styles.coloredBracket}>&#125;</span>
        </p>
      </div>

      {/* <div className={styles.scrollDown}>
        <p>CLICK ME</p>
      </div> */}
    </div>
  );
}

export default Masthead;
