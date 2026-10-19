
import { ArrowDownToLine, BriefcaseBusiness, GraduationCap } from "lucide-react";

export default function Resume() {
  return (
    <div className="section-inner">
      <div className="section-heading">
        <div>
          <p className="eyebrow">A LITTLE ABOUT MY JOURNEY</p>
          <h2>Experience & education<span>.</span></h2>
        </div>
      </div>

      <div className="resume-layout">
        <div className="resume-intro">
          <div className="resume-icon"><BriefcaseBusiness size={24} /></div>
          <h3>My background</h3>
          <p>
            I'm building my skills in development, design, and problem-solving.
            I enjoy learning new technologies and putting them to use in
            practical projects.
          </p>

          <a
            className="button button-primary"
            href="mailto:you@example.com"
          >
            Request my resume <ArrowDownToLine size={18} />
          </a>
          <p className="resume-note">
            Replace this button with a link to your actual resume PDF when ready.
          </p>
        </div>

        <div className="resume-timeline">
          <article className="timeline-item">
            <span className="timeline-marker" />
            <p className="timeline-date">CURRENT</p>
            <h3>Independent Projects & Learning</h3>
            <p>
              Practising web development by building projects and learning
              modern tools and workflows.
            </p>
          </article>

          <article className="timeline-item">
            <span className="timeline-marker" />
            <p className="timeline-date">EDUCATION</p>
            <h3>Learning & Development</h3>
            <p>
              Add your school, program, courses, and accomplishments here.
            </p>
            <div className="timeline-extra">
              <GraduationCap size={17} /> Education
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}
