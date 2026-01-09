import { useThemeStore } from "../../stores/useThemeStore";
import { lightColors, darkColors } from "../../theme/colors";

const Footer = () => {
  const mode = useThemeStore((state) => state.mode);
  const colors = mode === "dark" ? darkColors : lightColors;

  return (
    <div
      style={{
        textAlign: "center",
        color: colors.text.tertiary,
        fontSize: "0.875rem",
        backgroundColor: colors.background.primary,
        width: "100%",
        padding: "0.5rem 0.25rem",
      }}
    >
      <p>© 2025 HealthAssistant</p>
      <p>Nhóm sinh viên khoa Công nghệ thông tin</p>
      <p>Đại học Sài Gòn</p>
    </div>
  );
};

export default Footer;
