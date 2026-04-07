import React from "react";
import "./Home.css";
import Button from "../components/ui/Button";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home-layout">
      <img src="/src/assets/banner.jpg" alt="Banner" className="home-banner" />
      <h1>Bem-vindo ao Task Manager</h1>
      <p>Organize suas tarefas de forma eficiente e fácil de usar.</p>
      <Link to="/add-tasks" className="home-link">
        <Button>Adicionar Tarefas</Button>
      </Link>
    </div>
  );
}

export default Home;
