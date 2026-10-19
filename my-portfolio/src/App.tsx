
import "./App.css";

const projects = [
  {
    number: "01",
    title: "My Portfolio",
    type: "PERSONAL WEBSITE",
    description:
      "A home for my work, experiments, and ideas — designed to make a memorable first impression.",
    tags: ["React", "TypeScript", "CSS"],
    symbol: "✳",
    theme: "orange",
  },
  {
    number: "02",
    title: "Project Dashboard",
    type: "WEB APPLICATION",
    description:
      "A clean, intuitive dashboard that turns complicated information into something easy to explore.",
    tags: ["Frontend", "UI Design", "API"],
    symbol: "◫",
    theme: "lavender",
  },
  {
    number: "03",
    title: "Creative Experiments",
    type: "PLAYGROUND",
    description:
      "Small ideas, new technologies, and experiments that help me learn something new every day.",
    tags: ["JavaScript", "Creative Code"],
    symbol: "✳",
    theme: "yellow",
  },
];

function App() {
  return (
    <div className="site-shell">
      <header className="navbar">
        <a className="brand" href="#home" aria-label="Home">
          <img src="./src/components/meicon.jpeg" alt="Neema Kanyi"/>
                    <span>neema kanyi<span className="brand-dot">.</span></span>
        </a>

        <nav className="nav-links" aria-label="Main navigation">
          <a href="#home">Home</a>
          <a href="#projects">Projects</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>

        <a className="nav-cta" href="mailto:hello@example.com">
          Let's talk <span>↗</span>
        </a>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <div className="eyebrow">
              <span className="status-dot" />
              DEVELOPER PORTFOLIO · 2026
            </div>

            <h1>
              Building things
              <br />
              for the <span className="orange-text">web.</span>
            </h1>

            <p className="hero-description">
              Hey, I’m Your Name — a developer who loves turning
              curious ideas into thoughtful, useful digital experiences.
            </p>

            <div className="hero-actions">
              <a className="button button-primary" href="#projects">
                Explore my work <span>↗</span>
              </a>
              <a className="button button-secondary" href="#about">
                A little about me
              </a>
            </div>

            <div className="hero-footnote">
              <span className="footnote-line" />
              DESIGN MINDED. CODE DRIVEN. ALWAYS CURIOUS.
            </div>
          </div>

          <div className="hero-visual">
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />
            <div className="orange-orb">
              <span>✳</span>
            </div>

            <div className="code-window">
              <div className="window-bar">
                <div className="window-dots">
                  <span />
                  <span />
                  <span />
                </div>
                <span className="window-filename">developer.ts</span>
                <span className="window-status">● LIVE</span>
              </div>

              <div className="code-content">
                <div><span className="line-number">01</span><span className="code-purple">const</span> <span className="code-blue">developer</span> = {"{"}</div>
                <div><span className="line-number">02</span>  name: <span className="code-green">"Your Name"</span>,</div>
                <div><span className="line-number">03</span>  passion: <span className="code-green">"building things"</span>,</div>
                <div><span className="line-number">04</span>  skills: [</div>
                <div><span className="line-number">05</span>    <span className="code-green">"React"</span>,</div>
                <div><span className="line-number">06</span>    <span className="code-green">"TypeScript"</span>,</div>
                <div><span className="line-number">07</span>    <span className="code-green">"Creative thinking"</span></div>
                <div><span className="line-number">08</span>  ],</div>
                <div><span className="line-number">09</span>  openToIdeas: <span className="code-orange">true</span>,</div>
                <div><span className="line-number">10</span>{"}"};</div>
                <div className="code-spacer" />
                <div><span className="line-number">11</span><span className="code-muted">// Let's make something great.</span></div>
                <div><span className="line-number">12</span><span className="code-purple">export default</span> developer;</div>
              </div>

              <div className="window-footer">
                <span><span className="footer-green-dot" /> All systems creative</span>
                <span>UTF-8 · TypeScript</span>
              </div>
            </div>

            <div className="floating-note">
              <span className="note-icon">✦</span>
              <span><strong>Curiosity first.</strong><small>Always learning something new</small></span>
            </div>
          </div>
        </section>

        <div className="principles-strip">
          <span>GOOD IDEAS, BUILT WELL.</span>
          <span className="strip-star">✳</span>
          <span>THOUGHTFUL DESIGN.</span>
          <span className="strip-star">✳</span>
          <span>CODE WITH PURPOSE.</span>
          <span className="strip-star">✳</span>
          <span>ALWAYS EXPERIMENTING.</span>
        </div>

        <section className="projects-section section-wrap" id="projects">
          <div className="section-heading">
            <div>
              <div className="eyebrow">A FEW THINGS I’VE MADE <span className="orange-text">↘</span></div>
              <h2>Ideas into <span className="orange-text">reality.</span></h2>
            </div>
            <p>A selection of projects, experiments, and things I’m proud to share.</p>
          </div>

          <div className="project-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.number}>
                <div className={`project-art art-${project.theme}`}>
                  <span className="art-number">{project.number} / 03</span>
                  <span className="art-symbol">{project.symbol}</span>
                  <span className="art-caption">MADE WITH CURIOSITY</span>
                </div>
                <div className="project-meta">
                  <span>{project.type}</span>
                  <span>{project.number}</span>
                </div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tag-list">
                  {project.tags.map((tag) => (
                    <span className="tag" key={tag}>{tag}</span>
                  ))}
                </div>
                <a className="project-link" href="#contact">
                  Let’s talk about it <span>↗</span>
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="about-section" id="about">
          <div className="about-inner section-wrap">
            <div className="about-label">
              <span className="status-dot" /> A LITTLE ABOUT ME
            </div>
            <div className="about-content">
              <h2>
                I believe the best work happens when <span>curiosity meets craft.</span>
              </h2>
              <p>
                I enjoy learning how things work, solving problems, and
                making digital experiences that feel simple and intuitive.
                I’m always exploring new tools, sharpening my skills, and
                looking for the next idea worth building.
              </p>
              <a className="button button-primary" href="mailto:hello@example.com">
                Get in touch <span>↗</span>
              </a>
            </div>
            <div className="about-stamp">MADE WITH<br />CURIOSITY <span>✳</span></div>
          </div>
        </section>

        <section className="contact-section section-wrap" id="contact">
          <div className="eyebrow">HAVE SOMETHING IN MIND?</div>
          <h2>Let’s build something <span className="orange-text">good.</span></h2>
          <p>Have a project, an idea, or just want to say hello?</p>
          <a className="button button-primary" href="mailto:hello@example.com">
            Say hello <span>↗</span>
          </a>
        </section>
      </main>

      <footer className="site-footer">
        <a className="brand" href="#home">
          <span className="brand-mark">✳</span>
          <span>yourname<span className="brand-dot">.</span></span>
        </a>
        <span>Designed with curiosity. Built with care.</span>
        <a href="#home">BACK TO TOP ↑</a>
      </footer>
    </div>
  );
}

export default App;
