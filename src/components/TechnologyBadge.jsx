import {
  Code2,
  Container,
  Cloud,
  Database,
  GitBranch,
  Globe,
  Server,
  Terminal,
  Boxes,
  Settings,
} from "lucide-react";

const technologyIcons = {
  Docker: Container,
  Kubernetes: Boxes,
  AWS: Cloud,
  Git: GitBranch,
  GitHub: GitBranch,
  Java: Code2,
  "Spring Boot": Server,
  "Gemini API": Settings,
  Maven: Settings,
  MySQL: Database,
  Linux: Terminal,
  Tomcat: Server,
  Jenkins: Settings,
  HTML: Globe,
  CSS: Code2,
  JavaScript: Code2,
  Pods: Boxes,
  Deployment: Boxes,
  Service: Server,
  Namespace: Boxes,
  kubectl: Terminal,
  "Docker Compose": Container,
  Dockerfile: Container,
};

function TechnologyBadge({ name }) {
  const Icon =
    technologyIcons[name] || Code2;

  return (
    <div className="technology-badge">

      <div className="technology-icon">
        <Icon size={18} />
      </div>

      <span>
        {name}
      </span>

    </div>
  );
}

export default TechnologyBadge;