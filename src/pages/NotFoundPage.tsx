import { Typography, Button, Space, Flex } from "antd";
import { useNavigate } from "react-router-dom";
import PATH from "../routers/path";

const { Title, Text } = Typography;

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <Flex
      vertical
      align="center"
      justify="center"
      style={{
        minHeight: "100vh",
        gap: 16,
      }}
    >
      <Title level={1} style={{ margin: 0, fontWeight: "bold" }}>
        404
      </Title>
      <Title level={3} style={{ margin: 0 }}>
        Trang không tìm thấy
      </Title>
      <Text type="secondary">
        Trang bạn đang tìm kiếm không tồn tại hoặc đã bị di chuyển.
      </Text>
      <Button
        type="primary"
        onClick={() => navigate(PATH.HOME)}
        style={{ marginTop: 8 }}
      >
        Về trang chủ
      </Button>
    </Flex>
  );
};

export default NotFoundPage;
