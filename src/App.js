import React, { useState } from 'react';
import './components/Board'
import Board from './components/Board';
import ThemeToggle from './components/ThemeToggle'
import ThemeContainer from './components/ThemeContainer'

export const ThemeContext = React.createContext();

const themes = {
  light: {
    squareBackground: "#efd9a0",
    themeContainerBackground: "#ede3e3",
    themeToggleBackground: '#efd9a0',
    themeToggleTransition: "translateX(0%)"
  },
  dark: {
    squareBackground: "#222",
    themeContainerBackground: "#474545",
    themeToggleBackground: '#222',
    themeToggleTransition: "translateX(100%)"
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
      <ThemeContainer>
        <ThemeToggle toggleTheme={toggleTheme}></ThemeToggle>
        <Board></Board>
      </ThemeContainer>
    </ThemeContext.Provider>
  );
}

export default App;
