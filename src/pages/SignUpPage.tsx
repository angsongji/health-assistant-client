import { useState } from "react";
import { Card, Typography, Input, Button, Space, Flex } from "antd";
import { useNavigate } from "react-router-dom";
import PATH from "../routers/path";
import { useThemeStore } from "../stores/useThemeStore";
import { lightColors, darkColors } from "../theme/colors";

const { Title, Text } = Typography;

const SignUpPage = () => {
  const navigate = useNavigate();
  const mode = useThemeStore((state) => state.mode);
  const colors = mode === 'dark' ? darkColors : lightColors;
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement signup logic
    if (formData.password !== formData.confirmPassword) {
      alert("Mật khẩu không khớp!");
      return;
    }
    console.log("Signup:", formData);
    // Navigate to login after signup
    navigate(PATH.LOGIN);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Flex
      align="center"
      justify="center"
      style={{
        minHeight: "100vh",
        backgroundColor: colors.gray[100],
        padding: "16px",
      }}
    >
      <Card
        style={{
          width: "100%",
          maxWidth: 400,
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Space direction="vertical" size="large" style={{ width: "100%" }}>
          <div style={{ textAlign: "center" }}>
            <Title level={2} style={{ marginBottom: 8 }}>
              Đăng ký
            </Title>
            <Text type="secondary">Tạo tài khoản mới</Text>
          </div>

          <form onSubmit={handleSubmit}>
            <Space direction="vertical" size="middle" style={{ width: "100%" }}>
              <Input
                size="large"
                placeholder="Họ và tên"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                autoComplete="name"
              />
              <Input
                size="large"
                placeholder="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                autoComplete="email"
              />
              <Input.Password
                size="large"
                placeholder="Mật khẩu"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                autoComplete="new-password"
              />
              <Input.Password
                size="large"
                placeholder="Xác nhận mật khẩu"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
                autoComplete="new-password"
              />
              <Button
                type="primary"
                htmlType="submit"
                size="large"
                block
                style={{ marginTop: 8 }}
              >
                Đăng ký
              </Button>
              <div style={{ textAlign: "center" }}>
                <Button
                  type="link"
                  onClick={() => navigate(PATH.LOGIN)}
                  style={{ padding: 0 }}
                >
                  Đã có tài khoản? Đăng nhập ngay
                </Button>
              </div>
            </Space>
          </form>
        </Space>
      </Card>
    </Flex>
  );
};

export default SignUpPage;
