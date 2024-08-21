import memoji from "../../files/memoji/sticker02.png";
import styles from "./Masthead.module.css";

import DownloadIcon from "@mui/icons-material/Download";
import { Button, Grid, Stack, Typography } from "@mui/material";

function Masthead() {
  const date = new Date();
  const year = date.getFullYear();

  const frontendSkills = ["HTML", "CSS", "Javascript", "Python"];
  const backendSkills = ["Node.js", "Express.js", "MySQL"];
  const devopsSkills = ["Docker", "Git", "Gitlab", "Kubernetes"];
  const certificates = ["AWS Solutions Architect - Associate"];

  const downloadResume = async () => {
    const file = await fetch("https://raw.githubusercontent.com/copipastaguy/resume/main/cv.pdf");

    const blob = await file.blob();

    const downloadURL = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = downloadURL;
    link.setAttribute("download", "Alfred_Chor_CV");
    document.body.appendChild(link);

    link.click();
    link.remove();
  };
  return (
    <Grid container height="100vh" alignItems="center" justifyContent="center" spacing={1}>
      {/* <Grid item sx={{ display: { xs: "none" } }}>
        <img className={styles.memoji} src={memoji} alt="memoji" />
      </Grid> */}

      <Grid item xs={12} md={12} lg={12}>
        <Stack padding={1} sx={{ border: "1px dotted" }}>
          <Typography fontWeight={{ xs: "400" }} fontSize={{ xs: 12, md: 14, lg: 16 }} fontFamily="monospace">
            <span className={styles.coloredWord}>const</span> profile = &#123;
            <br />
            &emsp; <span className={styles.coloredWord}>name:</span> "Alfred",
            <br />
            &emsp; <span className={styles.coloredWord}>where:</span> "Singapore",
            <br />
            &emsp; <span className={styles.coloredWord}>age:</span> {year - 2000}
            <br />
            &emsp; <span className={styles.coloredWord}>what:</span> "Full-Stack Software Engineer",
            <br />
            &emsp; <span className={styles.coloredWord}>skills:</span> &#123;
            <br />
            &emsp; &emsp; <span className={styles.coloredWord}>frontend: </span>[{frontendSkills.map((skill) => `"${skill}"`).join(", ")}]
            <br />
            &emsp; &emsp; <span className={styles.coloredWord}>backend: </span>[{backendSkills.map((skill) => `"${skill}"`).join(", ")}]
            <br />
            &emsp; &emsp; <span className={styles.coloredWord}>devOps: </span>[{devopsSkills.map((skill) => `"${skill}"`).join(", ")}]
            <br />
            &emsp; &#125;
            <br />
            &emsp; <span className={styles.coloredWord}>certificates: </span>[{certificates.map((skill) => `"${skill}"`).join(", ")}]
            <br />
            &emsp; <span className={styles.coloredWord}>interested:</span> ["Cloud", "DevOps"]
            <br />
            &#125;
          </Typography>
        </Stack>
      </Grid>

      <Grid item sx={12}>
        <Stack flexDirection="column" spacing={1}>
          <Button startIcon={<DownloadIcon />} color="inherit" variant="outlined" onClick={downloadResume}>
            Download my CV now!
          </Button>

          <Typography>View my projects below</Typography>
        </Stack>
      </Grid>
    </Grid>
  );
}

export default Masthead;
