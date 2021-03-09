import React, { useState } from 'react';
import './components/Board'
import Board from './components/Board';
import ThemeToggle from './components/ThemeToggle'
import BodyContainer from './components/BodyContainer'

export const ThemeContext = React.createContext();

const themes = {
  light: {
    background: "#efd9a0"
  },
  dark: {
    background: "#222222"
  }
};

function App() {
  const [theme, setTheme] = useState('light');

  function toggleTheme() {
    if (theme === 'light') {
        setTheme('dark');
    } else {
        setTheme('light');
    }
  }

  return (
    <ThemeContext.Provider value={themes[theme]}>
      <BodyContainer theme={theme}>
        <ThemeToggle toggleTheme={toggleTheme} theme={theme}></ThemeToggle>
        <Board></Board>
      </BodyContainer>
    </ThemeContext.Provider>
  );
}

export default App;
