import { useState } from "react";
import {
  Box,
  Typography,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Chip,
} from "@mui/material";

const UserAppointmentPage = () => {
  // Demo data
  const [appointments] = useState([
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

  return (
    <Box>
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 3 }}>
        <Typography variant="h4" component="h1">
          Lịch hẹn của tôi
        </Typography>
        <Button variant="contained" color="primary">
          Đặt lịch mới
        </Button>
      </Box>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Bác sĩ</TableCell>
              <TableCell>Ngày</TableCell>
              <TableCell>Giờ</TableCell>
              <TableCell>Lý do</TableCell>
              <TableCell>Trạng thái</TableCell>
              <TableCell align="right">Thao tác</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {appointments.length === 0 ? (
              <TableRow>
                <TableCell colSpan={6} align="center">
                  <Typography variant="body2" color="text.secondary" sx={{ py: 3 }}>
                    Chưa có lịch hẹn nào
                  </Typography>
                </TableCell>
              </TableRow>
            ) : (
              appointments.map((appointment) => (
                <TableRow key={appointment.id}>
                  <TableCell>{appointment.doctor}</TableCell>
                  <TableCell>{appointment.date}</TableCell>
                  <TableCell>{appointment.time}</TableCell>
                  <TableCell>{appointment.reason}</TableCell>
                  <TableCell>
                    <Chip
                      label={getStatusLabel(appointment.status)}
                      color={getStatusColor(appointment.status) as any}
                      size="small"
                    />
                  </TableCell>
                  <TableCell align="right">
                    <Button size="small" sx={{ mr: 1 }}>
                      Chi tiết
                    </Button>
                    {appointment.status === "pending" && (
                      <Button size="small" color="error">
                        Hủy
                      </Button>
                    )}
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default UserAppointmentPage;

