import React, { useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import "./Tarefa.css";

function Tarefa ({ task }) {
  const { toggleComplete, removeTask, startEditing } = useContext(TaskContext);

  return (
    <div className="task-item">
      <div className="task-content">
        <input type="checkbox" checked={task.completed} onChange={() => toggleComplete(task.id)} />
        <span className={`task-description ${task.completed ? "completed" : ""}`}>
          {task.description}
        </span>
        <span className="task-category">{task.category}</span>
      </div>

      <div className="task-actions">
        <button className="edit-btn" onClick={() => startEditing(task)} disabled={task.completed}>
          ✏️ Editar
        </button>
        <button className="delete-btn" onClick={() => removeTask(task.id)}>
          🗑️ Excluir
        </button>
      </div>
    </div>
  );
};

export default Tarefa;
