
import {
  Code2,
  FileCode2,
  Palette,
  Terminal,
  Boxes,
  GitBranch,
} from "lucide-react";

const technologies = [
  { name: "HTML", category: "Structure", icon: Code2 },
  { name: "CSS", category: "Styling", icon: Palette },
  { name: "JavaScript", category: "Programming", icon: FileCode2 },
  { name: "TypeScript", category: "Type safety", icon: FileCode2 },
  { name: "React", category: "Frontend", icon: Boxes },
  { name: "Git & GitHub", category: "Version control", icon: GitBranch },
  { name: "Terminal", category: "Development tools", icon: Terminal },
];

export default function CodeStack() {
  return (
    <section className="stack-section">
      <div className="section-inner">
        <div className="stack-heading">
          <div>
            <p className="eyebrow">TOOLS OF THE TRADE</p>
            <h2>My tech stack<span>.</span></h2>
          </div>
          <p className="section-description">
            The tools I use and the technologies I'm exploring.
          </p>
        </div>

        <div className="stack-grid">
          {technologies.map((technology) => {
            const Icon = technology.icon;

            return (
              <article className="stack-card" key={technology.name}>
                <div className="stack-icon"><Icon size={22} /></div>
                <div>
                  <h3>{technology.name}</h3>
                  <p>{technology.category}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
