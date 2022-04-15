import styles from "./Sidebar.module.css";
import { BsLinkedin, BsGithub } from "react-icons/bs";

function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <BsLinkedin fontSize="2em" />
      <BsGithub fontSize="2em" />
    </div>
  );
}

export default Sidebar;
