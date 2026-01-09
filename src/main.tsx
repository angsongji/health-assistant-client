import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./routers";
import "./global.css";
import { ThemeProvider } from "./components/providers/ThemeProvider";
// import FloatingSettingsButton from './components/common/FloatingSettingsButton';

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
      {/* <FloatingSettingsButton /> */}
    </ThemeProvider>
  </StrictMode>
);
