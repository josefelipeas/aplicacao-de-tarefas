import React from "react";
import { ThemeProvider } from "./ThemeProvider";
import { TaskProvider } from "./TaskContext";

export const AppProvider = ({ children }) => {
  return (
    <ThemeProvider>
      <TaskProvider>
        {children}
      </TaskProvider>
    </ThemeProvider>
  );
};
