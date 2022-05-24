import styles from "../Works/Works.module.css";
function Work({ name, link }) {
  return (
    <div className={styles.work}>
      <a className={styles.title} href={link}>
        {name}
      </a>
    </div>
  );
}

export default Work;
