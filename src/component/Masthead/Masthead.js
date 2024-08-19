import memoji from "../../files/memoji/sticker02.png";
import styles from "./Masthead.module.css";

import { Grid, Stack, Typography, Link, Button } from "@mui/material";

function Masthead() {
  const date = new Date();
  const year = date.getFullYear();

  const frontendSkills = ["HTML", "CSS", "React.js", "Electron.js"];
  const backendSkills = ["Node.js", "Express.js", "MySQL"];
  const devopsSkills = ["Docker", "Git", "Gitlab"];

  return (
    <Grid container height="100vh" alignItems="center" justifyContent="center" spacing={2}>
      <Grid item>
        <img className={styles.memoji} src={memoji} alt="memoji" />
      </Grid>

      <Stack spacing={2}>
        <Grid item>
          <Typography variant="h2" fontWeight={400} fontFamily="monospace">
            console.log&#40;&#34;I'm Alfred&#34;&#41;&#59;
          </Typography>
        </Grid>

        <Grid item>
          <Stack>
            <Typography fontWeight={700} fontFamily="monospace">
              <span className={styles.coloredWord}>const</span> profile = &#123; <br />
              &emsp; <span className={styles.coloredWord}>name:</span> "Alfred", <br />
              &emsp; <span className={styles.coloredWord}>where:</span> "Singapore", <br />
              &emsp; <span className={styles.coloredWord}>age:</span> {year - 2000}, <br />
              &emsp; <span className={styles.coloredWord}>what:</span> "Full-Stack Software Engineer", <br />
              &emsp; <span className={styles.coloredWord}>skills:</span> &#123; <br />
              &emsp; &emsp; <span className={styles.coloredWord}>frontend:</span>[
              {frontendSkills.map((skill) => (
                <span>"{skill}",</span>
              ))}
              ]
              <br />
              &emsp; &emsp; <span className={styles.coloredWord}>backend:</span>[
              {backendSkills.map((skill) => (
                <span>"{skill}", </span>
              ))}
              ]
              <br />
              &emsp; &emsp; <span className={styles.coloredWord}>devOps:</span>[
              {devopsSkills.map((skill) => (
                <span>"{skill}", </span>
              ))}
              ]
              <br />
              &emsp; &#125;
            </Typography>
            &#125;
          </Stack>
        </Grid>
      </Stack>
    </Grid>
  );
}

export default Masthead;
