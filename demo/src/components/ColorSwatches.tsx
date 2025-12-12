import { tokens } from "@asafarim/design-tokens";
import Section from "./Section";

const swatchStyle = (color: string) => ({
  background: color,
  height: "80px",
  borderRadius: "var(--asm-radius-md)",
  border: "var(--asm-border-hairline) solid var(--asm-color-border)",
  display: "flex",
  flexDirection: "column" as const,
  justifyContent: "flex-end",
  padding: "var(--asm-space-3)",
  fontSize: "var(--asm-font-size-xs)",
  fontFamily: "var(--asm-font-family-mono)"
});

export default function ColorSwatches() {
  return (
    <Section title="Colors" description="Brand, neutral, semantic, accent, overlay, and gradient tokens">
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: "var(--asm-space-4)" }}>
        <div>
          <h3 style={{ fontSize: "var(--asm-font-size-lg)", fontWeight: "var(--asm-font-weight-600)", marginBottom: "var(--asm-space-3)" }}>Brand</h3>
          {Object.entries(tokens.color.brand).map(([key, token]) => (
            <div key={key} style={{ ...swatchStyle(token.value), marginBottom: "var(--asm-space-2)" }}>
              <div style={{ background: "rgba(0,0,0,0.7)", color: "#fff", padding: "4px", borderRadius: "4px" }}>
                <div>{key}</div>
                <div>{token.value}</div>
              </div>
            </div>
          ))}
        </div>
        <div>
          <h3 style={{ fontSize: "var(--asm-font-size-lg)", fontWeight: "var(--asm-font-weight-600)", marginBottom: "var(--asm-space-3)" }}>Neutral</h3>
          {Object.entries(tokens.color.neutral).map(([key, token]) => (
            <div key={key} style={{ ...swatchStyle(token.value), marginBottom: "var(--asm-space-2)" }}>
              <div style={{ background: "rgba(0,0,0,0.7)", color: "#fff", padding: "4px", borderRadius: "4px" }}>
                <div>{key}</div>
                <div>{token.value}</div>
              </div>
            </div>
          ))}
        </div>
        <div>
          <h3 style={{ fontSize: "var(--asm-font-size-lg)", fontWeight: "var(--asm-font-weight-600)", marginBottom: "var(--asm-space-3)" }}>Semantic</h3>
          {Object.entries(tokens.color.semantic).map(([key, token]) => (
            <div key={key} style={{ ...swatchStyle(token.value), marginBottom: "var(--asm-space-2)" }}>
              <div style={{ background: "rgba(0,0,0,0.7)", color: "#fff", padding: "4px", borderRadius: "4px" }}>
                <div>{key}</div>
                <div>{token.value}</div>
              </div>
            </div>
          ))}
        </div>
        <div>
          <h3 style={{ fontSize: "var(--asm-font-size-lg)", fontWeight: "var(--asm-font-weight-600)", marginBottom: "var(--asm-space-3)" }}>Accent</h3>
          {Object.entries(tokens.color.accent).map(([key, token]) => (
            <div key={key} style={{ ...swatchStyle(token.value), marginBottom: "var(--asm-space-2)" }}>
              <div style={{ background: "rgba(0,0,0,0.7)", color: "#fff", padding: "4px", borderRadius: "4px" }}>
                <div>{key}</div>
                <div>{token.value}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
