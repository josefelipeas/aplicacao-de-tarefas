import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AddTarefas from "./pages/AddTarefas";
import { AppProvider } from "./context/AppProvider";

function App() {
  return (
    <AppProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-tasks" element={<AddTarefas />} />
        </Routes>
      </Router>
    </AppProvider>
  );
}

export default App;
