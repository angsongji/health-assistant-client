import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import { CircularProgress, Box } from "@mui/material";

const LoadingFallback = () => (
  <Box className="h-screen w-full flex items-center justify-center bg-gray-50">
    <CircularProgress />
  </Box>
);

const RootLayout = () => {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <Outlet />
    </Suspense>
  );
};

export default RootLayout;