import axiosClient from "./axiosClient";

// const rootAPI = "/chats";
const rootAPI_Assistant = "/webhook/ai-assistant";
const sendMessageToAssistant = (data: any) =>
  axiosClient.post(`${rootAPI_Assistant}`, data);

export { sendMessageToAssistant };
