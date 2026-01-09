import type { ReactNode } from "react";
import { Col } from "antd";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";
import PATH from "../routers/path";
import AuthIntro from "../components/common/AuthIntro";
import { useMediaQuery } from "react-responsive";

interface AuthLayoutProps {
  children: ReactNode;
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  const location = useLocation();
  const isLoginPage = location.pathname === PATH.LOGIN;
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const durationTime: number = 0.4;
  // Animation variants cho form panel
  const formVariants = {
    initial: (isLogin: boolean) => ({
      x: isLogin ? "100%" : "-100%",
      opacity: 0,
    }),
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        delay: isMobile ? 0 : durationTime - 0.1,
        duration: durationTime,
        ease: [0.4, 0, 0.2, 1] as const,
      },
    },
    exit: (isLogin: boolean) => ({
      x: isLogin ? 100 : -100,
      opacity: 0,
      transition: {
        duration: durationTime,
        ease: [0.4, 0, 0.2, 1] as const,
      },
    }),
  };

  // Animation variants cho intro panel
  const introVariants = {
    initial: (isLogin: boolean) => ({
      x: isLogin ? "100%" : "-100%",
    }),
    animate: {
      x: 0,
      transition: {
        duration: durationTime,
        ease: [0.4, 0, 0.2, 1] as const,
      },
    },
    exit: () => ({
      transition: {
        duration: durationTime,
        ease: [0.4, 0, 0.2, 1] as const,
      },
    }),
  };

  return (
    <div style={{ minHeight: "100vh" }}>
      <div className="flex relative min-w-screen max-h-screen overflow-x-hidden overflow-auto">
        {/* Intro Panel - Left for Login, Right for SignUp */}
        <Col
          xs={0}
          md={12}
          style={{
            order: isLoginPage ? 1 : 2,
            minHeight: "100vh",
            position: "sticky",
            top: 0,
            height: "100vh",
          }}
        >
          <AnimatePresence mode="wait" custom={isLoginPage}>
            <motion.div
              key={`intro-${location.pathname}`}
              custom={isLoginPage}
              variants={introVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              style={{ height: "100%" }}
            >
              <AuthIntro />
            </motion.div>
          </AnimatePresence>
        </Col>

        {/* Form Panel - Right for Login, Left for SignUp */}
        <Col
          xs={24}
          md={12}
          style={{
            order: isLoginPage ? 2 : 1,
            minHeight: "100vh",
          }}
        >
          <AnimatePresence mode="wait" custom={isLoginPage}>
            <motion.div
              key={location.pathname}
              custom={isLoginPage}
              variants={formVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              style={{ height: "100%" }}
            >
              <div className="flex flex-col">{children}</div>
            </motion.div>
          </AnimatePresence>
        </Col>
      </div>
    </div>
  );
};

export default AuthLayout;
