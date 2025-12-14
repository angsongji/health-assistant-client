import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import { Layout, Menu, Typography } from "antd";
import { useThemeStore } from "../stores/useThemeStore";
import { lightColors, darkColors } from "../theme/colors";

const { Header, Sider, Content } = Layout;
const { Title } = Typography;

// Demo layout đơn giản
const UserLayout = () => {
  const mode = useThemeStore((state) => state.mode);
  const colors = mode === 'dark' ? darkColors : lightColors;

  const menuItems = [
    {
      key: "1",
      label: "Menu Item 1",
    },
    {
      key: "2",
      label: "Menu Item 2",
    },
  ];

  return (
    <Layout style={{ minHeight: "100vh" }}>
      {/* Sidebar */}
      <Sider
        width={240}
        style={{
          backgroundColor: colors.background.sidebar,
          color: colors.text.primary,
        }}
      >
        <div style={{ padding: "16px" }}>
          <Title
            level={4}
            style={{
              margin: 0,
              fontWeight: "bold",
              color: colors.primary[600],
            }}
          >
            Dashboard
          </Title>
        </div>
        <Menu
          mode="inline"
          items={menuItems}
          style={{
            backgroundColor: colors.background.sidebar,
            color: colors.text.primary,
            borderRight: 0,
          }}
        />
      </Sider>

      {/* Main Content */}
      <Layout>
        <Header
          style={{
            backgroundColor: colors.background.paper,
            color: colors.text.primary,
            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
            marginBottom: 16,
          }}
        >
          <Title level={4} style={{ margin: 0, color: colors.text.primary }}>
            Header
          </Title>
        </Header>
        <Content
          style={{
            margin: "0 24px 24px",
            padding: 24,
            backgroundColor: colors.background.paper,
            borderRadius: 8,
            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
            overflow: "auto",
          }}
        >
          <Suspense fallback={<div>Loading Page...</div>}>
            <Outlet />
          </Suspense>
        </Content>
      </Layout>
    </Layout>
  );
};

export default UserLayout;
