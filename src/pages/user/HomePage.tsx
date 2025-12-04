import { Box, Typography, Card, CardContent } from "@mui/material";

const UserHomePage = () => {
  return (
    <Box>
      <Typography variant="h4" component="h1" gutterBottom>
        Trang chủ
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
        Chào mừng đến với Health Assistant
      </Typography>

      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: {
            xs: '1fr',
            md: 'repeat(3, 1fr)',
          },
          gap: 3,
        }}
      >
        <Card>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Đặt lịch hẹn
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Đặt lịch hẹn với bác sĩ một cách dễ dàng
            </Typography>
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Lịch sử khám
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Xem lại lịch sử khám bệnh của bạn
            </Typography>
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Hồ sơ sức khỏe
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Quản lý thông tin sức khỏe cá nhân
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
};

export default UserHomePage;
