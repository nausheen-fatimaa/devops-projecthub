import {
  FolderKanban,
  CheckCircle2,
  TrendingUp,
  ListTodo,
} from "lucide-react";

function StatCard({ type, title, value, description }) {
  const icons = {
    projects: FolderKanban,
    completed: CheckCircle2,
    progress: TrendingUp,
    tasks: ListTodo,
  };

  const Icon = icons[type];

  return (
    <div className="stat-card">
      <div className={`stat-icon ${type}`}>
        <Icon size={21} />
      </div>

      <div className="stat-content">
        <span>{title}</span>

        <div className="stat-value-row">
          <h3>{value}</h3>

          {type === "progress" && (
            <span className="growth-badge">+12%</span>
          )}
        </div>

        <p>{description}</p>
      </div>
    </div>
  );
}

export default StatCard;