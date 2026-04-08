import React, { createContext, useState, useEffect } from "react";

export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  const [editingTask, setEditingTask] = useState(null);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (description, category) => {
    if (!description.trim() || !category) return;

    const newTask = {
      id: Date.now().toString(),
      description: description.trim(),
      category,
      completed: false,
    };

    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  const removeTask = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  const editTask = (id, newDescription, newCategory) => {
    if (!newDescription.trim() || !newCategory) return;

    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, description: newDescription, category: newCategory } : task
      )
    );

    setEditingTask(null);
  };

  const startEditing = (task) => {
    setEditingTask(task);
  };

  const cancelEditing = () => {
    setEditingTask(null);
  };

  const toggleComplete = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) => (task.id === id ? { ...task, completed: !task.completed } : task))
    );
  };

  return (
    <TaskContext.Provider
      value={{
        tasks,
        addTask,
        removeTask,
        editTask,
        startEditing,
        cancelEditing,
        editingTask,
        toggleComplete,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};
