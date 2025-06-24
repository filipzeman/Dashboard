import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = ({ onAddClick }) => {
  const { pathname } = useLocation();

  return (
    <div className="sidebar">
      <section>
        {/* <Link className="home-link  " to="/">
          <h2>🎂</h2>
        </Link> */}
        <button className="add-button" onClick={onAddClick}>
          ➕
        </button>
        <nav>
          <Link className={pathname === "/" ? "active" : ""} to="/">
            🦊 Dashboard
          </Link>
          <Link to="/events">📅 Events</Link>
          <Link to="/videos" className="...">
            🎬 Videos
          </Link>
          <Link to="/notion" className="...">
            🎓 Notion
          </Link>
          <Link
            className={pathname === "/settings" ? "active" : ""}
            to="/settings"
          >
            ⚙️ Settings
          </Link>
          <Link className={pathname === "/about" ? "active" : ""} to="/about">
            ⚡️ About
          </Link>
        </nav>
      </section>
      <footer>
        <span>Version 0.4</span>
      </footer>
    </div>
  );
};

export default Sidebar;
