import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div>
        <NavLink to="/" className="nav-brand">
          <img src="/src/assets/logo.png" alt="Logo" className="logo" />
        </NavLink>
        <ul>
          <li className="nav-item">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/tasks">Tarefas</NavLink>
          </li>
        </ul>
      </div>
      <label className="theme-toggle">
        <input type="checkbox" id="theme-toggle" />
        <span className="slider"></span>
      </label>
    </nav>
  );
}

export default Navbar;
