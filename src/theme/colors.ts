
/**
 * Bảng màu cho Light Theme
 */
export const lightColors = {
  // Primary Blue - Màu xanh chính (dùng cho background, buttons, links)
  primary: {
    50: '#eff6ff',   // Xanh nhạt nhất
    100: '#dbeafe',
    200: '#bfdbfe',
    300: '#93c5fd',
    400: '#60a5fa',
    500: '#3b82f6',  // Blue-500
    600: '#0066CC',  // Blue-600 - Màu chính (buttons, links)
    700: '#1d4ed8',  // Blue-700 - Hover states
    800: '#1e40af',  // Blue-800
    900: '#1e3a8a',  // Blue-900 - Darkest
  },

  // Background Colors
  background: {
    primary: '#ffffff',      // Nền trắng (form area)
    secondary: '#2563eb',    // Nền xanh (promotional area)
    light: '#f8fafc',        // Nền xám nhạt
    dark: '#1e3a8a',         // Nền xanh đậm
    paper: '#ffffff',        // Nền cho Card, Paper
    elevated: '#ffffff',     // Nền cho các element nổi bật
    sidebar: '#ffffff',      // Nền sidebar (trắng trong light theme)
  },

  // Text Colors
  text: {
    primary: '#1f2937',       // Text chính (đen/xám đậm)
    secondary: '#6b7280',     // Text phụ (xám)
    tertiary: '#9ca3af',      // Text nhạt
    white: '#ffffff',         // Text trắng (trên nền xanh)
    link: '#2563eb',         // Link color
  },

  // Border Colors
  border: {
    light: '#e5e7eb',        // Border nhạt
    default: '#d1d5db',      // Border mặc định
    dark: '#9ca3af',         // Border đậm
    focus: '#2563eb',        // Border khi focus
  },

  // Status Colors
  success: {
    main: '#10b981',         // Green-500
    light: '#34d399',
    dark: '#059669',
  },
  error: {
    main: '#ef4444',         // Red-500
    light: '#f87171',
    dark: '#dc2626',
  },
  warning: {
    main: '#f59e0b',         // Amber-500
    light: '#fbbf24',
    dark: '#d97706',
  },
  info: {
    main: '#2563eb',         // Blue-600
    light: '#60a5fa',
    dark: '#1d4ed8',
  },

  // Social Login Colors
  social: {
    google: '#4285f4',
    facebook: '#1877f2',
  },

  // Neutral/Gray Scale
  gray: {
    50: '#f9fafb',
    100: '#f3f4f6',
    200: '#e5e7eb',
    300: '#d1d5db',
    400: '#9ca3af',
    500: '#6b7280',
    600: '#4b5563',
    700: '#374151',
    800: '#1f2937',
    900: '#111827',
  },
} as const;

/**
 * Bảng màu cho Dark Theme
 */
export const darkColors = {
  // Primary Blue - Giữ nguyên cho dark theme
  primary: {
    50: '#eff6ff',
    100: '#dbeafe',
    200: '#bfdbfe',
    300: '#93c5fd',
    400: '#60a5fa',
    500: '#3b82f6',
    600: '#2563eb',  // Màu chính
    700: '#1d4ed8',
    800: '#1e40af',
    900: '#1e3a8a',
  },

  // Background Colors - Dark Theme (màu tối)
  background: {
    primary: '#0f172a',      // Nền tối chính (slate-900) - đen đậm
    secondary: '#1e293b',    // Nền tối phụ (slate-800)
    light: '#334155',        // Nền tối nhạt (slate-700)
    dark: '#020617',         // Nền tối đậm nhất (slate-950)
    paper: '#1e293b',        // Nền cho Card, Paper (slate-800)
    elevated: '#334155',     // Nền cho các element nổi bật (slate-700)
    sidebar: '#1e293b',      // Nền sidebar (slate-800) - tối
  },

  // Text Colors - Dark Theme
  text: {
    primary: '#f1f5f9',       // Text chính (trắng/xám nhạt)
    secondary: '#cbd5e1',     // Text phụ (xám nhạt)
    tertiary: '#94a3b8',      // Text nhạt
    white: '#ffffff',         // Text trắng
    link: '#60a5fa',         // Link color (sáng hơn cho dark theme)
    disabled: '#64748b',     // Text disabled
  },

  // Border Colors - Dark Theme
  border: {
    light: '#334155',        // Border nhạt (slate-700)
    default: '#475569',      // Border mặc định (slate-600)
    dark: '#64748b',         // Border đậm (slate-500)
    focus: '#60a5fa',        // Border khi focus (blue-400)
  },

  // Status Colors - Giữ nguyên hoặc điều chỉnh cho dark theme
  success: {
    main: '#22c55e',         // Green-500 (sáng hơn)
    light: '#4ade80',
    dark: '#16a34a',
  },
  error: {
    main: '#ef4444',         // Red-500
    light: '#f87171',
    dark: '#dc2626',
  },
  warning: {
    main: '#f59e0b',         // Amber-500
    light: '#fbbf24',
    dark: '#d97706',
  },
  info: {
    main: '#60a5fa',         // Blue-400 (sáng hơn cho dark)
    light: '#93c5fd',
    dark: '#3b82f6',
  },

  // Social Login Colors - Giữ nguyên
  social: {
    google: '#4285f4',
    facebook: '#1877f2',
  },

  // Neutral/Gray Scale - Dark Theme (đảo ngược)
  gray: {
    50: '#111827',   // Darkest
    100: '#1f2937',
    200: '#374151',
    300: '#4b5563',
    400: '#6b7280',
    500: '#9ca3af',
    600: '#d1d5db',
    700: '#e5e7eb',
    800: '#f3f4f6',
    900: '#f9fafb',  // Lightest
  },
} as const;

// Export types for TypeScript
export type LightColorPalette = typeof lightColors;
export type DarkColorPalette = typeof darkColors;
