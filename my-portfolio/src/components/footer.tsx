
import { ArrowUp, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="site-footer" id="contact">
      <div className="footer-inner">
        <a href="#home" className="footer-brand">
          <span className="brand-mark">N</span>
          <span>YourName</span>
        </a>

        <p>
          Designed and built with <Heart size={14} /> and a little creativity.
        </p>

        <a className="back-to-top" href="#home" aria-label="Back to top">
          Back to top <ArrowUp size={16} />
        </a>
      </div>

      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} YourName</span>
        <span>Built with React + TypeScript</span>
      </div>
    </footer>
  );
}
