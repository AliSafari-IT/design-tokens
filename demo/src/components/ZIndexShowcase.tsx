import { tokens } from "@asafarim/design-tokens";
import Section from "./Section";

export default function ZIndexShowcase() {
  return (
    <Section title="Z-Index" description="Stacking context scale for layered UI">
      <div style={{ position: "relative", height: "300px", background: "var(--asm-color-surface-muted)", borderRadius: "var(--asm-radius-lg)", padding: "var(--asm-space-4)" }}>
        {Object.entries(tokens.zindex.scale).reverse().map(([key, token], index) => (
          <div
            key={key}
            style={{
              position: "absolute",
              top: `${20 + index * 25}px`,
              left: `${20 + index * 25}px`,
              zIndex: token.value,
              background: "var(--asm-color-surface)",
              padding: "var(--asm-space-3)",
              borderRadius: "var(--asm-radius-md)",
              boxShadow: "var(--asm-effect-shadow-md)",
              border: "var(--asm-border-hairline) solid var(--asm-color-border)",
              minWidth: "150px"
            }}
          >
            <div style={{ fontWeight: "var(--asm-font-weight-600)", marginBottom: "var(--asm-space-1)" }}>{key}</div>
            <code style={{ fontSize: "var(--asm-font-size-xs)" }}>z-index: {token.value}</code>
          </div>
        ))}
      </div>
    </Section>
  );
}
