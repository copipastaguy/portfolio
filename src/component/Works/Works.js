import { Box, Grid, IconButton, Link, Stack, Typography, Button } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

function Works() {
  const works = [
    {
      name: "Task Management System",
      link: "https://github.com/copipastaguy/task-management-system-MERN",
      description: "Task management system designed for collaboration in an agile scrum project",
      tags: ["Web Development", "React.js", "Express.js", "MySQL", "JSON Web Token", "Docker"],
    },
    {
      name: "ReactJS Youtube Clone",
      link: "https://github.com/copipastaguy/react-youtube-clone",
      description: "Youtube UI clone made with ReactJS",
      tags: ["Web Development", "React.js"],
    },
    // {
    //   name: "Champion Bolo Bun",
    //   link: "https://copipastaguy.github.io/champion-bolo-bun/",
    //   description: "Prototype Champion Bolo Bun website made with ReactJS",
    //   tags: ["Web Development", "React.js"],
    // },
    {
      name: "Job Web Scraping",
      link: "https://github.com/copipastaguy/python/tree/main/jobScrape",
      description: "Job web scraping script made for LinkedIn",
      tags: ["Python", "Web Scraping"],
    },
    {
      name: "Jankenpon (Rock Paper Scissors)",
      link: "https://github.com/copipastaguy/python/tree/main/jankenpon",
      description: "A simple Python command line game of Rock Paper Scissors",
      tags: ["Python"],
    },
    {
      name: "Cross Roads: Kinect Project",
      link: "https://www.behance.net/gallery/89011499/Cross-Roads-Kinect-Project",
      description: "A Kinect project made in Unity3D to educate elderly on Silver Zones",
      tags: ["Game Development", "Kinect Console", "Unity3D"],
    },
  ];

  // mapping out each work and check if "tags" exist in the object keys
  // iterate each work and return tags
  // works.map((work) => {
  //   if ("tag" in work)
  //     Object.values(work.tag).forEach((tag) => {
  //       // console.log(`${work.name} uses ${tag}`);
  //       return (
  //         <p key={tag} className={styles.projectTags}>
  //           {tag}
  //         </p>
  //       );
  //     });
  //   return null;
  // });

  return (
    <Grid container width="100vw" padding={2}>
      <Typography variant="h4">Works</Typography>

      <Stack width="100%" spacing={3}>
        {works.map((work) => (
          <Grid item width="100%" key={work.name} padding={2} sx={{ borderBottom: "1px dotted" }}>
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
                <Stack direction="row" alignItems="center">
                  View <ArrowForwardIosIcon />
                </Stack>
              </Link>
            </Stack>
          </Grid>
        ))}
      </Stack>
    </Grid>
  );
}

export default Works;
