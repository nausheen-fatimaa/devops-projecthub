import {
  ArrowLeft,
  Terminal,
  Workflow,
  Code2,
  CheckCircle2,
} from "lucide-react";

function TechnologyDetails({ technology, onBack }) {
  if (!technology) {
    return (
      <div className="placeholder-page">
        <h1>No technology selected</h1>

        <button
          className="primary-button"
          onClick={onBack}
        >
          Back
        </button>
      </div>
    );
  }

  return (
    <div className="technology-details-page">

      <button
        className="back-button"
        onClick={onBack}
      >
        <ArrowLeft size={17} />
        Back to Technologies
      </button>

      {/* HERO */}

      <section className="technology-hero">

        <div className="technology-hero-icon">
          {technology.icon}
        </div>

        <div className="technology-hero-content">

          <span className="section-label">
            {technology.category}
          </span>

          <h1>
            {technology.name}
          </h1>

          <p>
            {technology.description}
          </p>

        </div>

      </section>

      {/* SKILLS */}

      <section className="details-card">

        <span className="section-label">
          SKILLS
        </span>

        <h2>
          What I Practice
        </h2>

        <div className="technology-skills-grid">

          {technology.skills.map((skill) => (
            <div
              className="technology-skill"
              key={skill}
            >
              <CheckCircle2 size={18} />

              <span>
                {skill}
              </span>
            </div>
          ))}

        </div>

      </section>

      {/* WORKFLOW */}

      <section className="details-card">

        <span className="section-label">
          DEVOPS WORKFLOW
        </span>

        <h2>
          {technology.name} Workflow
        </h2>

        <div className="technology-workflow">

          {technology.workflow.map(
            (step, index) => (
              <div
                className="technology-workflow-step"
                key={`${step}-${index}`}
              >

                <div className="technology-flow-number">
                  {index + 1}
                </div>

                <div>
                  <strong>
                    {step}
                  </strong>

                  <span>
                    Step {index + 1}
                  </span>
                </div>

                {index <
                  technology.workflow.length - 1 && (
                  <div className="technology-flow-arrow">
                    →
                  </div>
                )}

              </div>
            )
          )}

        </div>

      </section>

      {/* COMMANDS */}

      <section className="details-card">

        <div className="technology-command-heading">

          <div>

            <span className="section-label">
              HANDS-ON PRACTICE
            </span>

            <h2>
              Important Commands
            </h2>

          </div>

          <Terminal size={28} />

        </div>

        <div className="command-grid">

          {technology.commands.map(
            (command) => (
              <div
                className="command-box"
                key={command}
              >
                <Code2 size={16} />

                <code>
                  {command}
                </code>
              </div>
            )
          )}

        </div>

      </section>

      {/* PRACTICE CARD */}

      <section className="technology-practice-card">

        <div>

          <Workflow size={30} />

          <div>

            <span>
              HANDS-ON LAB
            </span>

            <h2>
              Practice {technology.name}
            </h2>

            <p>
              Use these concepts and commands in
              real DevOps projects and labs.
            </p>

          </div>

        </div>

      </section>

    </div>
  );
}

export default TechnologyDetails;