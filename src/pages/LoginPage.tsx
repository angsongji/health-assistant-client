import { useForm, Controller } from "react-hook-form";
import {
  Typography,
  Input,
  Button,
  Space,
  Flex,
  Checkbox,
  Divider,
} from "antd";
import {
  PhoneOutlined,
  LockOutlined,
  EyeInvisibleOutlined,
  EyeTwoTone,
  GoogleOutlined,
  FacebookFilled,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import PATH from "../routers/path";
import { useThemeStore } from "../stores/useThemeStore";
import { lightColors, darkColors } from "../theme/colors";
import Logo from "../components/common/Logo";
import AuthLayout from "../layouts/AuthLayout";
import Footer from "../components/common/Footer";

const { Title, Text } = Typography;

interface LoginFormData {
  phone: string;
  password: string;
  remember: boolean;
}

const LoginPage = () => {
  const navigate = useNavigate();
  const mode = useThemeStore((state) => state.mode);
  const colors = mode === "dark" ? darkColors : lightColors;

  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>({
    defaultValues: {
      phone: "",
      password: "",
      remember: false,
    },
  });

  const onSubmit = async (data: LoginFormData) => {
    // TODO: Implement login logic
    console.log("Login:", data);
    // Navigate to user home after login
    navigate(PATH.BASEPATH_USER);
  };

  return (
    <AuthLayout>
      <Flex
        vertical
        justify="center"
        style={{
          height: "100%",
          background: `linear-gradient(135deg, #E6F3FF 0%, #FFFFFF 100%)`,
        }}
      >
        <div className="w-full flex flex-col items-center!">
          <div className="flex justify-center items-center py-7">
            <Logo color={colors.primary[600]} />
          </div>
          <div
            className="rounded-tr-3xl rounded-tl-3xl bg-white md:bg-transparent shadow-2xl! md:shadow-none!"
            style={{ maxWidth: 500, width: "100%", padding: "2rem" }}
          >
            <Title
              style={{ marginBottom: 8, color: colors.text.primary }}
              className="text-2xl! md:text-3xl!"
            >
              Chào mừng trở lại
            </Title>
            <Text
              style={{
                marginBottom: 32,
                display: "block",
                fontSize: "1rem",
                color: colors.text.secondary,
              }}
              className="text-sm! md:text-md!"
            >
              Đăng nhập để tiếp tục sử dụng dịch vụ
            </Text>

            <form onSubmit={handleSubmit(onSubmit)}>
              <Space
                direction="vertical"
                size="middle"
                style={{ width: "100%" }}
              >
                <div>
                  <Text
                    strong
                    style={{
                      display: "block",
                      marginBottom: 8,
                      color: colors.text.secondary,
                    }}
                  >
                    Số điện thoại
                  </Text>
                  <Controller
                    name="phone"
                    control={control}
                    rules={{
                      required: "Vui lòng nhập số điện thoại",
                      pattern: {
                        value: /^[0-9]{10}$/,
                        message: "Số điện thoại không hợp lệ (10 chữ số)",
                      },
                    }}
                    render={({ field }) => (
                      <div>
                        <Input
                          {...field}
                          size="large"
                          placeholder="Nhập số điện thoại"
                          prefix={
                            <PhoneOutlined
                              style={{ color: colors.text.tertiary }}
                            />
                          }
                          autoComplete="tel"
                          style={{ height: 48 }}
                          status={errors.phone ? "error" : ""}
                        />
                        {errors.phone && (
                          <Text type="danger" style={{ fontSize: "0.875rem" }}>
                            {errors.phone.message}
                          </Text>
                        )}
                      </div>
                    )}
                  />
                </div>

                <div>
                  <Text
                    strong
                    style={{
                      display: "block",
                      marginBottom: 8,
                      color: colors.text.secondary,
                    }}
                  >
                    Mật khẩu
                  </Text>
                  <Controller
                    name="password"
                    control={control}
                    rules={{
                      required: "Vui lòng nhập mật khẩu",
                      minLength: {
                        value: 6,
                        message: "Mật khẩu phải có ít nhất 6 ký tự",
                      },
                    }}
                    render={({ field }) => (
                      <div>
                        <Input.Password
                          {...field}
                          size="large"
                          placeholder="Nhập mật khẩu"
                          prefix={
                            <LockOutlined
                              style={{ color: colors.text.tertiary }}
                            />
                          }
                          iconRender={(visible) =>
                            visible ? (
                              <EyeTwoTone
                                style={{ color: colors.text.tertiary }}
                              />
                            ) : (
                              <EyeInvisibleOutlined
                                style={{ color: colors.text.tertiary }}
                              />
                            )
                          }
                          autoComplete="current-password"
                          style={{ height: 48 }}
                          status={errors.password ? "error" : ""}
                        />
                        {errors.password && (
                          <Text type="danger" style={{ fontSize: "0.875rem" }}>
                            {errors.password.message}
                          </Text>
                        )}
                      </div>
                    )}
                  />
                </div>

                <div className="flex justify-between items-center">
                  <Controller
                    name="remember"
                    control={control}
                    render={({ field }) => (
                      <Checkbox
                        {...field}
                        checked={field.value}
                        style={{ color: colors.text.secondary }}
                      >
                        Ghi nhớ đăng nhập
                      </Checkbox>
                    )}
                  />
                  <Button
                    type="link"
                    style={{
                      padding: 0,
                      margin: 0,
                      color: colors.primary[600],
                      fontWeight: 600,
                    }}
                  >
                    Quên mật khẩu?
                  </Button>
                </div>

                <Button
                  type="primary"
                  htmlType="submit"
                  size="large"
                  block
                  loading={isSubmitting}
                  style={{
                    height: 48,
                    fontSize: "1rem",
                    fontWeight: 600,
                    marginTop: 8,
                    letterSpacing: "0.05em",
                  }}
                  className="shadow-xl!"
                >
                  Đăng nhập
                </Button>

                <Divider style={{ margin: "24px 0" }}>
                  <Text type="secondary">hoặc</Text>
                </Divider>

                <div className="flex justify-between gap-2 flex-col md:flex-row">
                  <Button
                    size="large"
                    icon={
                      <GoogleOutlined style={{ color: colors.error.main }} />
                    }
                    style={{
                      height: 48,
                      borderColor: colors.border.default,
                      color: colors.text.primary,
                      flex: 1,
                    }}
                    className="px-1! py-2!"
                  >
                    Google
                  </Button>
                  <Button
                    size="large"
                    icon={
                      <FacebookFilled style={{ color: colors.primary[600] }} />
                    }
                    style={{
                      height: 48,
                      borderColor: colors.border.default,
                      color: colors.text.primary,
                      flex: 1,
                    }}
                    className="px-1! py-2!"
                  >
                    Facebook
                  </Button>
                </div>

                <div style={{ textAlign: "center", marginTop: 24 }}>
                  <Text type="secondary">Chưa có tài khoản? </Text>
                  <Button
                    type="link"
                    onClick={() => navigate(PATH.SIGNUP)}
                    style={{
                      padding: 0,
                      color: colors.primary[600],
                      fontWeight: 600,
                    }}
                  >
                    Đăng ký ngay
                  </Button>
                </div>
              </Space>
            </form>
          </div>
        </div>
        <Footer />
      </Flex>
    </AuthLayout>
  );
};

export default LoginPage;
