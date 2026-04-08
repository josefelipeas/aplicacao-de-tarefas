import React, { useState, useEffect, useContext, use } from "react";
import { TaskContext } from "../context/TaskContext";
import ListaTarefas from "./ListaTarefas";
import "./AddTarefas.css";
import Button from "../components/ui/Button";
import Input from "../components/ui/Input";

function AddTarefas() {
  const { addTask, editTask, editingTask, cancelEditing } = useContext(TaskContext);
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");

  useEffect(() => {
    if (editingTask) {
      setDescription(editingTask.description);
      setCategory(editingTask.category);
    } else {
      setDescription("");
      setCategory("");
    }
  }, [editingTask]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editingTask) {
      editTask(editingTask.id, description, category);
    } else {
      addTask(description, category);
    }

    setDescription("");
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="task-form">
        <div className="form-field">
          <label htmlFor="descricao" className="label">
            Descrição
            <span className="required">*</span>
          </label>
          <input
            type="text"
            id="descricao"
            className="input"
            placeholder="Descrição"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div className="form-field">
          <label htmlFor="categoria" className="label">
            Categoria
            <span className="required">*</span>
          </label>
          <select
            id="categoria"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          >
            <option value="">Selecione uma categoria</option>
            <option value="trabalho">Trabalho</option>
            <option value="pessoal">Pessoal</option>
            <option value="estudo">Estudo</option>
          </select>
        </div>
        <Button outline type="submit" className={editingTask ? "save-btn" : ""}>
          {editingTask ? "💾 Salvar Alterações" : "➕ Adicionar Tarefa"}
        </Button>

        {editingTask && (
          <Button outline type="button" onClick={cancelEditing} className="cancel-btn">
            ❌ Cancelar
          </Button>
        )}
      </form>
      <ListaTarefas />
    </>
  );
}

export default AddTarefas;
