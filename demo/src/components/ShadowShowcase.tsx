import { tokens } from "@asafarim/design-tokens";
import Section from "./Section";

export default function ShadowShowcase() {
  return (
    <Section title="Shadows & Effects" description="Shadow elevations and blur effects">
      <div style={{ display: "flex", flexDirection: "column", gap: "var(--asm-space-6)" }}>
        <div>
          <h3 style={{ fontSize: "var(--asm-font-size-lg)", fontWeight: "var(--asm-font-weight-600)", marginBottom: "var(--asm-space-3)" }}>Shadows</h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "var(--asm-space-6)" }}>
            {Object.entries(tokens.effects.shadows).map(([key, token]) => (
              <div key={key} style={{ textAlign: "center" }}>
                <div
                  style={{
                    background: "var(--asm-color-surface)",
                    padding: "var(--asm-space-6)",
                    borderRadius: "var(--asm-radius-lg)",
                    boxShadow: token.value,
                    marginBottom: "var(--asm-space-2)"
                  }}
                >
                  <div style={{ fontWeight: "var(--asm-font-weight-600)" }}>{key}</div>
                </div>
                <code style={{ fontSize: "var(--asm-font-size-xs)", wordBreak: "break-all" }}>{token.value}</code>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h3 style={{ fontSize: "var(--asm-font-size-lg)", fontWeight: "var(--asm-font-weight-600)", marginBottom: "var(--asm-space-3)" }}>Blur Levels</h3>
          <div style={{ display: "flex", gap: "var(--asm-space-4)" }}>
            {Object.entries(tokens.effects.blur).map(([key, token]) => (
              <div key={key} style={{ flex: 1, textAlign: "center" }}>
                <div
                  style={{
                    background: "var(--asm-color-brand-primary-500)",
                    padding: "var(--asm-space-4)",
                    borderRadius: "var(--asm-radius-md)",
                    filter: `blur(${token.value})`,
                    marginBottom: "var(--asm-space-2)",
                    color: "#fff"
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
