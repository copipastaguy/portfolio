import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Grid, Link, Typography } from "@mui/material";

function NavBar() {
  return (
    <Grid container alignItems="center" spacing={2} padding={2}>
      <Grid item>
        <Typography>Alfred Chor | copipastaguy</Typography>
      </Grid>

      <Grid item>
        <Link href="https://linkedin.com/in/alfredchor" color="inherit">
          <LinkedInIcon fontSize="large" />
        </Link>
      </Grid>

      <Grid item>
        <Link href="https://github.com/copipastaguy" color="inherit">
          <GitHubIcon fontSize="large" />
        </Link>
      </Grid>
    </Grid>
  );
}

export default NavBar;
