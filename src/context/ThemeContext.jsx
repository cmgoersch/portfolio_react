import { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext(null);

const THEME_KEYS = ['default', 'purple', 'ocean', 'sunset'];

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    // Wähle ein zufälliges Theme, das sich vom vorherigen unterscheidet (falls vorhanden)
    let previous = null;
    try {
      const stored = window.localStorage.getItem('colorTheme');
      if (stored && THEME_KEYS.includes(stored)) {
        previous = stored;
      }
    } catch (e) {
      // ignore storage errors
    }

    let choices = THEME_KEYS;
    if (previous && THEME_KEYS.length > 1) {
      choices = THEME_KEYS.filter((key) => key !== previous);
    }

    const randomTheme = choices[Math.floor(Math.random() * choices.length)];
    setTheme(randomTheme);
    document.documentElement.setAttribute('data-theme', randomTheme);
  }, []);

  useEffect(() => {
    if (!theme) return;
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
