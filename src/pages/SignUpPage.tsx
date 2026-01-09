import { useForm, Controller } from "react-hook-form";
import { useState } from "react";
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
  UserOutlined,
  MailOutlined,
  PhoneOutlined,
  LockOutlined,
  EyeInvisibleOutlined,
  EyeTwoTone,
  GoogleOutlined,
  FacebookFilled,
  CheckOutlined,
  RobotOutlined,
  CaretRightOutlined,
  CaretLeftOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import PATH from "../routers/path";
import { useThemeStore } from "../stores/useThemeStore";
import { lightColors, darkColors } from "../theme/colors";
import Logo from "../components/common/Logo";
import AuthLayout from "../layouts/AuthLayout";
import Footer from "../components/common/Footer";
import { motion, AnimatePresence } from "framer-motion";

const { Title, Text } = Typography;

interface SignUpFormData {
  fullName: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
  agreeToTerms: boolean;
}

const features = [
  {
    id: 1,
    text: "Tư vấn sức khỏe thông minh 24/7",
  },
  {
    id: 2,
    text: "Đặt lịch khám trực tuyến dễ dàng",
  },
  {
    id: 3,
    text: "Theo dõi sức khỏe cá nhân hóa",
  },
];

function AuthIntroMobile() {
  const mode = useThemeStore((state) => state.mode);
  const colors = mode === "dark" ? darkColors : lightColors;
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: isExpanded ? 0 : "calc(100% - 40px)" }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 30,
      }}
      style={{
        backgroundColor: "#E6F3FF",
        position: "absolute",
        right: 0,
        bottom: 5,
        width: `${isExpanded ? "90%" : "fit-content"}`,
      }}
      className="rounded-2xl shadow-lg md:hidden"
    >
      <div className="flex items-start gap-4 flex-col w-full">
        {/* Header */}
        <div
          className="items-center gap-2 px-5 pt-2"
          style={{ display: `${isExpanded ? "flex" : "none"}` }}
        >
          {/* Icon */}
          <div
            style={{
              width: "48px",
              height: "48px",
              borderRadius: "12px",
              backgroundColor: colors.primary[600],
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            🤖
          </div>
          <AnimatePresence>
            {isExpanded && (
              <motion.p
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: "auto" }}
                exit={{ opacity: 0, width: 0 }}
                transition={{ duration: 0.2 }}
                className="font-bold whitespace-nowrap"
                style={{ color: colors.primary[600] }}
              >
                Tính năng AI
              </motion.p>
            )}
          </AnimatePresence>
        </div>
        <div className="w-full flex">
          {/* Content */}
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ display: "none", height: 0 }}
                animate={{ display: "block", height: "auto" }}
                exit={{ display: "none", height: 0 }}
                transition={{ duration: 0.2 }}
                className="flex-1 flex px-5 pb-2 pr-0 w-full overflow-hidden"
              >
                <Space direction="vertical" size={8} style={{ width: "100%" }}>
                  {features.map((feature) => (
                    <div key={feature.id} className="flex items-start gap-2">
                      <CheckOutlined
                        style={{
                          color: "#10B981",
                          fontSize: "16px",
                          marginTop: "2px",
                          flexShrink: 0,
                        }}
                      />
                      <Text
                        style={{
                          color: "#6B7280",
                          fontSize: "14px",
                          lineHeight: "20px",
                        }}
                      >
                        {feature.text}
                      </Text>
                    </div>
                  ))}
                </Space>
              </motion.div>
            )}
          </AnimatePresence>
          {/* Toggle Button */}
          <Button
            onClick={() => setIsExpanded(!isExpanded)}
            className="absolute top-0 right-0"
            type="text"
            icon={
              isExpanded ? (
                <CaretRightOutlined style={{ fontSize: "16px" }} />
              ) : (
                <CaretLeftOutlined style={{ fontSize: "16px" }} />
              )
            }
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          />
        </div>
      </div>
    </motion.div>
  );
}

const SignUpPage = () => {
  const navigate = useNavigate();
  const mode = useThemeStore((state) => state.mode);
  const colors = mode === "dark" ? darkColors : lightColors;

  const {
    control,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<SignUpFormData>({
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      password: "",
      confirmPassword: "",
      agreeToTerms: false,
    },
  });

  const password = watch("password");

  const onSubmit = async (data: SignUpFormData) => {
    // TODO: Implement sign up logic
    console.log("Sign up:", data);
    // Navigate to user home after sign up
    navigate(PATH.BASEPATH_USER);
  };

  return (
    <div className="overflow-hidden">
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
                Tạo tài khoản HealthAssistant
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
                Bắt đầu tư vấn sức khỏe thông minh cùng AI
              </Text>

              <form onSubmit={handleSubmit(onSubmit)}>
                <Space
                  orientation="vertical"
                  size="middle"
                  style={{ width: "100%" }}
                >
                  {/* Họ và tên */}
                  <div>
                    <Text
                      strong
                      style={{
                        display: "block",
                        marginBottom: 8,
                        color: colors.text.secondary,
                      }}
                    >
                      Họ và tên
                    </Text>
                    <Controller
                      name="fullName"
                      control={control}
                      rules={{
                        required: "Vui lòng nhập họ và tên",
                        minLength: {
                          value: 2,
                          message: "Họ và tên phải có ít nhất 2 ký tự",
                        },
                      }}
                      render={({ field }) => (
                        <div>
                          <Input
                            {...field}
                            size="large"
                            placeholder="Nhập họ và tên của bạn"
                            prefix={
                              <UserOutlined
                                style={{ color: colors.text.tertiary }}
                              />
                            }
                            autoComplete="name"
                            style={{ height: 48 }}
                            status={errors.fullName ? "error" : ""}
                          />
                          {errors.fullName && (
                            <Text
                              type="danger"
                              style={{ fontSize: "0.875rem" }}
                            >
                              {errors.fullName.message}
                            </Text>
                          )}
                        </div>
                      )}
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <Text
                      strong
                      style={{
                        display: "block",
                        marginBottom: 8,
                        color: colors.text.secondary,
                      }}
                    >
                      Email
                    </Text>
                    <Controller
                      name="email"
                      control={control}
                      rules={{
                        required: "Vui lòng nhập email",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "Email không hợp lệ",
                        },
                      }}
                      render={({ field }) => (
                        <div>
                          <Input
                            {...field}
                            size="large"
                            placeholder="example@email.com"
                            prefix={
                              <MailOutlined
                                style={{ color: colors.text.tertiary }}
                              />
                            }
                            autoComplete="email"
                            style={{ height: 48 }}
                            status={errors.email ? "error" : ""}
                          />
                          {errors.email && (
                            <Text
                              type="danger"
                              style={{ fontSize: "0.875rem" }}
                            >
                              {errors.email.message}
                            </Text>
                          )}
                        </div>
                      )}
                    />
                  </div>

                  {/* Số điện thoại */}
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
                            placeholder="0123 456 789"
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
                            <Text
                              type="danger"
                              style={{ fontSize: "0.875rem" }}
                            >
                              {errors.phone.message}
                            </Text>
                          )}
                        </div>
                      )}
                    />
                  </div>

                  {/* Mật khẩu */}
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
                            autoComplete="new-password"
                            style={{ height: 48 }}
                            status={errors.password ? "error" : ""}
                          />
                          {errors.password && (
                            <Text
                              type="danger"
                              style={{ fontSize: "0.875rem" }}
                            >
                              {errors.password.message}
                            </Text>
                          )}
                        </div>
                      )}
                    />
                  </div>

                  {/* Xác nhận mật khẩu */}
                  <div>
                    <Text
                      strong
                      style={{
                        display: "block",
                        marginBottom: 8,
                        color: colors.text.secondary,
                      }}
                    >
                      Xác nhận mật khẩu
                    </Text>
                    <Controller
                      name="confirmPassword"
                      control={control}
                      rules={{
                        required: "Vui lòng xác nhận mật khẩu",
                        validate: (value) =>
                          value === password || "Mật khẩu không khớp",
                      }}
                      render={({ field }) => (
                        <div>
                          <Input.Password
                            {...field}
                            size="large"
                            placeholder="Nhập lại mật khẩu"
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
                            autoComplete="new-password"
                            style={{ height: 48 }}
                            status={errors.confirmPassword ? "error" : ""}
                          />
                          {errors.confirmPassword && (
                            <Text
                              type="danger"
                              style={{ fontSize: "0.875rem" }}
                            >
                              {errors.confirmPassword.message}
                            </Text>
                          )}
                        </div>
                      )}
                    />
                  </div>

                  {/* Điều khoản */}
                  <div className="flex items-start" style={{ marginTop: 8 }}>
                    <Controller
                      name="agreeToTerms"
                      control={control}
                      rules={{
                        required: "Bạn phải đồng ý với điều khoản để tiếp tục",
                      }}
                      render={({ field }) => (
                        <Checkbox
                          {...field}
                          checked={field.value}
                          style={{ color: colors.text.secondary }}
                        >
                          <Text style={{ color: colors.text.secondary }}>
                            Tôi đồng ý với{" "}
                            <span
                              onClick={(e) => {
                                e.preventDefault();
                                alert("Điều khoản dịch vụ");
                              }}
                              style={{
                                color: colors.primary[600],
                                cursor: "pointer",
                                textDecoration: "underline",
                              }}
                            >
                              Điều khoản dịch vụ
                            </span>{" "}
                            và{" "}
                            <span
                              onClick={(e) => {
                                e.preventDefault();
                                alert("Chính sách bảo mật");
                              }}
                              style={{
                                color: colors.primary[600],
                                cursor: "pointer",
                                textDecoration: "underline",
                              }}
                            >
                              Chính sách bảo mật
                            </span>
                          </Text>
                        </Checkbox>
                      )}
                    />
                  </div>
                  {errors.agreeToTerms && (
                    <Text
                      type="danger"
                      style={{ fontSize: "0.875rem", marginTop: -8 }}
                    >
                      {errors.agreeToTerms.message}
                    </Text>
                  )}

                  {/* Submit Button */}
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
                      marginTop: 16,
                      letterSpacing: "0.05em",
                    }}
                    className="shadow-xl!"
                  >
                    Đăng ký
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
                        <FacebookFilled
                          style={{ color: colors.primary[600] }}
                        />
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
                    <Text type="secondary">Đã có tài khoản? </Text>
                    <Button
                      type="link"
                      onClick={() => navigate(PATH.LOGIN)}
                      style={{
                        padding: 0,
                        color: colors.primary[600],
                        fontWeight: 600,
                      }}
                    >
                      Đăng nhập
                    </Button>
                  </div>
                </Space>
              </form>
            </div>
          </div>
          <Footer />
        </Flex>
      </AuthLayout>
      {/* Mobile Intro - Only show on mobile */}
      <div className="border!">
        <AuthIntroMobile />
      </div>
    </div>
  );
};

export default SignUpPage;
