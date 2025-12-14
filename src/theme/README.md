# Theme System Documentation

## Cấu trúc Theme

Theme system được thiết kế để dễ bảo trì và mở rộng.

### Files

- `colors.ts`: Định nghĩa color palettes cho các themes
- `utils.ts`: Utility functions và shared configurations
- `index.ts`: Theme configurations sử dụng helper functions

## Cách thêm Theme mới

### Bước 1: Thêm Color Palette

Trong `colors.ts`, thêm color palette mới:

```typescript
export const highContrastColors = {
  primary: {
    600: '#000000',
    // ... các màu khác
  },
  background: {
    primary: '#ffffff',
    // ...
  },
  // ... các màu khác
} as const;
```

### Bước 2: Tạo Theme Config

Trong `index.ts`, thêm theme config mới:

```typescript
export const highContrastThemeConfig: ThemeConfig = createThemeConfig(
  highContrastColors, 
  false // isDark
);
```

### Bước 3: Đăng ký Theme

Trong `types/themeType.ts`:

```typescript
export type ThemeMode = 'light' | 'dark' | 'highContrast';

export const themeMap: Record<ThemeMode | string, ThemeConfig> = {
  light: lightThemeConfig,
  dark: darkThemeConfig,
  highContrast: highContrastThemeConfig, // Thêm theme mới
};

export const themeModeListName: Record<ThemeMode | string, string> = {
  light: 'Light',
  dark: 'Dark',
  highContrast: 'High Contrast', // Thêm tên hiển thị
};
```

Theme mới sẽ tự động hoạt động với ThemeProvider.

## Lợi ích của cấu trúc này

1. **DRY (Don't Repeat Yourself)**: Không còn code trùng lặp giữa các themes
2. **Dễ bảo trì**: Thay đổi shared configs chỉ cần sửa một nơi
3. **Dễ mở rộng**: Thêm theme mới chỉ cần 3 bước đơn giản
4. **Type-safe**: TypeScript đảm bảo type safety
5. **Consistent**: Tất cả themes sử dụng cùng một cấu trúc

## Utility Functions

### `hexToRgba(hex: string, opacity: number)`

Chuyển đổi hex color sang rgba với opacity:

```typescript
hexToRgba('#2563eb', 0.1) // => 'rgba(37, 99, 235, 0.1)'
```

### `createThemeConfig(colors: ColorPalette, isDark: boolean)`

Tạo theme config từ color palette:

```typescript
const customTheme = createThemeConfig(customColors, false);
```

## Shared Configurations

Các configs được chia sẻ giữa tất cả themes:
- `sharedTokens`: Border radius, font family, control heights
- `sharedComponentConfigs`: Button, Input, Card, Table configs

Thay đổi các configs này sẽ áp dụng cho tất cả themes.

