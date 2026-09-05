import {
  ArrowUpRight,
  CheckCircle2,
  Clock3,
} from "lucide-react";

import TechnologyBadge from "./TechnologyBadge";

function ProjectCard({ project }) {
  return (
    <div className={`project-card project-${project.color}`}>
      <div className="project-card-top">
        <div className="project-icon">
          {project.icon}
        </div>

        <button className="project-more">
          <ArrowUpRight size={18} />
        </button>
      </div>

      <div className="project-category">
        {project.category}
      </div>

      <h3>{project.name}</h3>

      <p className="project-description">
        {project.description}
      </p>

      <div className="project-status-row">
        {project.status === "Completed" ? (
          <span className="status completed">
            <CheckCircle2 size={14} />
            Completed
          </span>
        ) : (
          <span
            className={`status ${
              project.status === "In Progress"
                ? "progress"
                : "planning"
            }`}
          >
            <Clock3 size={14} />
            {project.status}
          </span>
        )}

        <span className="task-count">
          {project.completedTasks}/{project.tasks} tasks
        </span>
      </div>

      <div className="progress-header">
        <span>Progress</span>
        <strong>{project.progress}%</strong>
      </div>

      <div className="progress-track">
        <div
          className={`progress-fill ${project.color}`}
          style={{ width: `${project.progress}%` }}
        ></div>
      </div>

      <div className="technology-list">
        {project.technologies.slice(0, 3).map((technology) => (
          <TechnologyBadge
            key={technology}
            name={technology}
          />
        ))}

        {project.technologies.length > 3 && (
          <span className="more-technologies">
            +{project.technologies.length - 3}
          </span>
        )}
      </div>
    </div>
  );
}

export default ProjectCard;