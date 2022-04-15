import styles from "./About.module.css";

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
        <h3 className={styles.downloadCV}>Download my CV</h3>
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
