import { Flex, Typography } from "antd";
const { Title, Text } = Typography;

const functions = [
  {
    id: 1,
    title: "AI Thông minh",
    icon: "🤖",
  },
  {
    id: 2,
    title: "Đặt lịch nhanh",
    icon: "📅",
  },
  {
    id: 3,
    title: "Bảo mật cao",
    icon: "🛡️",
  },
];
// Left side content (Desktop only)
export default function AuthIntro() {
  return (
    <Flex
      vertical
      justify="space-evenly"
      style={{
        height: "100%",
        background: "#E6F3FF",
        position: "relative",
      }}
      className="min-h-screen"
    >
      {/* Main illustration */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          textAlign: "center",
          marginBottom: 32,
        }}
      >
        <div
          style={{
            width: "45%",
            margin: "0 auto 32px",
            backgroundColor: "rgba(99, 102, 241, 0.1)",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "120px",
          }}
          className="aspect-square! h-auto!"
        >
          <img src="illustration_1.png" />
        </div>
        <Title
          level={1}
          style={{
            color: "#1F2937",
            marginBottom: 16,
            fontSize: "1.5rem",
            fontWeight: 700,
            textAlign: "center",
          }}
          className="text-3xl!"
        >
          Tư vấn sức khỏe thông minh
        </Title>
        <div className="w-full flex justify-center">
          <Text
            style={{
              color: "#6B7280",
              fontSize: "1.1rem",
              lineHeight: 1.6,
              textAlign: "center",
              display: "block",
              width: "70%",
            }}
            className="text-sm! md:text-md!"
          >
            Kết nối với AI và các chuyên gia y tế hàng đầu để nhận tư vấn sức
            khỏe chính xác, đặt lịch khám nhanh chóng
          </Text>
        </div>
      </div>

      {/* Features */}
      <Flex align="center" gap={20} justify="center">
        {functions.map((fun) => (
          <Flex key={fun.id} align="center" gap={16} justify="center" vertical>
            <div
              className="w-fit h-fit p-3 shadow-lg"
              style={{
                borderRadius: "15px",
                backgroundColor: "white",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <span
                style={{ fontSize: 24, color: "white" }}
                className="animate-pulse"
              >
                {fun.icon}
              </span>
            </div>
            <Text
              style={{ color: "#6c7b8fff", fontSize: "1rem", fontWeight: 500 }}
              className="text-center animate-pulse"
            >
              {fun.title}
            </Text>
          </Flex>
        ))}
      </Flex>
    </Flex>
  );
}
