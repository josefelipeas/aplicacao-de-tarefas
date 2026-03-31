import React, { createContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(false);

  function toggleTheme() {
    setTheme((prevTheme) => !prevTheme);
  }

  useEffect(() => {
    const root = document.documentElement;
    if (theme) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [theme])

  const value =  { theme, toggleTheme, setTheme };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};