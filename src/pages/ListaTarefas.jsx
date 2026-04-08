import React, { useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import Tarefa from "./Tarefa";
import "./ListaTarefas.css";

function ListaTarefas() {
  const { tasks } = useContext(TaskContext);

  return (
    <div className="task-list">
      {tasks.length === 0 ? (
        <p className="empty-message">Nenhuma tarefa adicionada ainda.</p>
      ) : (
        tasks.map((task) => (
          <Tarefa key={task.id} task={task} />
        ))
      )}
    </div>
  );
};

export default ListaTarefas;