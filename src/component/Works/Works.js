import styles from "./Works.module.css";
// import Work from "../Work/Work";

function Works() {
  const works = [
    {
      id: 0,
      name: "Cross Roads: Kinect Project",
      link: "https://www.behance.net/gallery/89011499/Cross-Roads-Kinect-Project",
      description:
        "A Kinect project made in Unity3D to educate elderly on Silver Zones",
      tags: ["game development, kinect console"],
      language: "C#",
    },
    {
      id: 1,
      name: "ReactJS Youtube Clone",
      link: "",
      description: "Youtube UI clone made with ReactJS",
      tags: ["web development, ReactJS"],
      language: "ReactJS",
    },
    {
      id: 2,
      name: "ReactJS ToDo",
      link: "",
      description: "ToDo UI WebApp made with ReactJS",
      tags: ["web development, ReactJS"],
      language: "ReactJS",
    },
    {
      id: 3,
      name: "Python Jankenpon",
      link: "",
      description: "Python command line Rock Paper Scissors",
      tags: ["python"],
      language: "Python",
    },
  ];
  works.map(({ name, tags }) => {
    console.log(`${name} ${tags}`);
  });

  return (
    <div className={styles.works}>
      <h3 className={styles.worksHeader}>Featured Works</h3>
      <div>
        {/* map out individual projs and their info */}
        {/* destructure values of obj */}
        {works.map(({ id, name, link, description, tags, language }) => (
          <div className={styles.work}>
            <a href={link} className={styles.title}>
              {name}
            </a>
            <div className={styles.projectTagHeader}>
              <span>Done with: </span>
              <p className={styles.projectTags}>
                {/* {tags} */}
                {tags}
              </p>
            </div>

            <p className={styles.projectDescription}>{description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Works;
