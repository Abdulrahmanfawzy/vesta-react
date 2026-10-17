import api from "./services/api";

api
  .post("/auth/login", {
    email: "test@example.com",
    password: "test-password",
    device_name: "web",
  })
  .then((response) => {
    console.log("API response:", response.status, response.data);
  })
  .catch((error) => {
    console.error("API test failed:", {
      message: error.message,
      code: error.code,
      status: error.response?.status,
      data: error.response?.data,
    });
  });