import {
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

function TechnologyCard({
  technology,
  onClick,
}) {
  return (
    <div
      className={`technology-card technology-${technology.color}`}
      onClick={() => onClick(technology)}
    >
      <div className="technology-card-top">
        <div className="technology-main-icon">
          {technology.icon}
        </div>

        <span className="technology-category">
          {technology.category}
        </span>
      </div>

      <h3>
        {technology.name}
      </h3>

      <p>
        {technology.description}
      </p>

      <div className="technology-skills">
        {technology.skills
          .slice(0, 4)
          .map((skill) => (
            <span key={skill}>
              <CheckCircle2 size={13} />
              {skill}
            </span>
          ))}
      </div>

      <div className="technology-card-footer">
        <strong>
          Explore Technology
        </strong>

        <ArrowRight size={18} />
      </div>
    </div>
  );
}

export default TechnologyCard;