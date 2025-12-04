import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import PATH from "../routers/path";

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        gap: 2,
      }}
    >
      <Typography variant="h1" component="h1" fontWeight="bold">
        404
      </Typography>
      <Typography variant="h5" component="h2">
        Trang không tìm thấy
      </Typography>
      <Typography variant="body1" color="text.secondary">
        Trang bạn đang tìm kiếm không tồn tại hoặc đã bị di chuyển.
      </Typography>
      <Button
        variant="contained"
        onClick={() => navigate(PATH.HOME)}
        sx={{ mt: 2 }}
      >
        Về trang chủ
      </Button>
    </Box>
  );
};

export default NotFoundPage;

