import {
  Search,
  Bell,
  Menu,
  Plus,
  Command,
} from "lucide-react";

function Navbar({ setMobileOpen }) {
  return (
    <header className="navbar">
      <div className="navbar-left">
        <button
          className="mobile-menu-button"
          onClick={() => setMobileOpen(true)}
        >
          <Menu size={22} />
        </button>

        <div className="breadcrumb">
          <span>Workspace</span>
          <span>/</span>
          <strong>Dashboard</strong>
        </div>
      </div>

      <div className="navbar-right">
        <div className="search-box">
          <Search size={18} />

          <input
            type="text"
            placeholder="Search projects..."
          />

          <div className="search-shortcut">
            <Command size={12} />
            K
          </div>
        </div>

        <button className="icon-button">
          <Bell size={19} />
          <span className="notification-dot"></span>
        </button>

        <button className="add-button">
          <Plus size={18} />
          <span>New Project</span>
        </button>
      </div>
    </header>
  );
}

export default Navbar;