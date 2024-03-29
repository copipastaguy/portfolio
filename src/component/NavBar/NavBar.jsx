import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import DownloadIcon from "@mui/icons-material/Download";
import { Grid, Link, Button } from "@mui/material";

function NavBar() {
  return (
    <Grid container alignItems="center" spacing={2} padding={2}>
      <Grid item>
        <Link href="https://linkedin.com/in/copipastaguy" color="inherit">
          <LinkedInIcon fontSize="large" />
        </Link>
      </Grid>

      <Grid item>
        <Link href="https://github.com/copipastaguy" color="inherit">
          <GitHubIcon fontSize="large" />
        </Link>
      </Grid>

      <Grid item>
        <Button startIcon={<DownloadIcon />} color="inherit">
          Resume
        </Button>
      </Grid>
    </Grid>
  );
}

export default NavBar;
