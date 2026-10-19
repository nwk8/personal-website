
import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";

const socialLinks = [
  {
    label: "GitHub",
    description: "My code and projects",
    href: "https://github.com/",
    icon: Github,
  },
  {
    label: "LinkedIn",
    description: "Connect professionally",
    href: "https://www.linkedin.com/",
    icon: Linkedin,
  },
  {
    label: "Email",
    description: "Get in touch with me",
    href: "mailto:you@example.com",
    icon: Mail,
  },
];

export default function Links() {
  return (
    <section className="links-section">
      <div className="section-inner">
        <div className="links-heading">
          <div>
            <p className="eyebrow">FIND ME ONLINE</p>
            <h2>Let's connect<span>.</span></h2>
          </div>
          <p className="section-description">
            Have an idea or want to talk? Find me here.
          </p>
        </div>

        <div className="social-grid">
          {socialLinks.map((link) => {
            const Icon = link.icon;
            const external = link.href.startsWith("https://");

            return (
              <a
                className="social-card"
                href={link.href}
                key={link.label}
                target={external ? "_blank" : undefined}
                rel={external ? "noreferrer" : undefined}
              >
                <span className="social-icon"><Icon size={22} /></span>
                <span className="social-copy">
                  <strong>{link.label}</strong>
                  <span>{link.description}</span>
                </span>
                <ArrowUpRight className="social-arrow" size={18} />
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
