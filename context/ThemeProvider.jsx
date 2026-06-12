"use client";

import { createContext, useContext, useEffect, useSyncExternalStore } from "react";

const ThemeContext = createContext();
const THEME_STORAGE_KEY = "dark";
const THEME_CHANGE_EVENT = "theme-change";

function getThemeSnapshot() {
  return localStorage.getItem(THEME_STORAGE_KEY) === "true";
}

function getServerThemeSnapshot() {
  return false;
}

function subscribeToTheme(callback) {
  window.addEventListener("storage", callback);
  window.addEventListener(THEME_CHANGE_EVENT, callback);

  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener(THEME_CHANGE_EVENT, callback);
  };
}

export function useThemeContext() {
  return useContext(ThemeContext);
}

export default function ThemeProvider({ children }) {
  const isDark = useSyncExternalStore(
    subscribeToTheme,
    getThemeSnapshot,
    getServerThemeSnapshot
  );

  function toggleTheme() {
    localStorage.setItem(THEME_STORAGE_KEY, String(!isDark));
    window.dispatchEvent(new Event(THEME_CHANGE_EVENT));
  }

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
  }, [isDark]);

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
