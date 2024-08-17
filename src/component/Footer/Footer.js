import { Grid, Link, Typography } from "@mui/material";
import styles from "./Footer.module.css";

import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function Footer() {
  return (
    <Grid className={styles.footer}>
      <Typography>Website made by copipastaguy with ReactJS</Typography>
      <Link href="https://linkedin.com/in/copipastaguy" color="inherit">
        <LinkedInIcon />
      </Link>

      <Link href="https://github.com/copipastaguy" color="inherit">
        <GitHubIcon />
      </Link>
    </Grid>
  );
}

export default Footer;
