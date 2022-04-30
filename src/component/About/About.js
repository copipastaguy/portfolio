import styles from "./About.module.css";
import resume from "../../files/resume.jpg";

function About() {
  return (
    <div className={styles.about}>
      <div className={styles.aboutText}>
        <h1>Who am i</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur dui
          quam, accumsan id luctus sit amet, venenatis at erat. Cras vitae
          sapien vitae sem finibus vehicula. Phasellus lacinia egestas iaculis.
          Nulla vestibulum lacus sit amet nulla finibus ultrices. Praesent
          hendrerit, est ut rutrum blandit, sapien libero fermentum tellus, a
          iaculis lectus diam at ex. Pellentesque rutrum enim in mauris maximus
          gravida. Proin sed metus a magna lobortis dapibus et vitae magna.
        </p>
        <a href={resume} download="resume.jpg" className={styles.downloadCV}>
          <p>Download my CV</p>
        </a>
      </div>

      <div className={styles.skills}>
        <p>html</p>
        <p>css</p>
        <p>javascript</p>
        <p>jquery</p>
        <p>adobe xd</p>
        <p>prototype</p>
        <p>wireframe</p>
      </div>
    </div>
  );
}

export default About;
