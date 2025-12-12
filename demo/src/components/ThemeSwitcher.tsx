import type { ChangeEvent } from "react";

export default function ThemeSwitcher() {
  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const theme = e.target.value as "light" | "dark";
    document.documentElement.dataset.theme = theme;
    if (theme === "dark") {
      delete document.documentElement.dataset.contrast;
    }
  };

  const handleContrast = () => {
    const current = document.documentElement.dataset.contrast;
    if (current === "high") {
      delete document.documentElement.dataset.contrast;
      document.documentElement.dataset.theme = "light";
    } else {
      document.documentElement.dataset.contrast = "high";
      delete document.documentElement.dataset.theme;
    }
  };

  return (
    <div style={{ display: "flex", gap: "var(--asm-space-2)", alignItems: "center" }}>
      <label htmlFor="theme-select" style={{ fontSize: "var(--asm-font-size-sm)", fontWeight: "var(--asm-font-weight-500)" }}>
        Theme:
      </label>
      <select
        id="theme-select"
        onChange={handleChange}
        defaultValue="light"
        style={{
          padding: "var(--asm-space-2) var(--asm-space-3)",
          borderRadius: "var(--asm-radius-md)",
          border: `var(--asm-border-hairline) solid var(--asm-color-input-border)`,
          background: "var(--asm-color-input-bg)",
          color: "var(--asm-color-input-text)",
          fontSize: "var(--asm-font-size-sm)"
        }}
      >
        <option value="light">Light</option>
        <option value="dark">Dark</option>
      </select>
      <button
        onClick={handleContrast}
        style={{
          padding: "var(--asm-space-2) var(--asm-space-3)",
          borderRadius: "var(--asm-radius-md)",
          border: `var(--asm-border-hairline) solid var(--asm-color-input-border)`,
          background: "var(--asm-color-button-secondary-bg)",
          color: "var(--asm-color-button-secondary-text)",
          fontSize: "var(--asm-font-size-sm)",
          fontWeight: "var(--asm-font-weight-500)"
        }}
      >
        High Contrast
      </button>
    </div>
  );
}
