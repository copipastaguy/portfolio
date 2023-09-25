import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { Grid, Link, Stack, Typography } from "@mui/material";
import React from "react";

const About = () => {
  const skills = ["Javascript", "React.js", "Next.js", "Node.js", "Express.js", "Docker", "Gitlab"];
  return (
    <Grid container padding={5} spacing={2}>
      {/* <Stack spacing={2}> */}
      <Grid item>
        <Typography variant="h4">About me:</Typography>
        <Typography variant="h6">Hi! My name is Alfred and I started web development back in 2018 with HTML, CSS, Javascript and jQuery.</Typography>
        <Typography variant="h6" width="90vw">
          I started learning React.js and other frameworks in 2022 while doing tutorial projects which you can see some of it &nbsp;
          <Link href="https://github.com/copipastaguy" color="inherit">
            here
          </Link>
        </Typography>
      </Grid>

      <Grid item>
        <Typography>Some technologies that i have worked with recently:</Typography>

        <Grid container width="40%">
          {skills.map((skill) => (
            <Grid item lg={6} xl={6}>
              <Stack direction="row" alignItems="center">
                <Typography>
                  <ArrowRightIcon sx={{ color: "red" }} fontSize="large" />
                </Typography>

                <Typography>{skill}</Typography>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Grid>
      {/* </Stack> */}
    </Grid>
  );
};

export default About;
