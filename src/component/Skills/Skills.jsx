import React from "react";
import { Grid, Stack, Typography, Link, Button } from "@mui/material";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

const About = () => {
  return (
    <Grid container padding={2}>
      <Stack spacing={2}>
        <Grid item>
          <Typography variant="h4">About me:</Typography>
          <Typography variant="h6">Hi! My name is Alfred and i started web development back in 2018 with HTML, CSS and Javascript.</Typography>
          <Typography variant="h6">
            I started learning React.js in 2022 while doing tutorial projects which you can see some of it &nbsp;
            <Link href="https://github.com/copipastaguy" color="inherit">
              here
            </Link>
          </Typography>
        </Grid>

        <Grid item>
          <Typography>Some technologies that i have worked with recently:</Typography>

          <Stack direction="row" alignItems="center">
            <Typography>
              <ArrowRightIcon sx={{ color: "red" }} fontSize="large" />
            </Typography>

            <Typography>Javascript (ES6+)</Typography>
          </Stack>

          <Stack direction="row" alignItems="center">
            <Typography>
              <ArrowRightIcon sx={{ color: "red" }} fontSize="large" />
            </Typography>

            <Typography>React.js</Typography>
          </Stack>

          <Stack direction="row" alignItems="center">
            <Typography>
              <ArrowRightIcon sx={{ color: "red" }} fontSize="large" />
            </Typography>

            <Typography>Node.js</Typography>
          </Stack>

          <Stack direction="row" alignItems="center">
            <Typography>
              <ArrowRightIcon sx={{ color: "red" }} fontSize="large" />
            </Typography>

            <Typography>Docker</Typography>
          </Stack>

          <Stack direction="row" alignItems="center">
            <Typography>
              <ArrowRightIcon sx={{ color: "red" }} fontSize="large" />
            </Typography>

            <Typography>Gitlab</Typography>
          </Stack>
        </Grid>
      </Stack>
    </Grid>
  );
};

export default About;
