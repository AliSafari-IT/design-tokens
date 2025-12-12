import Section from "./Section";

export default function UiStatesShowcase() {
  return (
    <Section title="UI States" description="Buttons, inputs, and interactive states">
      <div style={{ display: "flex", flexDirection: "column", gap: "var(--asm-space-6)" }}>
        <div>
          <h3 style={{ fontSize: "var(--asm-font-size-lg)", fontWeight: "var(--asm-font-weight-600)", marginBottom: "var(--asm-space-3)" }}>Buttons</h3>
          <div style={{ display: "flex", gap: "var(--asm-space-3)", flexWrap: "wrap" }}>
            <button
              style={{
                padding: "var(--asm-space-3) var(--asm-space-6)",
                background: "var(--asm-color-button-primary-bg)",
                color: "var(--asm-color-button-primary-text)",
                border: "none",
                borderRadius: "var(--asm-radius-md)",
                fontSize: "var(--asm-font-size-md)",
                fontWeight: "var(--asm-font-weight-600)",
                cursor: "pointer"
              }}
            >
              Primary
            </button>
            <button
              style={{
                padding: "var(--asm-space-3) var(--asm-space-6)",
                background: "var(--asm-color-button-secondary-bg)",
                color: "var(--asm-color-button-secondary-text)",
                border: "var(--asm-border-hairline) solid var(--asm-color-border)",
                borderRadius: "var(--asm-radius-md)",
                fontSize: "var(--asm-font-size-md)",
                fontWeight: "var(--asm-font-weight-600)",
                cursor: "pointer"
              }}
            >
              Secondary
            </button>
            <button
              style={{
                padding: "var(--asm-space-3) var(--asm-space-6)",
                background: "transparent",
                color: "var(--asm-color-text)",
                border: "none",
                borderRadius: "var(--asm-radius-md)",
                fontSize: "var(--asm-font-size-md)",
                fontWeight: "var(--asm-font-weight-600)",
                cursor: "pointer"
              }}
            >
              Ghost
            </button>
            <button
              style={{
                padding: "var(--asm-space-3) var(--asm-space-6)",
                background: "var(--asm-color-button-destructive-bg)",
                color: "var(--asm-color-button-destructive-text)",
                border: "none",
                borderRadius: "var(--asm-radius-md)",
                fontSize: "var(--asm-font-size-md)",
                fontWeight: "var(--asm-font-weight-600)",
                cursor: "pointer"
              }}
            >
              Destructive
            </button>
            <button
              disabled
              style={{
                padding: "var(--asm-space-3) var(--asm-space-6)",
                background: "var(--asm-color-button-disabled-bg)",
                color: "var(--asm-color-button-disabled-text)",
                border: "none",
                borderRadius: "var(--asm-radius-md)",
                fontSize: "var(--asm-font-size-md)",
                fontWeight: "var(--asm-font-weight-600)",
                cursor: "not-allowed"
              }}
            >
              Disabled
            </button>
          </div>
        </div>
        <div>
          <h3 style={{ fontSize: "var(--asm-font-size-lg)", fontWeight: "var(--asm-font-weight-600)", marginBottom: "var(--asm-space-3)" }}>Inputs</h3>
          <div style={{ display: "flex", flexDirection: "column", gap: "var(--asm-space-3)", maxWidth: "400px" }}>
            <input
              type="text"
              placeholder="Default input"
              style={{
                padding: "var(--asm-space-3)",
                background: "var(--asm-color-input-bg)",
                color: "var(--asm-color-input-text)",
                border: `var(--asm-border-hairline) solid var(--asm-color-input-border)`,
                borderRadius: "var(--asm-radius-md)",
                fontSize: "var(--asm-font-size-md)",
                outline: "none"
              }}
            />
            <input
              type="text"
              placeholder="Focus (click me)"
              style={{
                padding: "var(--asm-space-3)",
                background: "var(--asm-color-input-bg)",
                color: "var(--asm-color-input-text)",
                border: `var(--asm-border-thin) solid var(--asm-color-input-border-focus)`,
                borderRadius: "var(--asm-radius-md)",
                fontSize: "var(--asm-font-size-md)",
                outline: `var(--asm-ui-focus-ring-width) solid var(--asm-color-focus-ring)`,
                outlineOffset: "var(--asm-ui-focus-ring-offset)"
              }}
            />
            <input
              type="text"
              placeholder="Error state"
              style={{
                padding: "var(--asm-space-3)",
                background: "var(--asm-color-input-bg)",
                color: "var(--asm-color-input-text)",
                border: `var(--asm-border-hairline) solid var(--asm-color-input-error-border)`,
                borderRadius: "var(--asm-radius-md)",
                fontSize: "var(--asm-font-size-md)",
                outline: "none"
              }}
            />
            <input
              type="text"
              placeholder="Success state"
              style={{
                padding: "var(--asm-space-3)",
                background: "var(--asm-color-input-bg)",
                color: "var(--asm-color-input-text)",
                border: `var(--asm-border-hairline) solid var(--asm-color-input-success-border)`,
                borderRadius: "var(--asm-radius-md)",
                fontSize: "var(--asm-font-size-md)",
                outline: "none"
              }}
            />
            <input
              type="text"
              placeholder="Disabled"
              disabled
              style={{
                padding: "var(--asm-space-3)",
                background: "var(--asm-color-button-disabled-bg)",
                color: "var(--asm-color-button-disabled-text)",
                border: `var(--asm-border-hairline) solid var(--asm-color-border)`,
                borderRadius: "var(--asm-radius-md)",
                fontSize: "var(--asm-font-size-md)",
                cursor: "not-allowed"
              }}
            />
          </div>
        </div>
      </div>
    </Section>
  );
}
