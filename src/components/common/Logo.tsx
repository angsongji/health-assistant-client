import { Flex, Typography } from "antd";
import { useThemeStore } from "../../stores/useThemeStore";
import { lightColors, darkColors } from "../../theme/colors";

const { Title } = Typography;

interface LogoProps {
  color?: string;
}

const Logo = ({ color }: LogoProps) => {
  const mode = useThemeStore((state) => state.mode);
  const colors = mode === "dark" ? darkColors : lightColors;

  return (
    <Flex align="center" gap={12}>
      <div
        style={{
          width: 48,
          height: 48,
          borderRadius: 12,
          backgroundColor: color || "transparent",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: color ? 8 : 0,
        }}
      >
        <img
          src="/logo.svg"
          alt="HealthAssistant Logo"
          style={{
            width: color ? "100%" : 48,
            height: color ? "100%" : 48,
          }}
        />
      </div>
      <Title
        style={{ margin: 0, color: colors.primary[600] }}
        className="text-xl! md:text-2xl!"
      >
        HealthAssistant
      </Title>
    </Flex>
  );
};

export default Logo;
