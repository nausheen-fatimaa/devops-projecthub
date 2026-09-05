import { useState } from "react";

import {
  Search,
  ArrowLeft,
  Terminal,
  Workflow,
  CheckCircle2,
} from "lucide-react";

import { technologies } from "../data/technologies";

import TechnologyCard from "./technologyCard";

function TechnologyExplorer() {
  const [selectedTechnology, setSelectedTechnology] =
    useState(null);

  const [searchTerm, setSearchTerm] =
    useState("");

  const filteredTechnologies =
    technologies.filter((technology) =>
      technology.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) ||
      technology.category
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
    );

  if (selectedTechnology) {
    return (
      <div className="technology-details-page">

        <button
          className="back-button"
          onClick={() =>
            setSelectedTechnology(null)
          }
        >
          <ArrowLeft size={17} />

          Back to Technologies
        </button>

        <section
          className={`technology-details-hero technology-${selectedTechnology.color}`}
        >
          <div className="technology-details-icon">
            {selectedTechnology.icon}
          </div>

          <div>
            <span className="section-label">
              {selectedTechnology.category}
            </span>

            <h1>
              {selectedTechnology.name}
            </h1>

            <p>
              {selectedTechnology.description}
            </p>
          </div>
        </section>

        <section className="technology-detail-card">

          <div className="card-heading">
            <div>
              <span className="section-label">
                SKILLS
              </span>

              <h2>
                What I Learned
              </h2>
            </div>
          </div>

          <div className="technology-learning-grid">

            {selectedTechnology.skills.map(
              (skill) => (
                <div
                  className="technology-learning-item"
                  key={skill}
                >
                  <CheckCircle2 size={18} />

                  <span>
                    {skill}
                  </span>
                </div>
              )
            )}

          </div>

        </section>

        <section className="technology-detail-card">

          <div className="card-heading">

            <div>
              <span className="section-label">
                COMMANDS
              </span>

              <h2>
                Important Commands
              </h2>
            </div>

            <Terminal size={24} />

          </div>

          <div className="command-list">

            {selectedTechnology.commands.map(
              (command) => (
                <div
                  className="command-item"
                  key={command}
                >
                  <code>
                    {command}
                  </code>
                </div>
              )
            )}

          </div>

        </section>

        <section className="technology-detail-card">

          <div className="card-heading">

            <div>
              <span className="section-label">
                DEVOPS WORKFLOW
              </span>

              <h2>
                How I Use It
              </h2>
            </div>

            <Workflow size={24} />

          </div>

          <div className="technology-flow">

            {selectedTechnology.workflow.map(
              (step, index) => (
                <div
                  className="technology-flow-step"
                  key={`${step}-${index}`}
                >

                  <div className="technology-flow-number">
                    {index + 1}
                  </div>

                  <strong>
                    {step}
                  </strong>

                  {index <
                    selectedTechnology.workflow
                      .length -
                      1 && (
                    <span className="technology-flow-arrow">
                      →
                    </span>
                  )}

                </div>
              )
            )}

          </div>

        </section>

      </div>
    );
  }

  return (
    <div className="technology-explorer-page">

      <div className="technology-explorer-header">

        <div>

          <span className="section-label">
            DEVOPS TOOLKIT
          </span>

          <h1>
            Technology Explorer
          </h1>

          <p>
            Explore the technologies, tools and
            DevOps skills used across my projects.
          </p>

        </div>

        <div className="technology-header-icon">
          🛠️
        </div>

      </div>

      <div className="technology-search">

        <Search size={20} />

        <input
          type="text"
          placeholder="Search Docker, Kubernetes, AWS..."
          value={searchTerm}
          onChange={(event) =>
            setSearchTerm(event.target.value)
          }
        />

      </div>

      <div className="technology-result-info">

        <strong>
          {filteredTechnologies.length}
        </strong>

        technologies available

      </div>

      <div className="technology-grid">

        {filteredTechnologies.map(
          (technology) => (
            <TechnologyCard
              key={technology.id}
              technology={technology}
              onClick={setSelectedTechnology}
            />
          )
        )}

      </div>

      {filteredTechnologies.length === 0 && (
        <div className="empty-technologies">
          <h2>
            No technology found
          </h2>

          <p>
            Try searching for Docker,
            Kubernetes, AWS or Jenkins.
          </p>
        </div>
      )}

    </div>
  );
}

export default TechnologyExplorer;