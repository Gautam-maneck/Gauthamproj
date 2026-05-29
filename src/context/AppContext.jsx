import React, { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [count, setCount] = useState(0);
  const [theme, setTheme] = useState('dark');

  const increment = () => setCount((prev) => prev + 1);
  const toggleTheme = () => setTheme((prev) => prev === 'dark' ? 'light' : 'dark');

  const value = {
    count,
    increment,
    theme,
    toggleTheme
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};
