import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import { Spin, Flex } from "antd";

const LoadingFallback = () => (
  <Flex
    align="center"
    justify="center"
    style={{
      height: "100vh",
      width: "100%",
    }}
  >
    <Spin size="large" />
  </Flex>
);

const RootLayout = () => {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <Outlet />
    </Suspense>
  );
};

export default RootLayout;
