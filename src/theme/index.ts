import { ThemeConfig } from 'antd';
import { lightColors, darkColors, type LightColorPalette, type DarkColorPalette } from './colors';
import { sharedComponentConfigs, sharedTokens, hexToRgba } from './utils';

/**
 * Type for color palette (supports both light and dark)
 */
type ColorPalette = LightColorPalette | DarkColorPalette;

/**
 * Creates Ant Design theme configuration from color palette
 * This function eliminates code duplication and makes it easy to add new themes
 */
const createThemeConfig = (colors: ColorPalette, isDark: boolean = false): ThemeConfig => {
  return {
    token: {
      // Primary colors
      colorPrimary: colors.primary[600],
      colorPrimaryHover: isDark ? colors.primary[500] : colors.primary[700],
      colorPrimaryActive: isDark ? colors.primary[700] : colors.primary[800],
      
      // Background colors
      colorBgContainer: colors.background.primary,
      colorBgElevated: colors.background.elevated,
      colorBgLayout: isDark ? colors.background.primary : colors.gray[100],
      colorBgSpotlight: isDark ? colors.background.secondary : colors.background.paper,
      
      // Text colors
      colorText: colors.text.primary,
      colorTextSecondary: colors.text.secondary,
      colorTextTertiary: colors.text.tertiary,
      colorTextDisabled: 'disabled' in colors.text ? colors.text.disabled : colors.text.tertiary,
      
      // Border colors
      colorBorder: colors.border.default,
      colorBorderSecondary: colors.border.light,
      
      // Status colors
      colorSuccess: colors.success.main,
      colorError: colors.error.main,
      colorWarning: colors.warning.main,
      colorInfo: colors.info.main,
      
      // Shared tokens
      ...sharedTokens,
    },
    components: {
      // Shared component configs
      ...sharedComponentConfigs,
      
      // Theme-specific component configs
      Drawer: {
        colorBgElevated: colors.background.sidebar,
      },
      Menu: {
        itemBg: colors.background.sidebar,
        // Use hexToRgba utility instead of hard-coded values
        itemHoverBg: hexToRgba(colors.primary[600], 0.1),
        itemSelectedBg: hexToRgba(colors.primary[600], 0.15),
      },
    },
  };
};

/**
 * Light Theme Configuration
 * Generated from lightColors palette
 */
export const lightThemeConfig: ThemeConfig = createThemeConfig(lightColors, false);

/**
 * Dark Theme Configuration
 * Generated from darkColors palette
 */
export const darkThemeConfig: ThemeConfig = createThemeConfig(darkColors, true);

// Export colors để sử dụng trực tiếp nếu cần
export { lightColors, darkColors };

// Export utility functions for creating custom themes
export { createThemeConfig, hexToRgba };
