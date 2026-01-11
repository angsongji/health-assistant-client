import { Col } from "antd";
import { motion, AnimatePresence } from "framer-motion";
import { Outlet, useLocation } from "react-router-dom";
import PATH from "../routers/path";
import AuthIntro from "../components/common/AuthIntro";
import { useMediaQuery } from "react-responsive";

const AuthLayout = () => {
  const location = useLocation();
  // Check if current page is Login (both "/" and "/login")
  const isLoginPage =
    location.pathname === PATH.LOGIN || location.pathname === "/";
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const durationTime: number = isMobile ? 0.2 : 0.5;
  // Animation variants cho form panel
  const formVariants = {
    initial: (isLogin: boolean) => ({
      x: isLogin ? "-100%" : "100%",
      opacity: 0,
    }),
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        delay: isMobile ? 0 : 0.1,
        duration: durationTime,
        ease: [0.43, 0.13, 0.23, 0.96] as const,
      },
    },
    exit: () => ({
      opacity: 0,
      transition: {
        duration: 0,
        ease: [0.43, 0.13, 0.23, 0.96] as const,
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
      opacity: 1,
      transition: {
        duration: durationTime,
        ease: [0.43, 0.13, 0.23, 0.96] as const,
      },
    },
    exit: () => ({
      opacity: 0,
      transition: {
        duration: 0,
        ease: [0.43, 0.13, 0.23, 0.96] as const,
      },
    }),
  };

  return (
    <div style={{ minHeight: "100vh", position: "relative" }}>
      <div
        className="flex relative min-h-screen w-full"
        style={{ overflow: "hidden" }}
      >
        {/* Intro Panel - Left for Login, Right for SignUp */}
        <Col
          xs={0}
          md={12}
          style={{
            order: 2,
            minHeight: "100vh",
            position: "relative",
            height: "100vh",
          }}
        >
          <AnimatePresence mode="sync" custom={isLoginPage}>
            <motion.div
              key={`intro-${isLoginPage ? "login" : "signup"}`}
              custom={isLoginPage}
              variants={introVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              style={{
                height: "100%",
                width: "100%",
                position: "absolute",
                top: 0,
                left: 0,
              }}
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
            position: "relative",
          }}
        >
          <AnimatePresence
            mode={isMobile ? "popLayout" : "sync"}
            custom={isLoginPage}
          >
            <motion.div
              key={`form-${isLoginPage ? "login" : "signup"}`}
              custom={isLoginPage}
              variants={formVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              style={{
                height: "100%",
                width: "100%",
                position: "absolute",
                top: 0,
                left: 0,
              }}
            >
              <div className="flex flex-col min-h-screen">
                <Outlet />
              </div>
            </motion.div>
          </AnimatePresence>
        </Col>
      </div>
    </div>
  );
};

export default AuthLayout;
