import { Box, Grid, IconButton, Link, Stack, Typography, Button } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

function Works() {
  const works = [
    {
      name: "Task Management System with MERN stack",
      link: "https://github.com/copipastaguy/task-management-system-MERN",
      description: "Task management system designed for collaboration in an agile scrum project. Ease of management and collaboration for project managers in kanban style.",
      tags: ["React.js", "Express.js", "MySQL", "Docker"],
    },
    // {
    //   name: "Youtube Clone",
    //   link: "https://github.com/copipastaguy/react-youtube-clone",
    //   description: "Youtube clone made with React.js",
    //   tags: ["React.js"],
    // },
    // {
    //   name: "Champion Bolo Bun",
    //   link: "https://copipastaguy.github.io/champion-bolo-bun/",
    //   description: "Prototype Champion Bolo Bun website made with ReactJS",
    //   tags: ["React.js"],
    // },
    // {
    //   name: "Python Job Web Scraping",
    //   link: "https://github.com/copipastaguy/python/tree/main/jobScrape",
    //   description: "Job web scraping script made for LinkedIn",
    //   tags: ["Python", "Web Scraping"],
    // },
    // {
    //   name: "Python Jankenpon (Rock Paper Scissors)",
    //   link: "https://github.com/copipastaguy/python/tree/main/jankenpon",
    //   description: "A simple Python command line game of Rock Paper Scissors",
    //   tags: ["Python"],
    // },
    {
      name: "Cross Roads: Kinect Project",
      link: "https://www.behance.net/gallery/89011499/Cross-Roads-Kinect-Project",
      description: "A Kinect project made in Unity3D to educate elderly on Silver Zones",
      tags: ["Game Development", "Kinect Console", "Unity3D"],
    },
  ];

  return (
    <Grid container padding={2} justifyContent="center" sx={{ margin: "0 auto" }}>
      <Typography variant="h4">Some things I've built</Typography>

      <Stack width="100%" spacing={3}>
        {works.map((work) => (
          <Grid item key={work.name} padding={2} sx={{ borderBottom: "1px dotted" }}>
            <Stack spacing={2}>
              <Typography variant="h6" sx={{ color: "#dda15e" }}>
                {work.name}
              </Typography>

              <Typography>{work.description}</Typography>
              <Stack direction="row" spacing={2}>
                {work.tags.map((tag) => (
                  <Box sx={{ border: "1px solid", borderRadius: "8px", padding: "5px 10px" }}>
                    <Typography>{tag}</Typography>
                  </Box>
                ))}
              </Stack>

              <Link href={work.link} underline="none" color="inherit">
                <Stack direction="row" alignItems="center" spacing={1}>
                  <Typography>View</Typography>
                  <ArrowForwardIosIcon fontSize="small" />
                </Stack>
              </Link>
            </Stack>
          </Grid>
        ))}

        <Grid item padding={2}>
          <Typography variant="h6" sx={{ color: "#dda15e" }}>
            Updating works in progress . . .
          </Typography>
        </Grid>
      </Stack>

      {/* <Box sx={{ width: "50%", margin: "2% auto" }}>
        <Typography variant="h5" textAlign="center" fontWeight={700}>
          Updating works in progress . . .
        </Typography>
      </Box> */}
    </Grid>
  );
}

export default Works;
