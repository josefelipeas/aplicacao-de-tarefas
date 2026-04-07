import React from "react";
import "./AddTarefas.css";
import Button from "../components/ui/Button";
import Input from "../components/ui/Input";

function AddTarefas() {
  return (
    <div>
      <form className="task-form">
        <div className="form-field">
          <label htmlFor="descricao" className="label">
            Descrição
            <span className="required">*</span>
          </label>
          <input id="descricao" className="input" placeholder="Descrição" required />
        </div>
        <div className="form-field">
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
        </div>
        <Button outline type="submit">Adicionar Tarefa</Button>
      </form>
    </div>
  );
}

export default AddTarefas;
