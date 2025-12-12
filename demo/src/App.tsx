import { useEffect } from "react";
import PlaygroundPage from "./pages/PlaygroundPage";

export default function App() {
  useEffect(() => {
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const currentTheme = document.documentElement.dataset.theme;
    
    if (!currentTheme) {
      document.documentElement.dataset.theme = prefersDark ? "dark" : "light";
    }
  }, []);

  return <PlaygroundPage />;
}
