import {
  Home,
  FolderKanban,
  Boxes,
  GitBranch,
  Network,
  BarChart3,
  Settings,
  Rocket,
  BookOpen,
  X,
} from "lucide-react";

function Sidebar({ activePage, setActivePage, mobileOpen, setMobileOpen }) {
  const menuItems = [
    {
      name: "Dashboard",
      icon: Home,
    },
    {
      name: "Projects",
      icon: FolderKanban,
    },
    {
      name: "Technologies",
      icon: Boxes,
    },
    {
      name: "Workflows",
      icon: GitBranch,
    },
    {
      name: "Architecture",
      icon: Network,
    },
    {
      name: "Analytics",
      icon: BarChart3,
    },
  ];

  return (
    <>
      {mobileOpen && (
        <div
          className="sidebar-overlay"
          onClick={() => setMobileOpen(false)}
        />
      )}

      <aside className={`sidebar ${mobileOpen ? "sidebar-mobile-open" : ""}`}>
        <div className="sidebar-header">
          <div className="logo-container">
            <div className="logo-icon">
              <Rocket size={22} />
            </div>

            <div>
              <h2>ProjectHub</h2>
              <span>DevOps Workspace</span>
            </div>
          </div>
          <button
            onClick={() => setCurrentPage("projects")}
          >
        Projects
        </button>
          <button
            className="mobile-close"
            onClick={() => setMobileOpen(false)}
          >
            <X size={20} />
          </button>
        </div>

        <div className="workspace">
          <div className="workspace-icon">🚀</div>

          <div>
            <strong>DevOps Workspace</strong>
            <span>Personal Projects</span>
          </div>
        </div>

        <div className="menu-section">
          <p className="menu-title">WORKSPACE</p>

          {menuItems.map((item) => {
            const Icon = item.icon;

            return (
              <button
                key={item.name}
                className={`menu-item ${
                  activePage === item.name ? "active" : ""
                }`}
                onClick={() => {
                  setActivePage(item.name);
                  setMobileOpen(false);
                }}
              >
                <Icon size={19} />
                <span>{item.name}</span>
              </button>
            );
          })}
        </div>

        <div className="menu-section">
          <p className="menu-title">RESOURCES</p>

          <button
            className={`menu-item ${
              activePage === "Documentation" ? "active" : ""
            }`}
            onClick={() => setActivePage("Documentation")}
          >
            <BookOpen size={19} />
            <span>Documentation</span>
          </button>

          <button
            className={`menu-item ${
              activePage === "Settings" ? "active" : ""
            }`}
            onClick={() => setActivePage("Settings")}
          >
            <Settings size={19} />
            <span>Settings</span>
          </button>
        </div>

        <div className="sidebar-bottom">
          <div className="profile-card">
            <div className="profile-avatar">NF</div>

            <div className="profile-info">
              <strong>Nausheen</strong>
              <span>DevOps Learner</span>
            </div>

            <div className="online-dot"></div>
          </div>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;