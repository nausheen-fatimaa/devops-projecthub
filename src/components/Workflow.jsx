import {
  Lightbulb,
  Code2,
  GitBranch,
  Hammer,
  TestTube2,
  Container,
  Cloud,
} from "lucide-react";

function Workflow() {
  const workflow = [
    {
      name: "Plan",
      icon: Lightbulb,
      color: "purple",
    },
    {
      name: "Code",
      icon: Code2,
      color: "blue",
    },
    {
      name: "Git",
      icon: GitBranch,
      color: "pink",
    },
    {
      name: "Build",
      icon: Hammer,
      color: "orange",
    },
    {
      name: "Test",
      icon: TestTube2,
      color: "green",
    },
    {
      name: "Docker",
      icon: Container,
      color: "cyan",
    },
    {
      name: "Deploy",
      icon: Cloud,
      color: "yellow",
    },
  ];

  return (
    <div className="workflow-card">
      <div className="section-heading">
        <div>
          <span className="section-label">
            DEVOPS LIFECYCLE
          </span>

          <h2>Project Workflow</h2>

          <p>
            From development to production deployment
          </p>
        </div>

        <button className="view-button">
          View workflow
        </button>
      </div>

      <div className="workflow">
        {workflow.map((step, index) => {
          const Icon = step.icon;

          return (
            <div
              className="workflow-step-wrapper"
              key={step.name}
            >
              <div className={`workflow-step ${step.color}`}>
                <div className="workflow-icon">
                  <Icon size={20} />
                </div>

                <span>{step.name}</span>
              </div>

              {index !== workflow.length - 1 && (
                <div className="workflow-line"></div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Workflow;