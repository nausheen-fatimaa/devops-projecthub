import React, { useEffect, useState } from "react";

import {
  LayoutDashboard,
  FolderKanban,
  Settings,
  Bell,
  Search,
  Menu,
  X,
  Layers,
  Code2,
  Plus,
  ExternalLink,
  Trash2,
  GitBranch,
} from "lucide-react";

import { initialProjects } from "./data/projects";

import ProjectsPage from "./components/ProjectsPage";
import ProjectDetails from "./components/ProjectDetails";
import TechnologiesPage from "./components/TechnologiesPage";
import TechnologyDetails from "./components/TechnologyDetails";
import PipelinePage from "./components/PipelinePage";

function App() {
  const [currentPage, setCurrentPage] = useState("dashboard");

  const [selectedProject, setSelectedProject] = useState(null);

  const [selectedTechnology, setSelectedTechnology] = useState(null);

  const [projects, setProjects] = useState(() => {
    try {
      const savedProjects = localStorage.getItem("devops-projects");

      if (savedProjects) {
        const parsedProjects = JSON.parse(savedProjects);

        if (Array.isArray(parsedProjects)) {
          return parsedProjects;
        }
      }

      return initialProjects;
    } catch (error) {
      console.error("Failed to load projects:", error);
      return initialProjects;
    }
  });

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem(
        "devops-projects",
        JSON.stringify(projects)
      );
    } catch (error) {
      console.error("Failed to save projects:", error);
    }
  }, [projects]);

  /*
    -----------------------------
    NAVIGATION
    -----------------------------
  */

  const navigateTo = (page) => {
    setCurrentPage(page);
    setSelectedProject(null);
    setSelectedTechnology(null);
    setMobileMenuOpen(false);
  };

  const handleProjectSelect = (project) => {
    setSelectedProject(project);
    setCurrentPage("project-details");
    setMobileMenuOpen(false);
  };

  const handleBackToProjects = () => {
    setSelectedProject(null);
    setCurrentPage("projects");
  };

  const handleTechnologySelect = (technology) => {
    setSelectedTechnology(technology);
    setCurrentPage("technology-details");
    setMobileMenuOpen(false);
  };

  const handleBackToTechnologies = () => {
    setSelectedTechnology(null);
    setCurrentPage("technologies");
  };

  /*
    -----------------------------
    PROJECT MANAGEMENT
    -----------------------------
  */

  const handleAddProject = (project) => {
    setProjects((previousProjects) => [
      ...previousProjects,
      project,
    ]);
  };

  const handleEditProject = (updatedProject) => {
    setProjects((previousProjects) =>
      previousProjects.map((project) =>
        project.id === updatedProject.id
          ? updatedProject
          : project
      )
    );

    setSelectedProject((previousProject) => {
      if (
        previousProject &&
        previousProject.id === updatedProject.id
      ) {
        return updatedProject;
      }

      return previousProject;
    });
  };

  const handleDeleteProject = (projectId) => {
    setProjects((previousProjects) =>
      previousProjects.filter(
        (project) => project.id !== projectId
      )
    );

    setSelectedProject((previousProject) => {
      if (
        previousProject &&
        previousProject.id === projectId
      ) {
        setCurrentPage("projects");
        return null;
      }

      return previousProject;
    });
  };

  /*
    -----------------------------
    DASHBOARD STATISTICS
    -----------------------------
  */

  const completedProjects = projects.filter(
    (project) => project.status === "Completed"
  ).length;

  const inProgressProjects = projects.filter(
    (project) => project.status === "In Progress"
  ).length;

  const planningProjects = projects.filter(
    (project) => project.status === "Planning"
  ).length;

  const totalTasks = projects.reduce(
    (total, project) =>
      total + Number(project.tasks || 0),
    0
  );

  const completedTasks = projects.reduce(
    (total, project) =>
      total + Number(project.completedTasks || 0),
    0
  );

  const overallProgress =
    totalTasks === 0
      ? 0
      : Math.round(
          (completedTasks / totalTasks) * 100
        );

  /*
    -----------------------------
    DASHBOARD
    -----------------------------
  */

  const renderDashboard = () => {
    return (
      <div className="dashboard-page">

        {/* HERO */}

        <section className="dashboard-hero">

          <div className="dashboard-hero-content">

            <span className="section-label">
              DEVOPS PROJECTHUB
            </span>

            <h1>
              Build.
              <br />
              Automate.
              <br />
              Deploy.
            </h1>

            <p>
              A personal DevOps project portfolio
              showcasing practical cloud,
              containerization, automation,
              infrastructure as code and
              deployment skills.
            </p>

            <div className="hero-buttons">

              <button
                className="primary-button"
                onClick={() => navigateTo("projects")}
              >
                <FolderKanban size={18} />
                View Projects
              </button>

              <button
                className="secondary-button"
                onClick={() =>
                  navigateTo("technologies")
                }
              >
                <Layers size={18} />
                Explore Technologies
              </button>

            </div>

          </div>

          <div className="dashboard-hero-visual">

            <div className="hero-orbit">

              <div className="orbit-item orbit-docker">
                🐳
              </div>

              <div className="orbit-item orbit-kubernetes">
                ☸️
              </div>

              <div className="orbit-item orbit-aws">
                ☁️
              </div>

              <div className="orbit-item orbit-git">
                🌿
              </div>

              <div className="hero-center">
                <Code2 size={42} />
              </div>

            </div>

          </div>

        </section>

        {/* STATISTICS */}

        <section className="stats-grid">

          <div className="stat-card">
            <span>TOTAL PROJECTS</span>

            <strong>
              {projects.length}
            </strong>

            <p>
              DevOps projects
            </p>
          </div>

          <div className="stat-card">
            <span>COMPLETED</span>

            <strong>
              {completedProjects}
            </strong>

            <p>
              Finished projects
            </p>
          </div>

          <div className="stat-card">
            <span>IN PROGRESS</span>

            <strong>
              {inProgressProjects}
            </strong>

            <p>
              Currently building
            </p>
          </div>

          <div className="stat-card">
            <span>OVERALL PROGRESS</span>

            <strong>
              {overallProgress}%
            </strong>

            <p>
              Across all projects
            </p>
          </div>

        </section>

        {/* PROJECT STATUS SUMMARY */}

        <section className="dashboard-section">

          <div className="section-heading">

            <div>
              <span className="section-label">
                PROJECT STATUS
              </span>

              <h2>
                Current Portfolio
              </h2>
            </div>

            <button
              className="text-button"
              onClick={() =>
                navigateTo("projects")
              }
            >
              Manage Projects →
            </button>

          </div>

          <div className="stats-grid">

            <div className="stat-card">
              <span>PLANNING</span>

              <strong>
                {planningProjects}
              </strong>

              <p>
                Projects being planned
              </p>
            </div>

            <div className="stat-card">
              <span>TOTAL TASKS</span>

              <strong>
                {totalTasks}
              </strong>

              <p>
                Across all projects
              </p>
            </div>

            <div className="stat-card">
              <span>COMPLETED TASKS</span>

              <strong>
                {completedTasks}
              </strong>

              <p>
                Tasks completed
              </p>
            </div>

            <div className="stat-card">
              <span>REMAINING TASKS</span>

              <strong>
                {Math.max(
                  totalTasks - completedTasks,
                  0
                )}
              </strong>

              <p>
                Tasks remaining
              </p>
            </div>

          </div>

        </section>

        {/* RECENT PROJECTS */}

        <section className="dashboard-section">

          <div className="section-heading">

            <div>
              <span className="section-label">
                PROJECT PORTFOLIO
              </span>

              <h2>
                Recent Projects
              </h2>
            </div>

            <button
              className="text-button"
              onClick={() =>
                navigateTo("projects")
              }
            >
              View All →
            </button>

          </div>

          {projects.length > 0 ? (

            <div className="dashboard-project-grid">

              {projects
                .slice(0, 4)
                .map((project) => (

                  <div
                    className={`mini-project-card project-${project.color || "purple"}`}
                    key={project.id}
                    onClick={() =>
                      handleProjectSelect(project)
                    }
                  >

                    <div className="mini-project-top">

                      <div className="project-icon">
                        {project.icon}
                      </div>

                      <span
                        className={`status ${
                          project.status ===
                          "Completed"
                            ? "completed"
                            : project.status ===
                              "In Progress"
                            ? "progress"
                            : "planning"
                        }`}
                      >
                        {project.status}
                      </span>

                    </div>

                    <h3>
                      {project.name}
                    </h3>

                    <p>
                      {project.description}
                    </p>

                    <div className="mini-progress">

                      <div>
                        <span>
                          Progress
                        </span>

                        <strong>
                          {project.progress}%
                        </strong>
                      </div>

                      <div className="mini-progress-bar">

                        <div
                          style={{
                            width: `${project.progress}%`,
                          }}
                        />

                      </div>

                    </div>

                  </div>

                ))}

            </div>

          ) : (

            <div className="empty-projects">

              <div>
                📁
              </div>

              <h2>
                No projects yet
              </h2>

              <p>
                Create your first DevOps project.
              </p>

              <button
                className="primary-button"
                onClick={() =>
                  navigateTo("projects")
                }
              >
                <Plus size={18} />
                Create Project
              </button>

            </div>

          )}

        </section>

        {/* DEVOPS LIFECYCLE */}

        <section className="dashboard-flow">

          <div className="section-heading">

            <div>
              <span className="section-label">
                DEVOPS LIFECYCLE
              </span>

              <h2>
                How I Build & Deploy
              </h2>
            </div>

          </div>

          <div className="dashboard-flow-items">

            {[
              [
                "01",
                "Plan",
                "Requirements & Architecture",
              ],
              [
                "02",
                "Develop",
                "Application Development & Python",
              ],
              [
                "03",
                "Version Control",
                "Git & GitHub",
              ],
              [
                "04",
                "Build",
                "Maven & Automation",
              ],
              [
                "05",
                "Infrastructure",
                "Terraform & Infrastructure as Code",
              ],
              [
                "06",
                "Configure",
                "Ansible Configuration Management",
              ],
              [
                "07",
                "Containerize",
                "Docker",
              ],
              [
                "08",
                "Orchestrate",
                "Kubernetes",
              ],
              [
                "09",
                "Deploy",
                "AWS Cloud",
              ],
              [
                "10",
                "Monitor",
                "Logs & Monitoring",
              ],
            ].map(
              ([number, title, description]) => (
                <div
                  className="dashboard-flow-item"
                  key={number}
                >

                  <span>
                    {number}
                  </span>

                  <strong>
                    {title}
                  </strong>

                  <p>
                    {description}
                  </p>

                </div>
              )
            )}

          </div>

        </section>

        {/* TECHNOLOGY HIGHLIGHT */}

        <section className="dashboard-section">

          <div className="section-heading">

            <div>

              <span className="section-label">
                DEVOPS TOOLKIT
              </span>

              <h2>
                Technologies I Practice
              </h2>

            </div>

            <button
              className="text-button"
              onClick={() =>
                navigateTo("technologies")
              }
            >
              Explore All →
            </button>

          </div>

          <div className="dashboard-project-grid">

            <div className="mini-project-card">
              <div className="project-icon">
                🐳
              </div>

              <h3>
                Docker
              </h3>

              <p>
                Containerization and
                container-based application
                deployment.
              </p>
            </div>

            <div className="mini-project-card">
              <div className="project-icon">
                ☸️
              </div>

              <h3>
                Kubernetes
              </h3>

              <p>
                Container orchestration,
                deployments, services and
                scaling.
              </p>
            </div>

            <div className="mini-project-card">
              <div className="project-icon">
                ⚙️
              </div>

              <h3>
                Ansible
              </h3>

              <p>
                Configuration management,
                automation and server
                provisioning.
              </p>
            </div>

            <div className="mini-project-card">
              <div className="project-icon">
                🏗️
              </div>

              <h3>
                Terraform
              </h3>

              <p>
                Infrastructure as Code for
                provisioning and managing
                cloud infrastructure.
              </p>
            </div>

            <div className="mini-project-card">
              <div className="project-icon">
                🐍
              </div>

              <h3>
                Python
              </h3>

              <p>
                Scripting, automation,
                DevOps utilities and
                application development.
              </p>
            </div>

            <div className="mini-project-card">
              <div className="project-icon">
                ☁️
              </div>

              <h3>
                AWS
              </h3>

              <p>
                Cloud infrastructure,
                compute, networking and
                deployment.
              </p>
            </div>

          </div>

        </section>

      </div>
    );
  };

  /*
    -----------------------------
    PROJECT DETAILS
    -----------------------------
  */

  const renderProjectDetails = () => {
    if (!selectedProject) {
      return (
        <div className="placeholder-page">

          <h1>
            No project selected
          </h1>

          <button
            className="primary-button"
            onClick={handleBackToProjects}
          >
            <FolderKanban size={17} />
            Back to Projects
          </button>

        </div>
      );
    }

    return (
      <div>

        <ProjectDetails
          project={selectedProject}
          onBack={handleBackToProjects}
        />

        <div
          className="details-card"
          style={{
            marginTop: "24px",
          }}
        >

          <span className="section-label">
            PROJECT RESOURCES
          </span>

          <h2>
            Links & Resources
          </h2>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "12px",
              marginTop: "18px",
            }}
          >

            {selectedProject.github ? (

              <a
                href={selectedProject.github}
                target="_blank"
                rel="noreferrer"
                className="primary-button"
              >
                <Code2 size={17} />
                GitHub Repository
              </a>

            ) : null}

            {selectedProject.deployment ? (

              <a
                href={
                  selectedProject.deployment.startsWith(
                    "http"
                  )
                    ? selectedProject.deployment
                    : `https://${selectedProject.deployment}`
                }
                target="_blank"
                rel="noreferrer"
                className="secondary-button"
              >
                <ExternalLink size={17} />
                Deployment
              </a>

            ) : null}

            {!selectedProject.github &&
              !selectedProject.deployment && (

                <p>
                  No external resources added
                  for this project yet.
                </p>

              )}

          </div>

        </div>

      </div>
    );
  };

  /*
    -----------------------------
    PAGE CONTENT
    -----------------------------
  */

  const renderPage = () => {

    switch (currentPage) {

      case "projects":
        return (
          <ProjectsPage
            projects={projects}
            onAdd={handleAddProject}
            onEdit={handleEditProject}
            onDelete={handleDeleteProject}
            onView={handleProjectSelect}
          />
        );

      case "project-details":
        return renderProjectDetails();

      case "technologies":
        return (
          <TechnologiesPage
            onTechnologySelect={
              handleTechnologySelect
            }
          />
        );

      case "technology-details":
        return (
          <TechnologyDetails
            technology={selectedTechnology}
            onBack={handleBackToTechnologies}
          />
        );

      case "pipeline":
        return <PipelinePage />;

      case "settings":
        return (
          <div className="settings-page">

            <span className="section-label">
              CONFIGURATION
            </span>

            <h1>
              Settings
            </h1>

            <div className="settings-card">

              <h2>
                DevOps ProjectHub
              </h2>

              <p>
                Project portfolio dashboard
                for DevOps learning and
                hands-on practice.
              </p>

              <div
                style={{
                  marginTop: "24px",
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "12px",
                }}
              >

                <button
                  className="secondary-button"
                  onClick={() => {

                    const confirmed =
                      window.confirm(
                        "Reset all saved projects and restore the original projects?"
                      );

                    if (confirmed) {

                      setProjects(
                        initialProjects
                      );

                      localStorage.setItem(
                        "devops-projects",
                        JSON.stringify(
                          initialProjects
                        )
                      );

                    }

                  }}
                >
                  <Trash2 size={17} />
                  Reset Projects
                </button>

              </div>

            </div>

          </div>
        );

      default:
        return renderDashboard();
    }
  };

  /*
    -----------------------------
    PAGE TITLE
    -----------------------------
  */

  const getPageTitle = () => {

    switch (currentPage) {

      case "dashboard":
        return "Dashboard";

      case "projects":
        return "Projects";

      case "project-details":
        return "Project Details";

      case "technologies":
        return "Technologies";

      case "technology-details":
        return "Technology Details";

      case "pipeline":
        return "CI/CD Pipeline";

      case "settings":
        return "Settings";

      default:
        return "Dashboard";
    }
  };

  return (
    <div className="app-container">

      {/* MOBILE OVERLAY */}

      {mobileMenuOpen && (
        <div
          className="sidebar-overlay"
          onClick={() =>
            setMobileMenuOpen(false)
          }
        />
      )}

      {/* SIDEBAR */}

      <aside
        className={`sidebar ${
          mobileMenuOpen
            ? "sidebar-open"
            : ""
        }`}
      >

        <div className="sidebar-logo">

          <div className="logo-icon">
            🚀
          </div>

          <div>

            <strong>
              DevOps
            </strong>

            <span>
              ProjectHub
            </span>

          </div>

        </div>

        <nav className="sidebar-nav">

          {/* DASHBOARD */}

          <button
            className={`nav-item ${
              currentPage === "dashboard"
                ? "active"
                : ""
            }`}
            onClick={() =>
              navigateTo("dashboard")
            }
          >

            <LayoutDashboard size={19} />

            <span>
              Dashboard
            </span>

          </button>

          {/* PROJECTS */}

          <button
            className={`nav-item ${
              currentPage === "projects" ||
              currentPage ===
                "project-details"
                ? "active"
                : ""
            }`}
            onClick={() =>
              navigateTo("projects")
            }
          >

            <FolderKanban size={19} />

            <span>
              Projects
            </span>

          </button>

          {/* TECHNOLOGIES */}

          <button
            className={`nav-item ${
              currentPage ===
                "technologies" ||
              currentPage ===
                "technology-details"
                ? "active"
                : ""
            }`}
            onClick={() =>
              navigateTo("technologies")
            }
          >

            <Layers size={19} />

            <span>
              Technologies
            </span>

          </button>

          {/* CI/CD PIPELINE */}

          <button
            className={`nav-item ${
              currentPage === "pipeline"
                ? "active"
                : ""
            }`}
            onClick={() =>
              navigateTo("pipeline")
            }
          >

            <GitBranch size={19} />

            <span>
              CI/CD Pipeline
            </span>

          </button>

          {/* SETTINGS */}

          <button
            className={`nav-item ${
              currentPage === "settings"
                ? "active"
                : ""
            }`}
            onClick={() =>
              navigateTo("settings")
            }
          >

            <Settings size={19} />

            <span>
              Settings
            </span>

          </button>

        </nav>

        {/* SIDEBAR FOOTER */}

        <div className="sidebar-footer">

          <div className="sidebar-footer-icon">
            ⚡
          </div>

          <div>

            <strong>
              DevOps Journey
            </strong>

            <span>
              Keep learning 🚀
            </span>

          </div>

        </div>

      </aside>

      {/* MAIN */}

      <main className="main-area">

        {/* NAVBAR */}

        <header className="top-navbar">

          <button
            className="mobile-menu-button"
            onClick={() =>
              setMobileMenuOpen(
                !mobileMenuOpen
              )
            }
          >

            {mobileMenuOpen ? (
              <X size={21} />
            ) : (
              <Menu size={21} />
            )}

          </button>

          <div className="breadcrumb">

            <span>
              DevOps ProjectHub
            </span>

            <strong>
              /
            </strong>

            <span>
              {getPageTitle()}
            </span>

          </div>

          <div className="navbar-actions">

            <div className="navbar-search">

              <Search size={17} />

              <input
                placeholder="Search..."
              />

            </div>

            <button
              className="notification-button"
              title="Notifications"
            >

              <Bell size={18} />

              <span />

            </button>

          </div>

        </header>

        {/* CONTENT */}

        <div className="page-content">
          {renderPage()}
        </div>

      </main>

    </div>
  );
}

export default App;