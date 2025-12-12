import { useState } from "react";
import { tokens } from "@asafarim/design-tokens";
import Section from "./Section";

export default function MotionShowcase() {
  const [animate, setAnimate] = useState(false);

  return (
    <Section title="Motion" description="Duration, easing, and transition presets">
      <div style={{ display: "flex", flexDirection: "column", gap: "var(--asm-space-6)" }}>
        <div>
          <h3 style={{ fontSize: "var(--asm-font-size-lg)", fontWeight: "var(--asm-font-weight-600)", marginBottom: "var(--asm-space-3)" }}>Durations</h3>
          <div style={{ display: "flex", gap: "var(--asm-space-4)" }}>
            {Object.entries(tokens.motion.duration).map(([key, token]) => (
              <div key={key} style={{ flex: 1, textAlign: "center" }}>
                <div style={{ fontSize: "var(--asm-font-size-sm)", marginBottom: "var(--asm-space-2)", fontWeight: "var(--asm-font-weight-600)" }}>
                  {key}
                </div>
                <code style={{ fontSize: "var(--asm-font-size-xs)" }}>{token.value}</code>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h3 style={{ fontSize: "var(--asm-font-size-lg)", fontWeight: "var(--asm-font-weight-600)", marginBottom: "var(--asm-space-3)" }}>Animated Buttons</h3>
          <button
            onClick={() => setAnimate(!animate)}
            style={{
              padding: "var(--asm-space-3) var(--asm-space-6)",
              background: "var(--asm-color-button-primary-bg)",
              color: "var(--asm-color-button-primary-text)",
              border: "none",
              borderRadius: "var(--asm-radius-md)",
              fontSize: "var(--asm-font-size-md)",
              fontWeight: "var(--asm-font-weight-600)",
              cursor: "pointer",
              marginBottom: "var(--asm-space-4)"
            }}
          >
            Toggle Animation
          </button>
          <div style={{ display: "flex", gap: "var(--asm-space-4)" }}>
            <div
              style={{
                background: "var(--asm-color-brand-primary-500)",
                padding: "var(--asm-space-4)",
                borderRadius: "var(--asm-radius-md)",
                color: "#fff",
                transition: "var(--asm-transition-fade)",
                opacity: animate ? 0.3 : 1
              }}
            >
              Fade
            </div>
            <div
              style={{
                background: "var(--asm-color-semantic-success)",
                padding: "var(--asm-space-4)",
                borderRadius: "var(--asm-radius-md)",
                color: "#fff",
                transition: "var(--asm-transition-slide)",
                transform: animate ? "translateX(50px)" : "translateX(0)"
              }}
            >
              Slide
            </div>
            <div
              style={{
                background: "var(--asm-color-semantic-info)",
                padding: "var(--asm-space-4)",
                borderRadius: "var(--asm-radius-md)",
                color: "#fff",
                transition: "var(--asm-transition-scale)",
                transform: animate ? "scale(1.2)" : "scale(1)"
              }}
            >
              Scale
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
