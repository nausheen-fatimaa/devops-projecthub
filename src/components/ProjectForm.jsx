import { useState } from "react";
import { X, Plus, Save } from "lucide-react";

function ProjectForm({
  project,
  onSave,
  onClose,
}) {
  const isEditing = Boolean(project);

  const [formData, setFormData] = useState({
    name: project?.name || "",
    description: project?.description || "",
    category: project?.category || "DevOps",
    status: project?.status || "Planning",
    progress: project?.progress || 0,
    technologies: project?.technologies?.join(", ") || "",
    tasks: project?.tasks || 0,
    completedTasks: project?.completedTasks || 0,
    github: project?.github || "",
    deployment: project?.deployment || "",
    icon: project?.icon || "🚀",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const projectData = {
      ...formData,

      progress: Number(formData.progress),
      tasks: Number(formData.tasks),
      completedTasks: Number(formData.completedTasks),

      technologies: formData.technologies
        .split(",")
        .map((technology) => technology.trim())
        .filter(Boolean),

      workflow: project?.workflow || [
        "Planning",
        "Development",
        "Git",
        "Build",
        "Test",
        "Deploy",
      ],

      color: project?.color || "purple",

      id: project?.id || Date.now(),
    };

    onSave(projectData);
  };

  return (
    <div className="modal-overlay">

      <div className="project-modal">

        <div className="modal-header">

          <div>
            <span className="section-label">
              PROJECT MANAGEMENT
            </span>

            <h2>
              {isEditing
                ? "Edit Project"
                : "Create New Project"}
            </h2>

            <p>
              Add information about your DevOps project.
            </p>
          </div>

          <button
            className="modal-close"
            onClick={onClose}
          >
            <X size={20} />
          </button>

        </div>


        <form onSubmit={handleSubmit}>

          <div className="form-grid">

            <div className="form-group">

              <label>Project Name</label>

              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="e.g. Kubernetes Application"
                required
              />

            </div>


            <div className="form-group">

              <label>Icon</label>

              <input
                type="text"
                name="icon"
                value={formData.icon}
                onChange={handleChange}
                placeholder="🚀"
              />

            </div>


            <div className="form-group full">

              <label>Description</label>

              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Describe your project..."
                rows="3"
                required
              />

            </div>


            <div className="form-group">

              <label>Category</label>

              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
              >
                <option>DevOps</option>
                <option>AI Application</option>
                <option>Containerization</option>
                <option>CI/CD</option>
                <option>Cloud</option>
                <option>Monitoring</option>
                <option>Web Application</option>
              </select>

            </div>


            <div className="form-group">

              <label>Status</label>

              <select
                name="status"
                value={formData.status}
                onChange={handleChange}
              >
                <option>Planning</option>
                <option>In Progress</option>
                <option>Completed</option>
              </select>

            </div>


            <div className="form-group">

              <label>Progress (%)</label>

              <input
                type="number"
                name="progress"
                value={formData.progress}
                onChange={handleChange}
                min="0"
                max="100"
              />

            </div>


            <div className="form-group">

              <label>Total Tasks</label>

              <input
                type="number"
                name="tasks"
                value={formData.tasks}
                onChange={handleChange}
                min="0"
              />

            </div>


            <div className="form-group">

              <label>Completed Tasks</label>

              <input
                type="number"
                name="completedTasks"
                value={formData.completedTasks}
                onChange={handleChange}
                min="0"
              />

            </div>


            <div className="form-group full">

              <label>Technologies</label>

              <input
                type="text"
                name="technologies"
                value={formData.technologies}
                onChange={handleChange}
                placeholder="Docker, Kubernetes, AWS, Jenkins"
              />

              <small>
                Separate technologies using commas.
              </small>

            </div>


            <div className="form-group">

              <label>GitHub URL</label>

              <input
                type="url"
                name="github"
                value={formData.github}
                onChange={handleChange}
                placeholder="https://github.com/..."
              />

            </div>


            <div className="form-group">

              <label>Deployment</label>

              <input
                type="text"
                name="deployment"
                value={formData.deployment}
                onChange={handleChange}
                placeholder="AWS / Kubernetes / Tomcat"
              />

            </div>

          </div>


          <div className="modal-actions">

            <button
              type="button"
              className="cancel-button"
              onClick={onClose}
            >
              Cancel
            </button>

            <button
              type="submit"
              className="save-button"
            >
              {isEditing ? (
                <>
                  <Save size={17} />
                  Save Changes
                </>
              ) : (
                <>
                  <Plus size={17} />
                  Create Project
                </>
              )}
            </button>

          </div>

        </form>

      </div>

    </div>
  );
}

export default ProjectForm;