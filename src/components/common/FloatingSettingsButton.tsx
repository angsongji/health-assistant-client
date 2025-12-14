import { Button, Card, Menu, Space } from "antd";
import { SettingOutlined, CheckOutlined } from "@ant-design/icons";
import { useThemeStore } from "../../stores/useThemeStore";
import { useState } from "react";
import { themeModeListName } from "../../types/themeType";

export default function FloatingSettingsButton() {
  const mode = useThemeStore((state) => state.mode);
  const setThemeMode = useThemeStore((state) => state.setThemeMode);
  const [openOptions, setOpenOptions] = useState(false);

  const handleThemeSelect = (modeKey: string) => {
    setThemeMode(modeKey);
    setOpenOptions(false);
  };

  const menuItems = Object.keys(themeModeListName).map((modeKey) => ({
    key: modeKey,
    label: (
      <Space>
        {themeModeListName[modeKey]}
        {modeKey === mode && <CheckOutlined />}
      </Space>
    ),
    onClick: () => handleThemeSelect(modeKey),
  }));

  return (
    <>
      {/* Button luôn hiện */}
      <Button
        type="text"
        icon={<SettingOutlined />}
        onClick={() => setOpenOptions(!openOptions)}
        style={{
          position: "fixed",
          bottom: 16,
          left: 16,
          width: 48,
          height: 48,
          borderRadius: "50%",
          zIndex: 1400,
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
        }}
      />

      {/* Menu options */}
      {openOptions && (
        <Card
          style={{
            position: "fixed",
            bottom: 72,
            left: 16,
            zIndex: 1401,
            minWidth: 150,
            boxShadow: "0 8px 24px rgba(0, 0, 0, 0.2)",
          }}
          onClick={(e) => e.stopPropagation()}
        >
          <Menu
            mode="vertical"
            selectedKeys={[mode]}
            items={menuItems}
            style={{ border: "none" }}
          />
        </Card>
      )}

      {/* Backdrop */}
      {openOptions && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 1300,
            backgroundColor: "rgba(0, 0, 0, 0.25)",
          }}
          onClick={() => setOpenOptions(false)}
        />
      )}
    </>
  );
}
