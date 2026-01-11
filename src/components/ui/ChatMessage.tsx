import { type ReactNode } from "react";

interface ChatMessageProps {
  type: "ai" | "user";
  content: ReactNode;
  timestamp: string;
  avatarUrl?: string;
  event?: string;
}

interface HealthAlertProps {
  title: string;
  description: string;
  recommendations: string[];
  icon?: ReactNode;
}

interface QuickActionButtonProps {
  icon: ReactNode;
  label: string;
  onClick?: () => void;
  variant?: "primary" | "success";
}

function TypingIndicator() {
  return (
    <div className="flex items-center gap-1">
      <div
        className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
        style={{ animationDelay: "0ms" }}
      ></div>
      <div
        className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
        style={{ animationDelay: "150ms" }}
      ></div>
      <div
        className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
        style={{ animationDelay: "300ms" }}
      ></div>
    </div>
  );
}

function HealthAlert({
  title,
  description,
  recommendations,
  icon,
}: HealthAlertProps) {
  return (
    <div className="bg-orange-50 border-l-4 border-orange-500 rounded-lg p-4 my-3">
      <div className="flex items-start gap-3">
        {/* Warning icon */}
        <div className="flex-shrink-0 mt-0.5">
          {icon || (
            <svg
              className="w-5 h-5 text-orange-600"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z" />
            </svg>
          )}
        </div>

        {/* Content */}
        <div className="flex-1">
          <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
            {title}
          </h4>
          <p className="text-sm text-gray-700 mb-3">{description}</p>

          {/* Recommendations list */}
          <ul className="space-y-1.5">
            {recommendations.map((item, index) => (
              <li
                key={index}
                className="text-sm text-gray-700 flex items-start gap-2"
              >
                <svg
                  className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                </svg>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

function QuickActionButton({
  icon,
  label,
  onClick,
  variant = "primary",
}: QuickActionButtonProps) {
  const variantStyles = {
    primary: "border-blue-500 text-blue-600 hover:bg-blue-50",
    success: "border-green-500 text-green-600 hover:bg-green-50",
  };

  return (
    <button
      onClick={onClick}
      className={`
        inline-flex items-center gap-2 px-4 py-2 rounded-full 
        border-2 font-medium transition-colors
        ${variantStyles[variant]}
      `}
    >
      {icon}
      <span>{label}</span>
    </button>
  );
}

export default function ChatMessage({
  type,
  content,
  timestamp,
  avatarUrl,
  event,
}: ChatMessageProps) {
  const isAI = type === "ai";

  return (
    <div className={`flex mb-4 ${isAI ? "flex-row" : "flex-row-reverse"}`}>
      {/* Avatar */}
      <div className="shrink-0">
        <div
          className={`rounded-full flex items-center justify-center ${
            isAI ? "bg-blue-500" : "bg-linear-to-br from-blue-500 to-purple-600"
          }`}
        >
          {avatarUrl ? (
            <img
              src={avatarUrl}
              alt="avatar"
              className="w-7 h-7 md:w-10 md:h-10 rounded-full"
            />
          ) : isAI ? (
            <img
              src="/logo.svg"
              alt="avatar"
              className="w-7 h-7 md:w-10 md:h-10 rounded-full"
            />
          ) : (
            <></>
          )}
        </div>
      </div>

      {/* Message bubble */}
      <div
        className={`flex flex-col ${
          isAI ? "items-start max-w-[80%]" : "items-end max-w-[70%]"
        }`}
      >
        <div
          className={`text-sm md:text-md rounded-2xl px-4 py-2 ml-3 leading-loose ${
            isAI
              ? "border border-gray-200 bg-white text-gray-900 rounded-tl-none"
              : "bg-blue-600 text-white rounded-tr-none"
          }`}
        >
          {content}
          {event && event === "typing" && <TypingIndicator />}
          {/* <TypingIndicator /> */}
          {/* <HealthAlert
            title="Cảnh báo sức khỏe"
            description="Dựa trên triệu chứng của bạn, tôi nhận thấy bạn có thể đang bị căng thẳng và thiếu ngủ. Tuy nhiên, để chẩn đoán chính xác, tôi khuyên bạn nên:"
            recommendations={[
              "Gặp bác sĩ để khám tổng quát",
              "Nghỉ ngơi đầy đủ 7-8 tiếng/ngày",
              "Giảm căng thẳng công việc",
              "Uống đủ nước, ăn uống điều độ",
            ]}
          /> */}
          {/* <div className="flex flex-wrap gap-2">
            <QuickActionButton
              icon={
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                </svg>
              }
              label="Kết nối bác sĩ"
              variant="success"
              onClick={() => console.log("Connect to doctor")}
            />
            <QuickActionButton
              icon={
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zM9 14H7v-2h2v2zm4 0h-2v-2h2v2zm4 0h-2v-2h2v2zm-8 4H7v-2h2v2zm4 0h-2v-2h2v2zm4 0h-2v-2h2v2z" />
                </svg>
              }
              label="Đặt lịch khám"
              variant="success"
              onClick={() => console.log("Book appointment")}
            />
            <QuickActionButton
              icon={
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
                </svg>
              }
              label="Lời khuyên khác"
              variant="success"
              onClick={() => console.log("More advice")}
            />
          </div> */}
        </div>
        <span className="text-xs text-gray-500 mt-1 px-2">{timestamp}</span>
      </div>
    </div>
  );
}
