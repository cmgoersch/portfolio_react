import { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext(null);

const THEME_KEYS = ['default', 'purple', 'ocean', 'sunset'];

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('default');

  useEffect(() => {
    // Choose a random theme on each page load
    const randomTheme = THEME_KEYS[Math.floor(Math.random() * THEME_KEYS.length)];
    setTheme(randomTheme);
    document.documentElement.setAttribute('data-theme', randomTheme);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    try {
      window.localStorage.setItem('colorTheme', theme);
    } catch (e) {
      // ignore
    }
  }, [theme]);

  const value = {
    theme,
    setTheme,
    themes: THEME_KEYS,
  };

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return ctx;
};
