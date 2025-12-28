import ThemeSwitcher from "../components/ThemeSwitcher";
import DensitySwitcher from "../components/DensitySwitcher";
import ColorSwatches from "../components/ColorSwatches";
import TypographyScale from "../components/TypographyScale";
import SpacingScale from "../components/SpacingScale";
import RadiiShowcase from "../components/RadiiShowcase";
import ShadowShowcase from "../components/ShadowShowcase";
import MotionShowcase from "../components/MotionShowcase";
import ZIndexShowcase from "../components/ZIndexShowcase";
import UiStatesShowcase from "../components/UiStatesShowcase";
import DataVizPalette from "../components/DataVizPalette";
import FontShowcase from "../components/FontShowcase";
import '../styles/layout.css';

export default function PlaygroundPage() {
  return (
    <div className="playground-container">
      <header className="playground-header">
        <h1 className="playground-title">Design Tokens Playground</h1>
        <div className="playground-controls">
          <ThemeSwitcher />
          <DensitySwitcher />
        </div>
      </header>
      <main className="playground-main">
        <ColorSwatches />
        <TypographyScale />
        <FontShowcase />
        <SpacingScale />
        <RadiiShowcase />
        <ShadowShowcase />
        <MotionShowcase />
        <ZIndexShowcase />
        <UiStatesShowcase />
        <DataVizPalette />
      </main>
    </div>
  );
}
