// Base theme with shared values
const baseTheme = {
  fonts: {
    montserrat: "'Montserrat', sans-serif",
    cardo: "'Cardo', serif",
  },
  CTA: {
    primary: "#fa2904",
    secondary: "#4356ff",
  },
  breakpoints: {
    lg: "64rem",
    md: "58.125rem",
    sm: "48rem",
    xs: "31.25rem",
  },
};

// Dark theme (original)
export const darkTheme = {
  ...baseTheme,
  mode: 'dark',
  backgroundColor: {
    dark: "#0d0e0e",
    light: "#ffffff",
    orange: "#fc2904",
    darkGray: "#111",
    primary: "#0d0e0e",
    secondary: "#111",
    card: "#1a1a1a",
  },
  color: {
    dark: "#000000",
    darkGray: "#262637",
    lightGray: "#aaa",
    light: "#fff",
    secondaryLight: "#f1f1f1",
    tertiaryLight: "#d3d3d3",
    link: "#4353ff",
    text: "#fff",
    textSecondary: "#aaa",
  },
};

// Light theme
export const lightTheme = {
  ...baseTheme,
  mode: 'light',
  backgroundColor: {
    dark: "#ffffff",
    light: "#0d0e0e",
    orange: "#fc2904",
    darkGray: "#f5f5f5",
    primary: "#ffffff",
    secondary: "#f5f5f5",
    card: "#fff",
  },
  color: {
    dark: "#ffffff",
    darkGray: "#f0f0f5",
    lightGray: "#555",
    light: "#0d0e0e",
    secondaryLight: "#333",
    tertiaryLight: "#444",
    link: "#4353ff",
    text: "#0d0e0e",
    textSecondary: "#555",
  },
};

// Default export for backward compatibility
export const theme = darkTheme;
