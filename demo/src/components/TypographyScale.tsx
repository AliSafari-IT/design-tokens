import Section from "./Section";

export default function TypographyScale() {
  return (
    <Section title="Typography" description="Font families, weights, sizes, and headings">
      <div style={{ display: "flex", flexDirection: "column", gap: "var(--asm-space-6)" }}>
        <div>
          <h3 style={{ fontSize: "var(--asm-font-size-lg)", fontWeight: "var(--asm-font-weight-600)", marginBottom: "var(--asm-space-3)" }}>Font Families</h3>
          <div style={{ fontFamily: "var(--asm-font-family-primary)", marginBottom: "var(--asm-space-2)" }}>
            Primary: The quick brown fox jumps over the lazy dog
          </div>
          <div style={{ fontFamily: "var(--asm-font-family-mono)", marginBottom: "var(--asm-space-2)" }}>
            Mono: The quick brown fox jumps over the lazy dog
          </div>
        </div>
        <div>
          <h3 style={{ fontSize: "var(--asm-font-size-lg)", fontWeight: "var(--asm-font-weight-600)", marginBottom: "var(--asm-space-3)" }}>Headings</h3>
          <h1 style={{ fontSize: "var(--asm-font-size-6xl)", fontWeight: "var(--asm-font-weight-700)", lineHeight: "var(--asm-line-height-h1)", marginBottom: "var(--asm-space-2)" }}>H1 Heading</h1>
          <h2 style={{ fontSize: "var(--asm-font-size-5xl)", fontWeight: "var(--asm-font-weight-600)", lineHeight: "var(--asm-line-height-h2)", marginBottom: "var(--asm-space-2)" }}>H2 Heading</h2>
          <h3 style={{ fontSize: "var(--asm-font-size-4xl)", fontWeight: "var(--asm-font-weight-600)", lineHeight: "var(--asm-line-height-h3)", marginBottom: "var(--asm-space-2)" }}>H3 Heading</h3>
          <h4 style={{ fontSize: "var(--asm-font-size-3xl)", fontWeight: "var(--asm-font-weight-600)", lineHeight: "var(--asm-line-height-h4)", marginBottom: "var(--asm-space-2)" }}>H4 Heading</h4>
          <h5 style={{ fontSize: "var(--asm-font-size-2xl)", fontWeight: "var(--asm-font-weight-600)", lineHeight: "var(--asm-line-height-h5)", marginBottom: "var(--asm-space-2)" }}>H5 Heading</h5>
          <h6 style={{ fontSize: "var(--asm-font-size-xl)", fontWeight: "var(--asm-font-weight-600)", lineHeight: "var(--asm-line-height-h6)" }}>H6 Heading</h6>
        </div>
        <div>
          <h3 style={{ fontSize: "var(--asm-font-size-lg)", fontWeight: "var(--asm-font-weight-600)", marginBottom: "var(--asm-space-3)" }}>Size Scale</h3>
          <div style={{ fontSize: "var(--asm-font-size-xs)" }}>XS: The quick brown fox</div>
          <div style={{ fontSize: "var(--asm-font-size-sm)" }}>SM: The quick brown fox</div>
          <div style={{ fontSize: "var(--asm-font-size-md)" }}>MD: The quick brown fox</div>
          <div style={{ fontSize: "var(--asm-font-size-lg)" }}>LG: The quick brown fox</div>
          <div style={{ fontSize: "var(--asm-font-size-xl)" }}>XL: The quick brown fox</div>
        </div>
        <div>
          <h3 style={{ fontSize: "var(--asm-font-size-lg)", fontWeight: "var(--asm-font-weight-600)", marginBottom: "var(--asm-space-3)" }}>Weights</h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "var(--asm-space-2)" }}>
            <div style={{ fontWeight: 300 }}>Light (300)</div>
            <div style={{ fontWeight: 400 }}>Regular (400)</div>
            <div style={{ fontWeight: 500 }}>Medium (500)</div>
            <div style={{ fontWeight: 600 }}>Semibold (600)</div>
            <div style={{ fontWeight: 700 }}>Bold (700)</div>
          </div>
        </div>
      </div>
    </Section>
  );
}
