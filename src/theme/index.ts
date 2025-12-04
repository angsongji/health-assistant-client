import { createTheme } from '@mui/material/styles';
import type { Theme } from '@mui/material';
import { lightColors, darkColors } from './colors';

// Extend MUI Theme để thêm custom colors
declare module '@mui/material/styles' {
  interface Palette {
    custom: {
      background: {
        sidebar: string;
        light: string;
        dark: string;
        elevated: string;
      };
      text: {
        tertiary: string;
        link: string;
        disabled?: string;
      };
      border: {
        light: string;
        default: string;
        dark: string;
        focus: string;
      };
    };
  }

  interface PaletteOptions {
    custom?: {
      background?: {
        sidebar?: string;
        light?: string;
        dark?: string;
        elevated?: string;
      };
      text?: {
        tertiary?: string;
        link?: string;
        disabled?: string;
      };
      border?: {
        light?: string;
        default?: string;
        dark?: string;
        focus?: string;
      };
    };
  }
}

/**
 * Light Theme
 */
export const lightTheme: Theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: lightColors.primary[600],
      light: lightColors.primary[400],
      dark: lightColors.primary[700],
      contrastText: lightColors.text.white,
    },
    secondary: {
      main: lightColors.primary[500],
      light: lightColors.primary[300],
      dark: lightColors.primary[800],
    },
    background: {
      default: lightColors.gray[100], // Main content: gray-100
      paper: lightColors.background.primary, // Cards/Paper: white
    },
    text: {
      primary: lightColors.text.primary,
      secondary: lightColors.text.secondary,
    },
    error: {
      main: lightColors.error.main,
      light: lightColors.error.light,
      dark: lightColors.error.dark,
    },
    warning: {
      main: lightColors.warning.main,
      light: lightColors.warning.light,
      dark: lightColors.warning.dark,
    },
    info: {
      main: lightColors.info.main,
      light: lightColors.info.light,
      dark: lightColors.info.dark,
    },
    success: {
      main: lightColors.success.main,
      light: lightColors.success.light,
      dark: lightColors.success.dark,
    },
    grey: {
      50: lightColors.gray[50],
      100: lightColors.gray[100],
      200: lightColors.gray[200],
      300: lightColors.gray[300],
      400: lightColors.gray[400],
      500: lightColors.gray[500],
      600: lightColors.gray[600],
      700: lightColors.gray[700],
      800: lightColors.gray[800],
      900: lightColors.gray[900],
    },
    // Custom colors - map trực tiếp từ colors.ts
    custom: {
      background: {
        sidebar: lightColors.background.sidebar,
        light: lightColors.background.light,
        dark: lightColors.background.dark,
        elevated: lightColors.background.elevated,
      },
      text: {
        tertiary: lightColors.text.tertiary,
        link: lightColors.text.link,
      },
      border: {
        light: lightColors.border.light,
        default: lightColors.border.default,
        dark: lightColors.border.dark,
        focus: lightColors.border.focus,
      },
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
      fontSize: '2.5rem',
      lineHeight: 1.2,
    },
    h2: {
      fontWeight: 700,
      fontSize: '2rem',
      lineHeight: 1.3,
    },
    h3: {
      fontWeight: 600,
      fontSize: '1.75rem',
      lineHeight: 1.4,
    },
    h4: {
      fontWeight: 600,
      fontSize: '1.5rem',
      lineHeight: 1.4,
    },
    h5: {
      fontWeight: 600,
      fontSize: '1.25rem',
      lineHeight: 1.5,
    },
    h6: {
      fontWeight: 600,
      fontSize: '1rem',
      lineHeight: 1.5,
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.5,
    },
    body2: {
      fontSize: '0.875rem',
      lineHeight: 1.5,
    },
    button: {
      textTransform: 'none',
      fontWeight: 500,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: 8,
          padding: '10px 24px',
          fontWeight: 500,
          boxShadow: 'none',
          '&:hover': {
            boxShadow: 'none',
          },
        },
        contained: {
          '&:hover': {
            backgroundColor: lightColors.primary[700],
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: 8,
            '&:hover fieldset': {
              borderColor: lightColors.border.default,
            },
            '&.Mui-focused fieldset': {
              borderColor: lightColors.border.focus,
              borderWidth: 2,
            },
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: lightColors.background.primary, // White
        },
      },
    },
  },
  shape: {
    borderRadius: 8,
  },
  spacing: 8,
});

/**
 * Dark Theme
 */
export const darkTheme: Theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: darkColors.primary[600],
      light: darkColors.primary[400],
      dark: darkColors.primary[700],
      contrastText: darkColors.text.white,
    },
    secondary: {
      main: darkColors.primary[500],
      light: darkColors.primary[300],
      dark: darkColors.primary[800],
    },
    background: {
      default: darkColors.background.primary, // Main content: slate-900 (tối)
      paper: darkColors.background.paper, // Cards: slate-800 (tối)
    },
    text: {
      primary: darkColors.text.primary,
      secondary: darkColors.text.secondary,
      disabled: darkColors.text.disabled,
    },
    error: {
      main: darkColors.error.main,
      light: darkColors.error.light,
      dark: darkColors.error.dark,
    },
    warning: {
      main: darkColors.warning.main,
      light: darkColors.warning.light,
      dark: darkColors.warning.dark,
    },
    info: {
      main: darkColors.info.main,
      light: darkColors.info.light,
      dark: darkColors.info.dark,
    },
    success: {
      main: darkColors.success.main,
      light: darkColors.success.light,
      dark: darkColors.success.dark,
    },
    grey: {
      50: darkColors.gray[50],
      100: darkColors.gray[100],
      200: darkColors.gray[200],
      300: darkColors.gray[300],
      400: darkColors.gray[400],
      500: darkColors.gray[500],
      600: darkColors.gray[600],
      700: darkColors.gray[700],
      800: darkColors.gray[800],
      900: darkColors.gray[900],
    },
    divider: darkColors.border.default,
    // Custom colors - map trực tiếp từ colors.ts
    custom: {
      background: {
        sidebar: darkColors.background.sidebar,
        light: darkColors.background.light,
        dark: darkColors.background.dark,
        elevated: darkColors.background.elevated,
      },
      text: {
        tertiary: darkColors.text.tertiary,
        link: darkColors.text.link,
        disabled: darkColors.text.disabled,
      },
      border: {
        light: darkColors.border.light,
        default: darkColors.border.default,
        dark: darkColors.border.dark,
        focus: darkColors.border.focus,
      },
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
      fontSize: '2.5rem',
      lineHeight: 1.2,
    },
    h2: {
      fontWeight: 700,
      fontSize: '2rem',
      lineHeight: 1.3,
    },
    h3: {
      fontWeight: 600,
      fontSize: '1.75rem',
      lineHeight: 1.4,
    },
    h4: {
      fontWeight: 600,
      fontSize: '1.5rem',
      lineHeight: 1.4,
    },
    h5: {
      fontWeight: 600,
      fontSize: '1.25rem',
      lineHeight: 1.5,
    },
    h6: {
      fontWeight: 600,
      fontSize: '1rem',
      lineHeight: 1.5,
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.5,
    },
    body2: {
      fontSize: '0.875rem',
      lineHeight: 1.5,
    },
    button: {
      textTransform: 'none',
      fontWeight: 500,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: 8,
          padding: '10px 24px',
          fontWeight: 500,
          boxShadow: 'none',
          '&:hover': {
            boxShadow: 'none',
          },
        },
        contained: {
          '&:hover': {
            backgroundColor: darkColors.primary[700],
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: 8,
            backgroundColor: darkColors.background.elevated,
            '&:hover fieldset': {
              borderColor: darkColors.border.default,
            },
            '&.Mui-focused fieldset': {
              borderColor: darkColors.border.focus,
              borderWidth: 2,
            },
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          backgroundColor: darkColors.background.paper, // slate-800 (tối)
          color: darkColors.text.primary, // Text sáng
          boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.3), 0 1px 2px 0 rgba(0, 0, 0, 0.2)',
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: darkColors.background.sidebar, // slate-800 (tối)
          color: darkColors.text.primary, // Text sáng
        },
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          color: darkColors.text.white,
          '&:hover': {
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
          },
        },
      },
    },
  },
  shape: {
    borderRadius: 8,
  },
  spacing: 8,
});

// Export theme mặc định (light theme) để tương thích với code cũ
export const theme = lightTheme;

// Export colors để sử dụng trực tiếp nếu cần
export { lightColors, darkColors };
