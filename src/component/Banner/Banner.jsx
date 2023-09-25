import React from "react";
import { Grid, Stack, Typography } from "@mui/material";
import "./Banner.css";

const Banner = () => {
  const bannerText = {
    textTransform: "uppercase",
    fontWeight: 700,
    fontSize: 12,
  };
  return (
    <Grid container height="5vh" alignItems="center" width="100%" className="barricadeBanner">
      <Stack direction="row" spacing={4}>
        <Typography sx={bannerText}>Update in progress</Typography>
        <Typography sx={bannerText}>Update in progress</Typography>
        <Typography sx={bannerText}>Update in progress</Typography>
        <Typography sx={bannerText}>Update in progress</Typography>
        <Typography sx={bannerText}>Update in progress</Typography>
        <Typography sx={bannerText}>Update in progress</Typography>
        <Typography sx={bannerText}>Update in progress</Typography>
      </Stack>
    </Grid>
  );
};

export default Banner;
