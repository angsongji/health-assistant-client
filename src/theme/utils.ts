/**
 * Utility functions for theme configuration
 */

/**
 * Convert hex color to rgba with opacity
 */
export const hexToRgba = (hex: string, opacity: number): string => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
};

/**
 * Shared component configurations that apply to all themes
 */
export const sharedComponentConfigs = {
  Button: {
    borderRadius: 8,
    fontWeight: 500,
    controlHeight: 40,
  },
  Input: {
    borderRadius: 8,
    controlHeight: 40,
  },
  Card: {
    borderRadius: 12,
    paddingLG: 24,
  },
  Table: {
    borderRadius: 8,
  },
};

/**
 * Shared token values that apply to all themes
 */
export const sharedTokens = {
  borderRadius: 8,
  borderRadiusLG: 12,
  borderRadiusSM: 6,
  fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
  controlHeight: 40,
  controlHeightLG: 48,
  controlHeightSM: 32,
};

