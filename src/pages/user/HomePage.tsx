import { Typography, Card, Row, Col } from "antd";

const { Title, Text } = Typography;

const UserHomePage = () => {
  return (
    <div>
      <Title level={2} style={{ marginBottom: 8 }}>
        Trang chủ
      </Title>
      <Text type="secondary" style={{ marginBottom: 24, display: "block" }}>
        Chào mừng đến với Health Assistant
      </Text>

      <Row gutter={[24, 24]}>
        <Col xs={24} md={8}>
          <Card>
            <Title level={4} style={{ marginBottom: 8 }}>
              Đặt lịch hẹn
            </Title>
            <Text type="secondary">
              Đặt lịch hẹn với bác sĩ một cách dễ dàng
            </Text>
          </Card>
        </Col>

        <Col xs={24} md={8}>
          <Card>
            <Title level={4} style={{ marginBottom: 8 }}>
              Lịch sử khám
            </Title>
            <Text type="secondary">
              Xem lại lịch sử khám bệnh của bạn
            </Text>
          </Card>
        </Col>

        <Col xs={24} md={8}>
          <Card>
            <Title level={4} style={{ marginBottom: 8 }}>
              Hồ sơ sức khỏe
            </Title>
            <Text type="secondary">
              Quản lý thông tin sức khỏe cá nhân
            </Text>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default UserHomePage;
