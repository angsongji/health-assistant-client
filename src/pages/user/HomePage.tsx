import { Box, Typography, Grid, Card, CardContent } from "@mui/material";

const UserHomePage = () => {
  return (
    <Box>
      <Typography variant="h4" component="h1" gutterBottom>
        Trang chủ
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
        Chào mừng đến với Health Assistant
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
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
        </Grid>
        <Grid item xs={12} md={4}>
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
        </Grid>
        <Grid item xs={12} md={4}>
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
        </Grid>
      </Grid>
    </Box>
  );
};

export default UserHomePage;

