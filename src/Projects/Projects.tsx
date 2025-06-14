import "./Projects.css";
import { ProjectSection, ProjectSectionData } from "./ProjectSection";
import { ProjectCardData } from "./ProjectCard";

const featuredProjects: ProjectCardData[] = [
  {
    imgSrc: "./Projects/Java Subset Compiler.png",
    title: "Java Subset Compiler",
    subtitle: "Subject: Compilers, Systems",
    text: [
      "A compiler for a subset of Java 1.3.",
      "Written in C++ and done as a group project in school. Fairly comprehensive of the Java language."
    ],
    classNames: [],
    to: "https://github.com/CatMachina/Canny-Edge-Detector",
  },
  {
    imgSrc: "./Projects/Canny Edge Detector.png",
    title: "Canny Edge Detector",
    subtitle: "Subject: Computer Vision",
    text: [
      "A tool that detects the most prominent edges of an image.",
      "It returns a black and white silhouette of the original image.",
    ],
    classNames: [],
    to: "https://github.com/CatMachina/Canny-Edge-Detector",
  },
  {
    imgSrc: "./Projects/Pathfinder.png",
    title: "Pathfinder Visualization Tool",
    subtitle: "Subject: Algorithms (Graph Theory)",
    text: ["A tool for applying graph theory algorithms on a grid."],
    classNames: ["Active"],
    to: "https://catmachina.github.io/cs-visualization-tool/pathfinder",
  },
  {
    imgSrc: "./Projects/Leetcode.png",
    title: "LeetCode",
    subtitle: "Subject: Algorithms & Data Structures",
    text: [
      "Stemming from my history of competitive programming and love of algorithms and problem-solving, I code solutions to interesting computational problems.",
      "Topics include: dynamic programming, graph theory, data structures, greedy algorithms, divide-and-conquer, etc.",
    ],
    classNames: ["Active"],
    to: "https://leetcode.com/CatMachina/",
  },
];

const allProjects: ProjectCardData[] = featuredProjects.concat([
  {
    imgSrc: "./Projects/2048.jpg",
    title: "Video Games",
    subtitle: "Subject: Video Game Development",
    text: [
      "All the video games that I've developed using a variety of engines and technologies.",
    ],
    classNames: [],
  },
]);
const upcomingProjects: ProjectCardData[] = [
  {
    imgSrc: "./Projects/Dev Blog.webp",
    title: "Dev Log Blog",
    subtitle: "Subject: All things computer science (and maybe mathematics)",
    text: [
      "A blog consisting of my endeavors that don't fully constitute a project, but interesting or valuable enough to share.",
      "I will also document major events or journeys that span multiple projects as well.",
    ],
    classNames: [],
  },
];

const projectSections: ProjectSectionData[] = [
  {
    title: "Featured Projects",
    projects: featuredProjects,
    classNames: [],
  },
  {
    title: "Upcoming Projects",
    projects: upcomingProjects,
    classNames: [],
  },
  {
    title: "All Projects",
    projects: allProjects,
    classNames: [],
  },
];

export const Projects = () => {
  return (
    <>
      {projectSections.map((sectionData, index) => {
        const addClassNames: string[] = [];
        if (index % 2 == 0) {
          // 1-based indices
          addClassNames.push("Odd");
        } else {
          addClassNames.push("Even");
        }
        if (index != projectSections.length - 1) addClassNames.push("Section");
        return (
          <ProjectSection
            key={sectionData.title}
            title={sectionData.title}
            projects={sectionData.projects}
            classNames={sectionData.classNames.concat(addClassNames)}
          />
        );
      })}
    </>
  );
};
