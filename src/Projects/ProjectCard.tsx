import "./Projects.css";

export type ProjectCardData = {
  imgSrc: string;
  title: string;
  subtitle: string;
  text: string[];
  classNames: string[];
  to?: string;
};

export const ProjectCard = (props: ProjectCardData) => {
  const { imgSrc, title, subtitle, text, classNames, to } = props;
  return (
    <a className={`Card ${classNames.join(' ')}`} href={to} target="_blank">
        <img className="CardMedia" src={imgSrc} />
        <h1 className="CardTitle">{title}</h1>
        <h2 className="CardSubtitle">{subtitle}</h2>
        {text.map((t) => (
          <p key={t} className="CardText">
            {t}
          </p>
        ))}
    </a>
  );
};
