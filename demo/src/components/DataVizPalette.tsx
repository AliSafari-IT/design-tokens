import { tokens } from "@asafarim/design-tokens";
import Section from "./Section";

export default function DataVizPalette() {
  const series = Object.entries(tokens.color.dataViz).filter(([key]) => key.startsWith("series"));
  const other = Object.entries(tokens.color.dataViz).filter(([key]) => !key.startsWith("series"));

  return (
    <Section title="Data Visualization" description="Chart series colors and data viz tokens">
      <div style={{ display: "flex", flexDirection: "column", gap: "var(--asm-space-6)" }}>
        <div>
          <h3 style={{ fontSize: "var(--asm-font-size-lg)", fontWeight: "var(--asm-font-weight-600)", marginBottom: "var(--asm-space-3)" }}>Series Colors (1-12)</h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(120px, 1fr))", gap: "var(--asm-space-3)" }}>
            {series.map(([key, token]) => (
              <div key={key} style={{ textAlign: "center" }}>
                <div
                  style={{
                    background: token.value,
                    height: "60px",
                    borderRadius: "var(--asm-radius-md)",
                    marginBottom: "var(--asm-space-2)",
                    border: "var(--asm-border-hairline) solid var(--asm-color-border)"
                  }}
                />
                <div style={{ fontSize: "var(--asm-font-size-sm)", fontWeight: "var(--asm-font-weight-600)" }}>{key}</div>
                <code style={{ fontSize: "var(--asm-font-size-xs)" }}>{token.value}</code>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h3 style={{ fontSize: "var(--asm-font-size-lg)", fontWeight: "var(--asm-font-weight-600)", marginBottom: "var(--asm-space-3)" }}>Gridline, Axis & Tooltip</h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "var(--asm-space-4)" }}>
            {other.map(([key, token]) => (
              <div key={key} style={{ textAlign: "center" }}>
                <div
                  style={{
                    background: token.value,
                    height: "60px",
                    borderRadius: "var(--asm-radius-md)",
                    marginBottom: "var(--asm-space-2)",
                    border: "var(--asm-border-hairline) solid var(--asm-color-border)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: key.includes("Text") ? "inherit" : "#fff",
                    fontWeight: "var(--asm-font-weight-600)"
                  }}
                >
                  {key}
                </div>
                <code style={{ fontSize: "var(--asm-font-size-xs)" }}>{token.value}</code>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
