import { tokens } from "@asafarim/design-tokens";
import Section from "./Section";

export default function RadiiShowcase() {
  return (
    <Section title="Radii & Borders" description="Border radius and border width tokens">
      <div style={{ display: "flex", flexDirection: "column", gap: "var(--asm-space-6)" }}>
        <div>
          <h3 style={{ fontSize: "var(--asm-font-size-lg)", fontWeight: "var(--asm-font-weight-600)", marginBottom: "var(--asm-space-3)" }}>Border Radii</h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: "var(--asm-space-4)" }}>
            {Object.entries(tokens.shape.radii).map(([key, token]) => (
              <div key={key} style={{ textAlign: "center" }}>
                <div
                  style={{
                    background: "var(--asm-color-brand-primary-500)",
                    height: "100px",
                    borderRadius: token.value,
                    marginBottom: "var(--asm-space-2)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#fff",
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
        <div>
          <h3 style={{ fontSize: "var(--asm-font-size-lg)", fontWeight: "var(--asm-font-weight-600)", marginBottom: "var(--asm-space-3)" }}>Border Widths</h3>
          <div style={{ display: "flex", gap: "var(--asm-space-4)" }}>
            {Object.entries(tokens.shape.borders).map(([key, token]) => (
              <div key={key} style={{ flex: 1, textAlign: "center" }}>
                <div
                  style={{
                    background: "var(--asm-color-surface)",
                    padding: "var(--asm-space-4)",
                    border: `${token.value} solid var(--asm-color-brand-primary-500)`,
                    borderRadius: "var(--asm-radius-md)",
                    marginBottom: "var(--asm-space-2)"
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
