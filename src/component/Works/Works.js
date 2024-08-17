import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Box, Grid, Link, Stack, Typography, Button } from "@mui/material";

function Works() {
  const works = [
    {
      name: "Task Management System/ Kanban",
      link: "https://github.com/copipastaguy/task-management-system-MERN",
      description: "Task management system designed for collaboration in an AGILE scrum project. Ease of management and collaboration for project managers in kanban style. Learnt the basics of working within an airgapped environment.",
      tags: ["React.js", "Express.js", "MySQL", "Docker"],
      visible: true,
    },
    {
      name: "Youtube Clone",
      link: "https://github.com/copipastaguy/react-youtube-clone",
      description: "Youtube clone made with React.js",
      tags: ["React.js"],
      visible: false,
    },
    {
      name: "Cross Roads: Kinect Project",
      link: "https://www.behance.net/gallery/89011499/Cross-Roads-Kinect-Project",
      description: "A Kinect project made in Unity3D to educate elderly on Silver Zones.",
      tags: ["Game Development", "Kinect Console", "Unity3D", "C#"],
      visible: true,
    },
    {
      name: "Jankenpon (Rock Paper Scissors)",
      link: "https://github.com/copipastaguy/python/tree/main/jankenpon",
      description: "A simple Python command line game of Rock Paper Scissors.",
      tags: ["Python", "CLI"],
      visible: true,
    },
    {
      name: "Python Job Web Scraping",
      link: "https://github.com/copipastaguy/python/tree/main/jobScrape",
      description: "Job web scraping script made for LinkedIn",
      tags: ["Python", "Web Scraping"],
      visible: true,
    },
  ];

  return (
    <Grid container padding={2} justifyContent="center" sx={{ margin: "0 auto" }}>
      <Typography variant="h4">Projects i have managed to complete</Typography>

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
                  <Stack direction="row" spacing={2}>
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
