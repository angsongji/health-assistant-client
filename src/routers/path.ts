const PATH: Record<string, string> = {
  // Base
  HOME: "/",
  LOGIN: "/login",
  SIGNUP: "/signup",
  NOT_FOUND: "*",

  // User
  BASEPATH_USER: "/user",
  USER_APPOINTMENT: "appointments", // /user/appointments

  // Doctor
  BASEPATH_DOCTOR: "/doctor",
  DOCTOR_APPOINTMENT: "appointments", // /doctor/appointments

  // Admin
  BASEPATH_ADMIN: "/admin",
  ADMIN_USER: "users", // /admin/users

  // Test
  BASEPATH_TEST: "/test",
  TEST_CHAT_WINDOW: "chat-window",
};

export default PATH;
