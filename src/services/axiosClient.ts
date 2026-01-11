import axios from "axios";

const axiosClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:8080/api",
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 10000,
});
``;

// Interceptor cho Request (Gắn Token)
// axiosClient.interceptors.request.use(
//   (config) => {
//     const token = localStorage.getItem('accessToken');
//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
//   },
//   (error) => Promise.reject(error)
// );

// Interceptor cho Response (Xử lý lỗi 401, data wrapper)
// axiosClient.interceptors.response.use(
//   (response) => {
//     // Trả về data trực tiếp nếu API wrap dạng { data: ... }
//     return response.data;
//   },
//   (error) => {
//     if (error.response?.status === 401) {
//       // Logic logout khi hết hạn token
//       localStorage.removeItem('accessToken');
//       window.location.href = '/login';
//     }
//     return Promise.reject(error);
//   }
// );

export default axiosClient;
