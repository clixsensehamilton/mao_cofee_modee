const bluePalette = {
  primary: '#2563eb', // blue-600
  secondary: '#3b82f6', // blue-500
  background: '#eaf1fb', // very light blue
  surface: '#f5f8fd', // chat bubble background
  text: '#0a2540', // dark blue text
  accent: '#60a5fa', // blue-400
  border: '#c7d7ef',
};
const darkPalette = {
  primary: '#60a5fa', // blue-400
  secondary: '#2563eb', // blue-600
  background: '#181a20',
  surface: '#23262f',
  text: '#f3f6fb',
  accent: '#3b82f6',
  border: '#23262f',
};

export default {
  light: {
    text: bluePalette.text,
    background: bluePalette.background,
    tint: bluePalette.primary,
    tabIconDefault: bluePalette.border,
    tabIconSelected: bluePalette.primary,
    surface: bluePalette.surface,
    accent: bluePalette.accent,
    border: bluePalette.border,
  },
  dark: {
    text: darkPalette.text,
    background: darkPalette.background,
    tint: darkPalette.primary,
    tabIconDefault: darkPalette.border,
    tabIconSelected: darkPalette.primary,
    surface: darkPalette.surface,
    accent: darkPalette.accent,
    border: darkPalette.border,
  },
};
