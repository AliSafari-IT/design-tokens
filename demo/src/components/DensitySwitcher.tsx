import type { ChangeEvent } from "react";

export default function DensitySwitcher() {
  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const density = e.target.value;
    if (density === "default") {
      delete document.documentElement.dataset.density;
    } else {
      document.documentElement.dataset.density = density;
    }
  };

  return (
    <div style={{ display: "flex", gap: "var(--asm-space-2)", alignItems: "center" }}>
      <label htmlFor="density-select" style={{ fontSize: "var(--asm-font-size-sm)", fontWeight: "var(--asm-font-weight-500)" }}>
        Density:
      </label>
      <select
        id="density-select"
        onChange={handleChange}
        defaultValue="default"
        style={{
          padding: "var(--asm-space-2) var(--asm-space-3)",
          borderRadius: "var(--asm-radius-md)",
          border: `var(--asm-border-hairline) solid var(--asm-color-input-border)`,
          background: "var(--asm-color-input-bg)",
          color: "var(--asm-color-input-text)",
          fontSize: "var(--asm-font-size-sm)"
        }}
      >
        <option value="default">Default</option>
        <option value="compact">Compact</option>
        <option value="comfortable">Comfortable</option>
      </select>
    </div>
  );
}
