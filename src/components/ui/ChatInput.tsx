import { useState, type KeyboardEvent } from "react";
import { useThemeStore } from "../../stores/useThemeStore";
import { darkColors, lightColors } from "../../theme/colors";
import { useMediaQuery } from "react-responsive";

interface ChatInputProps {
  onSend?: (message: string) => void;
  // onAttachFile?: () => void;
  onAttachImage?: () => void;
  placeholder?: string;
  disabled?: boolean;
}

export default function ChatInput({
  onSend,
  onAttachImage,
  placeholder = "Nhập triệu chứng hoặc câu hỏi của bạn...",
  disabled = false,
}: ChatInputProps) {
  const [message, setMessage] = useState("");
  const mode = useThemeStore((state) => state.mode);
  const colors = mode === "dark" ? darkColors : lightColors;
  const isMobile = useMediaQuery({ maxWidth: 767 });
  placeholder = isMobile ? "Nhập triệu chứng..." : placeholder;

  const handleSend = () => {
    if (message.trim() && onSend) {
      onSend(message.trim());
      setMessage("");
    }
  };

  const handleKeyPress = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div
      className="sticky bottom-0 w-full p-2 md:px-0 flex justify-center"
      style={{
        backgroundColor: colors.background.primary,
      }}
    >
      <div className="w-full md:w-[95%]">
        {/* Input area */}
        <div className="flex items-end gap-3">
          {/* Attachment buttons */}
          <div className="flex gap-2 mb-2">
            {/* <button
              onClick={onAttachFile}
              disabled={disabled}
              className="cursor-pointer p-2 text-gray-600 bg-gray-100 rounded-full transition-colors disabled:opacity-50"
              title="Đính kèm file"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
                />
              </svg>
            </button> */}

            <button
              onClick={onAttachImage}
              disabled={disabled}
              className="cursor-pointer p-2 text-gray-600 bg-gray-100 rounded-full transition-colors disabled:opacity-50"
              title="Đính kèm ảnh"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </button>
          </div>

          {/* Text input */}
          <div
            className="rounded-3xl pl-4 pr-2 py-2 flex-1 relative flex items-center"
            style={{
              border: `1px solid ${colors.border.default}`,
            }}
          >
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder={placeholder}
              disabled={disabled}
              rows={1}
              className="w-full outline-none resize-none disabled:opacity-50 disabled:cursor-not-allowed"
              style={{
                minHeight: "24px",
                maxHeight: "120px",
              }}
            />

            {/* Send button */}
            <button
              onClick={handleSend}
              disabled={disabled || !message.trim()}
              className="p-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 
                   transition-colors disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
              title="Gửi"
            >
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
              </svg>
            </button>
          </div>
        </div>

        {/* Disclaimer */}
        <div
          className="text-xs mt-2 md:text-sm text-gray-500 flex justify-center"
          style={{ color: colors.text.secondary }}
        >
          <p className="w-2/3 md:w-full text-center animate-pulse">
            AI có thể mắc lỗi. Hãy tham khảo ý kiến bác sĩ khi cần thông tin y
            tế quan trọng.
          </p>
        </div>
      </div>
    </div>
  );
}
