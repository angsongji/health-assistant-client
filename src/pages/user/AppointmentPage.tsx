import { useState } from "react";
import { Typography, Button, Table, Tag, Space, Flex } from "antd";
import type { ColumnsType } from "antd/es/table";

const { Title, Text } = Typography;

interface Appointment {
  id: number;
  doctor: string;
  date: string;
  time: string;
  status: string;
  reason: string;
}

const UserAppointmentPage = () => {
  // Demo data
  const [appointments] = useState<Appointment[]>([
    {
      id: 1,
      doctor: "BS. Nguyễn Văn A",
      date: "2024-01-15",
      time: "09:00",
      status: "confirmed",
      reason: "Khám tổng quát",
    },
    {
      id: 2,
      doctor: "BS. Trần Thị B",
      date: "2024-01-20",
      time: "14:30",
      status: "pending",
      reason: "Tư vấn sức khỏe",
    },
  ]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "confirmed":
        return "success";
      case "pending":
        return "warning";
      case "cancelled":
        return "error";
      default:
        return "default";
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case "confirmed":
        return "Đã xác nhận";
      case "pending":
        return "Chờ xác nhận";
      case "cancelled":
        return "Đã hủy";
      default:
        return status;
    }
  };

  const columns: ColumnsType<Appointment> = [
    {
      title: "Bác sĩ",
      dataIndex: "doctor",
      key: "doctor",
    },
    {
      title: "Ngày",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Giờ",
      dataIndex: "time",
      key: "time",
    },
    {
      title: "Lý do",
      dataIndex: "reason",
      key: "reason",
    },
    {
      title: "Trạng thái",
      dataIndex: "status",
      key: "status",
      render: (status: string) => (
        <Tag color={getStatusColor(status)}>{getStatusLabel(status)}</Tag>
      ),
    },
    {
      title: "Thao tác",
      key: "action",
      align: "right",
      render: (_, record) => (
        <Space>
          <Button size="small">Chi tiết</Button>
          {record.status === "pending" && (
            <Button size="small" danger>
              Hủy
            </Button>
          )}
        </Space>
      ),
    },
  ];

  return (
    <div>
      <Flex justify="space-between" align="center" style={{ marginBottom: 24 }}>
        <Title level={2} style={{ margin: 0 }}>
          Lịch hẹn của tôi
        </Title>
        <Button type="primary">Đặt lịch mới</Button>
      </Flex>

      <Table
        columns={columns}
        dataSource={appointments}
        rowKey="id"
        locale={{
          emptyText: (
            <Text type="secondary" style={{ padding: "24px 0" }}>
              Chưa có lịch hẹn nào
            </Text>
          ),
        }}
      />
    </div>
  );
};

export default UserAppointmentPage;
