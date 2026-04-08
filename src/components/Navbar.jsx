import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";
import "./Navbar.css";

function Navbar() {
  const { theme, toggleTheme } = useContext(ThemeContext);

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
            <NavLink to="/add-tasks">Adicionar Tarefas</NavLink>
          </li>
        </ul>
      </div>
      <label className="theme-toggle">
        <input type="checkbox" id="theme-toggle" checked={theme} onChange={toggleTheme} />
        <span className="slider"></span>
      </label>
    </nav>
  );
}

export default Navbar;
