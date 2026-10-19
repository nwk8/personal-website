
import { ArrowDown, ArrowUpRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="availability">
          <span className="availability-dot" />
          Available for opportunities
        </div>

        <p className="eyebrow">HELLO, I'M YOURNAME</p>

        <h1>
          I build things for the <span>web.</span>
        </h1>

        <p className="hero-description">
          I'm a developer who enjoys turning ideas into useful, thoughtful,
          and beautifully designed digital experiences.
        </p>

        <div className="hero-actions">
          <a className="button button-primary" href="#projects">
            Explore my work <ArrowUpRight size={18} />
          </a>

          <a className="button button-secondary" href="#resume">
            View resume
          </a>
        </div>

        <a className="scroll-cue" href="#projects">
          <ArrowDown size={16} /> Scroll to explore
        </a>
      </div>

      <div className="hero-visual" aria-label="Developer workspace illustration">
        <div className="visual-glow" />
        <div className="code-window">
          <div className="window-bar">
            <span />
            <span />
            <span />
            <p>developer.ts</p>
          </div>

          <div className="code-content">
            <p><span className="code-muted">01</span> <span className="code-purple">const</span> developer = {"{"}</p>
            <p><span className="code-muted">02</span> &nbsp; name: <span className="code-green">"Your Name"</span>,</p>
            <p><span className="code-muted">03</span> &nbsp; passion: <span className="code-green">"building"</span>,</p>
            <p><span className="code-muted">04</span> &nbsp; creative: <span className="code-orange">true</span>,</p>
            <p><span className="code-muted">05</span> &nbsp; learning: <span className="code-orange">true</span>,</p>
            <p><span className="code-muted">06</span> {"};"}</p>
            <p className="code-spacer"><span className="code-muted">07</span></p>
            <p><span className="code-muted">08</span> <span className="code-purple">function</span> <span className="code-blue">create</span>() {"{"}</p>
            <p><span className="code-muted">09</span> &nbsp; <span className="code-purple">return</span> <span className="code-green">"something great"</span>;</p>
            <p><span className="code-muted">10</span> {"}"}</p>
          </div>

          <div className="window-status">
            <span><span className="availability-dot" /> All systems creative</span>
            <span>TSX</span>
          </div>
        </div>

        <div className="floating-chip chip-top">
          <span className="chip-icon">{"</>"}</span>
          <span>Clean code</span>
        </div>

        <div className="floating-chip chip-bottom">
          <span className="chip-icon">✳</span>
          <span>Creative thinking</span>
        </div>
      </div>
    </section>
  );
}
