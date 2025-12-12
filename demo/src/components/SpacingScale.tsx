import { tokens } from "@asafarim/design-tokens";
import Section from "./Section";

export default function SpacingScale() {
  return (
    <Section title="Spacing" description="Spacing scale, layout tokens, and density modes">
      <div style={{ display: "flex", flexDirection: "column", gap: "var(--asm-space-6)" }}>
        <div>
          <h3 style={{ fontSize: "var(--asm-font-size-lg)", fontWeight: "var(--asm-font-weight-600)", marginBottom: "var(--asm-space-3)" }}>Spacing Scale</h3>
          <div style={{ display: "flex", flexDirection: "column", gap: "var(--asm-space-2)" }}>
            {Object.entries(tokens.spacing.scale).map(([key, token]) => (
              <div key={key} style={{ display: "flex", alignItems: "center", gap: "var(--asm-space-4)" }}>
                <code style={{ minWidth: "80px" }}>{key}</code>
                <div style={{ background: "var(--asm-color-brand-primary-500)", height: "24px", width: token.value }} />
                <span style={{ fontSize: "var(--asm-font-size-sm)", color: "var(--asm-color-text-muted)" }}>{token.value}</span>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h3 style={{ fontSize: "var(--asm-font-size-lg)", fontWeight: "var(--asm-font-weight-600)", marginBottom: "var(--asm-space-3)" }}>Margin vs Padding</h3>
          <div style={{ display: "flex", gap: "var(--asm-space-4)" }}>
            <div style={{ border: "2px dashed var(--asm-color-border)", padding: "var(--asm-space-4)" }}>
              <div style={{ background: "var(--asm-color-semantic-info)", padding: "var(--asm-space-4)", color: "#fff" }}>
                Padding: var(--asm-space-4)
              </div>
            </div>
            <div style={{ border: "2px dashed var(--asm-color-border)" }}>
              <div style={{ background: "var(--asm-color-semantic-success)", margin: "var(--asm-space-4)", padding: "var(--asm-space-2)", color: "#fff" }}>
                Margin: var(--asm-space-4)
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
