export type Token<T extends string | number = string> = {
  value: T;
  description: string;
  meta?: Record<string, unknown>;
};

export type ThemeName = "light" | "dark" | "high-contrast";

export type ThemeDefinition = {
  name: ThemeName;
  tokens: Record<string, string | number>;
};

export type DensityName = "compact" | "comfortable";

export type DensityDefinition = {
  name: DensityName;
  tokens: Record<string, string | number>;
};

export type TokenTree = Record<string, unknown>;

export type TokenLeaf = Token<string | number>;

export type ValidateResult = {
  ok: boolean;
  errors: string[];
  warnings: string[];
};
