import React from "react";
import "./AddTarefas.css";
import Button from "../components/ui/Button"; 
import Input from "../components/ui/Input";

function AddTarefas() {
  return (
    <div>
      <h2>Adicione uma tarefa</h2>
      <form className="task-form">
        <Input label="Descrição" placeholder="Descrição" required />
        <label htmlFor="categoria" className="label">
          Categoria
          <span className="required">*</span>
        </label>
        <select id="categoria">
          <option value="">Selecione uma categoria</option>
          <option value="trabalho">Trabalho</option>
          <option value="pessoal">Pessoal</option>
          <option value="estudo">Estudo</option>
        </select>
        <Button type="submit">Adicionar Tarefa</Button>
      </form>
    </div>
  );
}

export default AddTarefas;