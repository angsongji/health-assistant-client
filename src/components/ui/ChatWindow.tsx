import { useState, useRef, useEffect } from "react";
import ChatHeader from "./ChatHeader";
import ChatMessage from "./ChatMessage";
import ChatInput from "./ChatInput";
import { sendMessageToAssistant } from "../../services/chatService";

interface Message {
  id: string;
  type: "ai" | "user";
  content: React.ReactNode;
  timestamp: string;
  event?: string; // Để lưu trữ các sự kiện như: typing | alert | recommend
}

export default function ChatWindow() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      type: "ai",
      content: (
        <div>
          <p className="mb-3">
            Xin chào! Tôi là trợ lý sức khỏe AI của bạn. Tôi có thể giúp bạn:
          </p>
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <svg
                className="w-5 h-5 text-green-600 mt-0.5 shrink-0"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
              </svg>
              <span>Tư vấn về triệu chứng và sức khỏe mức cơ bản</span>
            </li>
            <li className="flex items-start gap-2">
              <svg
                className="w-5 h-5 text-green-600 mt-0.5 shrink-0"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
              </svg>
              <span>Kết nối với bác sĩ khi cần thiết</span>
            </li>
            <li className="flex items-start gap-2">
              <svg
                className="w-5 h-5 text-green-600 mt-0.5 shrink-0"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
              </svg>
              <span>Hỗ trợ bạn đặt lịch khám với bác sĩ có chuyên môn</span>
            </li>
          </ul>
        </div>
      ),
      timestamp: new Date().toLocaleTimeString("vi-VN", {
        hour: "2-digit",
        minute: "2-digit",
      }),
    },
  ]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async (text: string) => {
    const prompt = {
      prompt: text,
      // userId: 19,
      sessionId: 20260901214700,
    };
    try {
      // Add user message
      const userMessage: Message = {
        id: crypto.randomUUID(),
        type: "user",
        content: text,
        timestamp: new Date().toLocaleTimeString("vi-VN", {
          hour: "2-digit",
          minute: "2-digit",
        }),
      };
      setMessages((prev) => [...prev, userMessage]);

      // Is handle
      const typingMessage: Message = {
        id: crypto.randomUUID(),
        type: "ai",
        content: "",
        timestamp: new Date().toLocaleTimeString("vi-VN", {
          hour: "2-digit",
          minute: "2-digit",
        }),
        event: "typing",
      };
      setMessages((prev) => [...prev, typingMessage]);

      // Call api chat with ai-assistant
      const res = await sendMessageToAssistant(prompt);

      if (res.status === 200) {
        // Add user message
        console.log("AI Response:", res.data[0]);
        console.log("AI Response:", res.data.output);
        const aiMessage: Message = {
          id: crypto.randomUUID(),
          type: "ai",
          content: res.data.output,
          timestamp: new Date().toLocaleTimeString("vi-VN", {
            hour: "2-digit",
            minute: "2-digit",
          }),
        };
        setMessages((prev) => prev.slice(0, -1));
        setMessages((prev) => [...prev, aiMessage]);
      }
    } catch (error) {
      const aiMessage: Message = {
        id: crypto.randomUUID(),
        type: "ai",
        content: (
          <p className="text-red-500">
            Hệ thống đang bị quá tải. Vui lòng thử lại sau.
          </p>
        ),
        timestamp: new Date().toLocaleTimeString("vi-VN", {
          hour: "2-digit",
          minute: "2-digit",
        }),
      };
      setMessages((prev) => prev.slice(0, -1));
      setMessages((prev) => [...prev, aiMessage]);

      console.error("Error sending message:", error);
    }
  };

  return (
    <div className="flex flex-col items-center h-screen  w-full overflow-y-auto ">
      {/* Header */}
      <ChatHeader name="AI Health Assistant" status="Đang hoạt động" />

      {/* Messages area */}
      <div className="flex-1 p-2 md:px-0 py-5 w-full md:w-[95%]">
        {/* Date divider */}
        <div className="flex justify-center mb-6">
          <span className="px-3 py-1 bg-gray-200 rounded-full text-xs text-gray-600">
            Hôm nay
          </span>
        </div>

        {/* Messages */}
        {messages.map((message) => (
          <ChatMessage
            key={message.id}
            type={message.type}
            content={message.content}
            timestamp={message.timestamp}
            event={message.event}
          />
        ))}

        <div ref={messagesEndRef} />
      </div>

      {/* Input area */}
      <ChatInput
        onSend={handleSendMessage}
        // onAttachFile={() => console.log("Attach file")}
        onAttachImage={() => console.log("Attach image")}
      />
    </div>
  );
}
