import Section from "./Section";
/*
  --asm-font-family-barriecito: "Barriecito", cursive, sans-serif;
  --asm-font-family-borel: "Borel", cursive, sans-serif;
  --asm-font-family-dynapuff: "DynaPuff", cursive, sans-serif;
  --asm-font-family-gabarito: "Gabarito", sans-serif;
  --asm-font-family-kranky: "Kranky", cursive, sans-serif;
  --asm-font-family-macondo: "Macondo", cursive, sans-serif;
  --asm-font-family-playpen-sans: "Playpen Sans", cursive, sans-serif;
  --asm-font-family-rubik-spray: "Rubik Spray Paint", cursive, sans-serif;
  --asm-font-family-shadows-light: "Shadows Into Light Two", cursive, sans-serif;
  --asm-font-family-zalando: "Zalando Sans", ui-sans-serif, system-ui, sans-serif;
*/
const fontFamilies = [
  { name: "Primary (Inter)", variable: "--asm-font-family-primary", category: "System" },
  { name: "Mono (JetBrains)", variable: "--asm-font-family-mono", category: "System" },
  { name: "Poppins", variable: "--asm-font-family-poppins", category: "Sans-serif" },
  { name: "Open Sans", variable: "--asm-font-family-open-sans", category: "Sans-serif" },
  { name: "Lato", variable: "--asm-font-family-lato", category: "Sans-serif" },
  { name: "Rubik", variable: "--asm-font-family-rubik", category: "Sans-serif" },
  { name: "Nunito", variable: "--asm-font-family-nunito", category: "Sans-serif" },
  { name: "Work Sans", variable: "--asm-font-family-work-sans", category: "Sans-serif" },
  { name: "Manrope", variable: "--asm-font-family-manrope", category: "Sans-serif" },
  { name: "Figtree", variable: "--asm-font-family-figtree", category: "Sans-serif" },
  { name: "Sora", variable: "--asm-font-family-sora", category: "Sans-serif" },
  { name: "Outfit", variable: "--asm-font-family-outfit", category: "Sans-serif" },
  { name: "Lexend", variable: "--asm-font-family-lexend", category: "Sans-serif" },
  { name: "Public Sans", variable: "--asm-font-family-public-sans", category: "Sans-serif" },
  { name: "DM Sans", variable: "--asm-font-family-dm-sans", category: "Sans-serif" },
  { name: "Overpass", variable: "--asm-font-family-overpass", category: "Sans-serif" },
  { name: "Quicksand", variable: "--asm-font-family-quicksand", category: "Rounded" },
  { name: "Karla", variable: "--asm-font-family-karla", category: "Sans-serif" },
  { name: "Barlow", variable: "--asm-font-family-barlow", category: "Sans-serif" },
  { name: "Space Grotesk", variable: "--asm-font-family-space-grotesk", category: "Geometric" },
  { name: "Red Hat Display", variable: "--asm-font-family-red-hat", category: "Display" },
  { name: "Jost", variable: "--asm-font-family-jost", category: "Geometric" },
  { name: "Inter", variable: "--asm-font-family-inter", category: "Geometric" },
  { name: "Barriecito", variable: "--asm-font-family-barriecito", category: "Cursive" },
  { name: "Borel", variable: "--asm-font-family-borel", category: "Cursive" },
  { name: "DynaPuff", variable: "--asm-font-family-dynapuff", category: "Cursive" },
  { name: "Gabarito", variable: "--asm-font-family-gabarito", category: "Cursive" },
  { name: "Kranky", variable: "--asm-font-family-kranky", category: "Cursive" },
  { name: "Macondo", variable: "--asm-font-family-macondo", category: "Cursive" },
  { name: "Playpen Sans", variable: "--asm-font-family-playpen-sans", category: "Cursive" },
  { name: "Rubik Spray Paint", variable: "--asm-font-family-rubik-spray", category: "Cursive" },
  { name: "Shadows Into Light Two", variable: "--asm-font-family-shadows-light", category: "Cursive" },
  { name: "Zalando Sans", variable: "--asm-font-family-zalando", category: "Display" }
];

const weightVariations = [
  { weight: 300, label: "Light" },
  { weight: 400, label: "Regular" },
  { weight: 500, label: "Medium" },
  { weight: 600, label: "Semibold" },
  { weight: 700, label: "Bold" },
];

const sampleTexts = [
  "The quick brown fox jumps over the lazy dog",
  "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  "abcdefghijklmnopqrstuvwxyz",
  "0123456789 !@#$%^&*()",
];

export default function FontShowcase() {
  return (
    <Section title="Font Showcase" description="Explore 22 variable font families with live weight and size variations">
      <div style={{ display: "flex", flexDirection: "column", gap: "var(--asm-space-8)" }}>
        {fontFamilies.map((font) => (
          <div key={font.variable} style={{ 
            border: "var(--asm-border-thin) solid var(--asm-color-border)", 
            borderRadius: "var(--asm-radius-lg)",
            padding: "var(--asm-space-6)",
            backgroundColor: "var(--asm-color-surface)",
            boxShadow: "var(--asm-effect-shadow-sm)"
          }}>
            <div style={{ 
              display: "flex", 
              justifyContent: "space-between", 
              alignItems: "center",
              marginBottom: "var(--asm-space-4)",
              paddingBottom: "var(--asm-space-3)",
              borderBottom: "var(--asm-border-hairline) solid var(--asm-color-border-secondary)"
            }}>
              <h3 style={{ 
                fontSize: "var(--asm-font-size-2xl)", 
                fontWeight: "var(--asm-font-weight-700)",
                fontFamily: `var(${font.variable})`,
                margin: 0
              }}>
                {font.name}
              </h3>
              <span style={{
                fontSize: "var(--asm-font-size-xs)",
                padding: "var(--asm-space-1) var(--asm-space-2)",
                backgroundColor: "var(--asm-color-surface-secondary)",
                borderRadius: "var(--asm-radius-sm)",
                fontWeight: "var(--asm-font-weight-500)"
              }}>
                {font.category}
              </span>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "var(--asm-space-4)" }}>
              <div style={{
                fontFamily: `var(${font.variable})`,
                fontSize: "var(--asm-font-size-4xl)",
                fontWeight: "var(--asm-font-weight-700)",
                lineHeight: "var(--asm-line-height-tight)",
                marginBottom: "var(--asm-space-2)"
              }}>
                {sampleTexts[0]}
              </div>

              <div style={{ 
                display: "grid", 
                gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", 
                gap: "var(--asm-space-3)"
              }}>
                {weightVariations.map((variant) => (
                  <div 
                    key={variant.weight}
                    style={{ 
                      padding: "var(--asm-space-3)",
                      backgroundColor: "var(--asm-color-surface-secondary)",
                      borderRadius: "var(--asm-radius-md)",
                      border: "var(--asm-border-hairline) solid var(--asm-color-border-secondary)"
                    }}
                  >
                    <div style={{ 
                      fontSize: "var(--asm-font-size-xs)", 
                      fontWeight: "var(--asm-font-weight-600)",
                      marginBottom: "var(--asm-space-2)",
                      color: "var(--asm-color-text-muted)",
                      fontFamily: "var(--asm-font-family-mono)"
                    }}>
                      {variant.label} ({variant.weight})
                    </div>
                    <div style={{
                      fontFamily: `var(${font.variable})`,
                      fontWeight: variant.weight,
                      fontSize: "var(--asm-font-size-lg)",
                      lineHeight: "var(--asm-line-height-relaxed)"
                    }}>
                      {sampleTexts[0]}
                    </div>
                  </div>
                ))}
              </div>

              <div style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "var(--asm-space-2)",
                marginTop: "var(--asm-space-2)",
                padding: "var(--asm-space-3)",
                backgroundColor: "var(--asm-color-surface-muted)",
                borderRadius: "var(--asm-radius-md)"
              }}>
                {sampleTexts.slice(1).map((text, idx) => (
                  <div 
                    key={idx}
                    style={{
                      fontFamily: `var(${font.variable})`,
                      fontSize: "var(--asm-font-size-sm)",
                      fontWeight: "var(--asm-font-weight-400)",
                      letterSpacing: idx === 0 ? "0.05em" : "normal"
                    }}
                  >
                    {text}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
