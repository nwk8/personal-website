
import { ArrowUpRight, Code2, Globe, Palette } from "lucide-react";

const projects = [
  {
    number: "01",
    title: "Personal Portfolio",
    description:
      "A personal website showcasing my projects, skills, experience, and interests.",
    type: "Web development",
    icon: Globe,
    tags: ["React", "TypeScript", "CSS"],
    link: "",
  },
  {
    number: "02",
    title: "Project Dashboard",
    description:
      "A dashboard concept designed to make information easier to understand and manage.",
    type: "Frontend development",
    icon: Code2,
    tags: ["TypeScript", "API", "UI"],
    link: "",
  },
  {
    number: "03",
    title: "Creative Experiments",
    description:
      "A collection of interface ideas and experiments exploring design and interaction.",
    type: "UI / UX",
    icon: Palette,
    tags: ["Design", "Prototyping", "CSS"],
    link: "",
  },
];

export default function Projects() {
  return (
    <div className="section-inner">
      <div className="section-heading">
        <div>
          <p className="eyebrow">WHAT I'VE BEEN WORKING ON</p>
          <h2>Featured projects<span>.</span></h2>
        </div>
        <p className="section-description">
          A few things I've built, explored, and learned along the way.
        </p>
      </div>

      <div className="projects-grid">
        {projects.map((project) => {
          const Icon = project.icon;

          return (
            <article className="project-card" key={project.number}>
              <div className="project-card-top">
                <span className="project-number">{project.number}</span>
                <span className="project-icon"><Icon size={23} /></span>
              </div>

              <p className="project-type">{project.type}</p>
              <h3>{project.title}</h3>
              <p className="project-description">{project.description}</p>

              <div className="project-tags">
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>

              {project.link ? (
                <a
                  className="project-link"
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  View project <ArrowUpRight size={17} />
                </a>
              ) : (
                <span className="project-link project-link-muted">
                  Project showcase
                </span>
              )}
            </article>
          );
        })}
      </div>
    </div>
  );
}
