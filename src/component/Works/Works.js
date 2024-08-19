import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Box, Button, Grid, Link, Stack, Typography } from "@mui/material";
import works from "./works.json";

function Works() {
  return (
    <Grid container padding={2} justifyContent="center" sx={{ margin: "0 auto" }}>
      <Typography variant="h4">Mini projects</Typography>

      <Stack width="100%" spacing={3}>
        {works.map(
          (work) =>
            work.visible && (
              <Grid item key={work.name} padding={2} sx={{ borderBottom: "1px dotted" }}>
                <Stack spacing={2} marginBottom={2}>
                  <Typography variant="h6" sx={{ color: "#dda15e" }}>
                    {work.name}
                  </Typography>

                  <Typography>{work.description}</Typography>
                  <Stack direction="row" alignItems="center" spacing={2}>
                    <Typography>Tags:</Typography>
                    {work.tags.map((tag) => (
                      <Box sx={{ border: "1px solid", borderRadius: "8px", padding: "5px 10px" }}>
                        <Typography>{tag}</Typography>
                      </Box>
                    ))}
                  </Stack>
                </Stack>

                <Link href={work.link} target="_blank">
                  <Button endIcon={<ArrowForwardIosIcon />} sx={{ color: "white" }}>
                    View
                  </Button>
                </Link>
              </Grid>
            )
        )}

        <Grid item padding={2}>
          <Typography variant="h6" sx={{ color: "#dda15e" }}>
            Many many more works in progress . . .
          </Typography>
        </Grid>
      </Stack>
    </Grid>
  );
}

export default Works;
