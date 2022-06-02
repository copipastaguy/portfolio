import styles from "./Works.module.css";
// import Work from "../Work/Work";

function Works() {
  const works = [
    {
      name: "Cross Roads: Kinect Project",
      link: "https://www.behance.net/gallery/89011499/Cross-Roads-Kinect-Project",
      description:
        "A Kinect project made in Unity3D to educate elderly on Silver Zones",
      tags: ["game development, kinect console, unity3d"],
      tag: {
        tag01: "game development",
        tag02: "kinect console",
        tag03: "C#",
      },
      language: "C#",
    },
    {
      name: "ReactJS Youtube Clone",
      link: "https://github.com/copipastaguy/react-youtube-clone",
      description: "Youtube UI clone made with ReactJS",
      tags: ["web development, ReactJS"],
      tag: {
        tag01: "web development",
        tag02: "reactjs",
      },
      language: "ReactJS",
    },
    {
      name: "Champion Bolo Bun",
      link: "https://copipastaguy.github.io/champion-bolo-bun/",
      description: "Prototype Champion Bolo Bun website made with ReactJS",
      tags: ["web development, ReactJS"],
      tag: {
        tag01: "web development",
        tag02: "reactjs",
      },
      language: "ReactJS",
    },
    {
      name: "Job Web Scraping",
      link: "https://github.com/copipastaguy/python/tree/main/jobScrape",
      description: "Python web scraping script made for LinkedIn",
      tags: ["python, web scraping"],
      tag: {
        tag01: "python",
      },
      language: "Python",
    },
    {
      name: "Jankenpon (Rock Paper Scissors)",
      link: "https://github.com/copipastaguy/python/tree/main/jankenpon",
      description: "Python command line Rock Paper Scissors",
      tags: ["python"],
      tag: {
        tag01: "python",
      },
      language: "Python",
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
    <div className={styles.works}>
      <h3 className={styles.worksHeader}>Featured Works</h3>
      <div>
        {/* map out individual projs and their info */}
        {/* destructure values of obj */}
        {works.map((work) => (
          <div className={styles.work} key={work.name}>
            <a href={work.link} className={styles.title}>
              {work.name}
            </a>

            <div className={styles.projectTagHeader}>
              <span>Done with: </span>

              <p className={styles.projectTags}>{work.tags}</p>
              {/* <p className={styles.projectTags}>{tags}</p> */}
            </div>

            <p className={styles.projectDescription}>{work.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Works;
