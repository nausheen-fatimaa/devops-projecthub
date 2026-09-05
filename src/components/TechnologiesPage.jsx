import React, {
  useState,
} from "react";

import {
  Search,
  Layers,
  ArrowRight,
} from "lucide-react";

import { technologies } from "../data/technologies";

function TechnologiesPage({
  onTechnologySelect,
}) {
  const [search, setSearch] = useState("");

  const filteredTechnologies =
    technologies.filter((technology) => {
      const text =
        `${technology.name} ${technology.category}`.toLowerCase();

      return text.includes(
        search.toLowerCase()
      );
    });

  return (
    <div className="technologies-page">

      <div className="technologies-header">

        <div>

          <span className="section-label">
            DEVOPS TOOLKIT
          </span>

          <h1>
            Technologies
          </h1>

          <p>
            Explore the DevOps tools and
            technologies used across my projects.
          </p>

        </div>

        <div className="technologies-header-icon">
          <Layers size={42} />
        </div>

      </div>

      <div className="technology-search">

        <Search size={18} />

        <input
          type="text"
          placeholder="Search technologies..."
          value={search}
          onChange={(event) =>
            setSearch(event.target.value)
          }
        />

      </div>

      <div className="technology-result-count">

        Showing{" "}
        <strong>
          {filteredTechnologies.length}
        </strong>{" "}
        technologies

      </div>

      <div className="technologies-grid">

        {filteredTechnologies.map(
          (technology) => (
            <div
              className={`technology-card technology-${technology.color}`}
              key={technology.id}
              onClick={() =>
                onTechnologySelect(
                  technology
                )
              }
            >

              <div className="technology-card-top">

                <div className="technology-card-icon">
                  {technology.icon}
                </div>

                <span className="technology-category">
                  {technology.category}
                </span>

              </div>

              <h2>
                {technology.name}
              </h2>

              <p>
                {technology.description}
              </p>

              <div className="technology-card-skills">

                {technology.skills
                  .slice(0, 4)
                  .map((skill) => (
                    <span key={skill}>
                      {skill}
                    </span>
                  ))}

              </div>

              <div className="technology-card-footer">

                <span>
                  Explore Technology
                </span>

                <ArrowRight size={18} />

              </div>

            </div>
          )
        )}

      </div>

      {filteredTechnologies.length === 0 && (
        <div className="empty-technologies">

          <h2>
            No technologies found
          </h2>

          <p>
            Try another search term.
          </p>

        </div>
      )}

    </div>
  );
}

export default TechnologiesPage;