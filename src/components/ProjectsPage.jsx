import { useMemo, useState } from "react";

import {
  Search,
  Plus,
  Pencil,
  Trash2,
  Eye,
  Filter,
} from "lucide-react";

import ProjectForm from "./ProjectForm";
import TechnologyBadge from "./TechnologyBadge";

function ProjectsPage({
  projects,
  onAdd,
  onEdit,
  onDelete,
  onView,
}) {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

  const [showForm, setShowForm] = useState(false);
  const [editingProject, setEditingProject] = useState(null);

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {

      const matchesSearch =
        project.name
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        project.category
          .toLowerCase()
          .includes(search.toLowerCase());

      const matchesStatus =
        statusFilter === "All" ||
        project.status === statusFilter;

      return matchesSearch && matchesStatus;
    });
  }, [projects, search, statusFilter]);

  const handleEdit = (project) => {
    setEditingProject(project);
    setShowForm(true);
  };

  const handleSave = (project) => {

    if (editingProject) {
      onEdit(project);
    } else {
      onAdd(project);
    }

    setShowForm(false);
    setEditingProject(null);
  };

  const handleDelete = (project) => {

    const confirmed = window.confirm(
      `Are you sure you want to delete "${project.name}"?`
    );

    if (confirmed) {
      onDelete(project.id);
    }
  };

  return (
    <div className="projects-page">

      {/* PAGE HEADER */}

      <div className="page-header">

        <div>

          <span className="section-label">
            WORKSPACE
          </span>

          <h1>Projects</h1>

          <p>
            Manage, track and showcase all your
            DevOps projects.
          </p>

        </div>

        <button
          className="new-project-button"
          onClick={() => {
            setEditingProject(null);
            setShowForm(true);
          }}
        >
          <Plus size={18} />
          New Project
        </button>

      </div>


      {/* CONTROLS */}

      <div className="project-controls">

        <div className="project-search">

          <Search size={18} />

          <input
            type="text"
            placeholder="Search projects..."
            value={search}
            onChange={(event) =>
              setSearch(event.target.value)
            }
          />

        </div>


        <div className="filter-wrapper">

          <Filter size={17} />

          <select
            value={statusFilter}
            onChange={(event) =>
              setStatusFilter(event.target.value)
            }
          >
            <option value="All">
              All Projects
            </option>

            <option value="Completed">
              Completed
            </option>

            <option value="In Progress">
              In Progress
            </option>

            <option value="Planning">
              Planning
            </option>
          </select>

        </div>

      </div>


      {/* PROJECT COUNT */}

      <div className="results-info">

        <span>
          Showing{" "}
          <strong>
            {filteredProjects.length}
          </strong>{" "}
          projects
        </span>

        {search && (
          <span>
            Search: <strong>{search}</strong>
          </span>
        )}

      </div>


      {/* PROJECT GRID */}

      {filteredProjects.length > 0 ? (

        <div className="management-project-grid">

          {filteredProjects.map((project) => (

            <div
              className="management-project-card"
              key={project.id}
            >

              <div className="management-card-header">

                <div className="management-project-icon">
                  {project.icon}
                </div>

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

              </div>


              <span className="project-category">
                {project.category}
              </span>

              <h2>
                {project.name}
              </h2>

              <p className="management-description">
                {project.description}
              </p>


              {/* PROGRESS */}

              <div className="management-progress">

                <div>
                  <span>Progress</span>
                  <strong>
                    {project.progress}%
                  </strong>
                </div>

                <div className="progress-track">
                  <div
                    className={`progress-fill ${
                      project.color || "purple"
                    }`}
                    style={{
                      width: `${project.progress}%`,
                    }}
                  />
                </div>

              </div>


              {/* TECHNOLOGIES */}

              <div className="management-tech">

                {project.technologies
                  .slice(0, 4)
                  .map((technology) => (
                    <TechnologyBadge
                      key={technology}
                      name={technology}
                    />
                  ))}

                {project.technologies.length > 4 && (
                  <span className="more-technologies">
                    +{project.technologies.length - 4}
                  </span>
                )}

              </div>


              {/* TASKS */}

              <div className="management-task-row">

                <span>
                  ✓ {project.completedTasks} completed
                </span>

                <span>
                  {project.tasks} total tasks
                </span>

              </div>


              {/* ACTIONS */}

              <div className="project-actions">

                <button
                  className="view-project-button"
                  onClick={() => onView(project)}
                >
                  <Eye size={16} />
                  View
                </button>

                <button
                  className="edit-project-button"
                  onClick={() => handleEdit(project)}
                >
                  <Pencil size={16} />
                </button>

                <button
                  className="delete-project-button"
                  onClick={() => handleDelete(project)}
                >
                  <Trash2 size={16} />
                </button>

              </div>

            </div>

          ))}

        </div>

      ) : (

        <div className="empty-projects">

          <div>🔎</div>

          <h2>No projects found</h2>

          <p>
            Try changing your search or filter.
          </p>

        </div>

      )}


      {/* FORM MODAL */}

      {showForm && (
        <ProjectForm
          project={editingProject}
          onSave={handleSave}
          onClose={() => {
            setShowForm(false);
            setEditingProject(null);
          }}
        />
      )}

    </div>
  );
}

export default ProjectsPage;