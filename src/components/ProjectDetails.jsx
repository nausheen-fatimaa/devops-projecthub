import {
  ArrowLeft,
  Code2,
  CheckCircle2,
  Circle,
  Server,
  Rocket,
} from "lucide-react";

import TechnologyBadge from "./TechnologyBadge";

function ProjectDetails({ project, onBack }) {
  if (!project) {
    return (
      <div className="placeholder-page">
        <h1>No project selected</h1>

        <button
          className="primary-button"
          onClick={onBack}
        >
          Back to Projects
        </button>
      </div>
    );
  }

  return (
    <div className="project-details-page">

      {/* BACK BUTTON */}

      <button
        className="back-button"
        onClick={onBack}
      >
        <ArrowLeft size={17} />
        Back to Projects
      </button>


      {/* HERO */}

      <section className="project-details-hero">

        <div className="details-hero-left">

          <div className="details-project-icon">
            {project.icon}
          </div>

          <div>

            <span className="section-label">
              {project.category}
            </span>

            <h1>
              {project.name}
            </h1>

            <p>
              {project.description}
            </p>

          </div>

        </div>


        <div className="details-status">

          <span
            className={`status ${
              project.status === "Completed"
                ? "completed"
                : project.status === "In Progress"
                ? "progress"
                : "planning"
            }`}
          >
            {project.status}
          </span>

          <strong>
            {project.progress}%
          </strong>

        </div>

      </section>


      {/* PROGRESS */}

      <section className="details-card">

        <div className="card-heading">

          <div>

            <span className="section-label">
              PROJECT PROGRESS
            </span>

            <h2>
              Development Progress
            </h2>

          </div>

          <div className="progress-percentage">
            {project.progress}%
          </div>

        </div>


        <div className="large-progress">

          <div
            className="large-progress-fill"
            style={{
              width: `${project.progress}%`,
            }}
          />

        </div>


        <div className="large-progress-info">

          <span>
            Project completion
          </span>

          <strong>
            {project.completedTasks} /{" "}
            {project.tasks} tasks
          </strong>

        </div>

      </section>


      {/* TECHNOLOGIES */}

      <section className="details-card">

        <span className="section-label">
          TECHNOLOGY STACK
        </span>

        <h2>
          Technologies Used
        </h2>

        <p className="card-description">
          Tools and technologies used to build,
          test, containerize and deploy this project.
        </p>


        <div className="details-technologies">

          {(project.technologies || []).map(
            (technology) => (
              <TechnologyBadge
                key={technology}
                name={technology}
              />
            )
          )}

        </div>

      </section>


      {/* DEVOPS FLOW */}

      <section className="details-card">

        <span className="section-label">
          DEVOPS LIFECYCLE
        </span>

        <h2>
          Project Flow
        </h2>

        <p className="card-description">
          Complete workflow followed during the
          development and deployment of this project.
        </p>


        <div className="devops-flow">

          {(project.workflow || []).map(
            (step, index) => (

              <div
                className="devops-flow-step"
                key={`${step}-${index}`}
              >

                <div className="flow-number">
                  {index + 1}
                </div>

                <div className="flow-content">

                  <strong>
                    {step}
                  </strong>

                  <span>
                    Stage {index + 1}
                  </span>

                </div>

                {index <
                  project.workflow.length - 1 && (
                  <div className="flow-arrow">
                    →
                  </div>
                )}

              </div>

            )
          )}

        </div>

      </section>


      {/* TASKS */}

      <section className="details-card">

        <span className="section-label">
          TASK MANAGEMENT
        </span>

        <h2>
          Project Tasks
        </h2>


        <div className="task-overview">

          <div className="task-icon">
            ✓
          </div>

          <div className="task-info">

            <strong>
              {project.completedTasks} of{" "}
              {project.tasks} tasks completed
            </strong>

            <p>
              Keep progressing until all project
              activities are completed.
            </p>

          </div>

          <div className="task-percent">
            {Math.round(
              (project.completedTasks /
                project.tasks) *
                100
            )}
            %
          </div>

        </div>


        <div className="task-progress">

          <div
            style={{
              width: `${
                (project.completedTasks /
                  project.tasks) *
                100
              }%`,
            }}
          />

        </div>

      </section>


      {/* DEPLOYMENT */}

      <section className="details-card">

        <span className="section-label">
          DEPLOYMENT
        </span>

        <h2>
          Deployment Environment
        </h2>


        <div className="deployment-box">

          <div className="deployment-icon">
            <Server size={25} />
          </div>

          <div>

            <strong>
              {project.deployment ||
                "Not configured"}
            </strong>

            <p>
              Target environment where the
              application is deployed.
            </p>

          </div>

          <Rocket
            size={25}
            className="deployment-rocket"
          />

        </div>

      </section>


      {/* GITHUB */}

      <section className="details-card github-card">

        <div>

          <span className="section-label">
            SOURCE CODE
          </span>

          <h2>
            GitHub Repository
          </h2>

          <p>
            Access the project source code,
            documentation and DevOps configuration.
          </p>

        </div>


        <a
          href={project.github || "#"}
          target="_blank"
          rel="noreferrer"
          className="github-button"
        >
          <Code2 size={18} />
          View on GitHub
        </a>

      </section>

    </div>
  );
}

export default ProjectDetails;