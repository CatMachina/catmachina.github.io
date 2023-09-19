import "./Projects.css";
import { ProjectCardData, ProjectCard } from "./ProjectCard";
import { Fade } from "react-awesome-reveal";

export type ProjectSectionData = {
  title: string;
  projects: ProjectCardData[];
  classNames: string[];
};

export const ProjectSection = (props: ProjectSectionData) => {
  const { title, projects, classNames } = props;
  return (
    <div className={`Projects ${(classNames || []).join(" ")}`}>
      <Fade fraction={1} triggerOnce>
        <h1 className="ProjectsTitle">{title}</h1>
      </Fade>
      <div className="ProjectsList">
        {projects.map((cardData) => (
          <Fade key={cardData.title} fraction={0.6} triggerOnce>
            <ProjectCard {...cardData} />
          </Fade>
        ))}
      </div>
    </div>
  );
};
