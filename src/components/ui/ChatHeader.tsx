import { useThemeStore } from "../../stores/useThemeStore";
import { darkColors, lightColors } from "../../theme/colors";
import ButtonActionChat from "./ButtonActionChat";

interface ChatHeaderProps {
  name: string;
  status: string;
  avatarUrl?: string;
  // onMenuClick?: () => void;
}

export default function ChatHeader({
  name,
  status,
  avatarUrl,
}: ChatHeaderProps) {
  const mode = useThemeStore((state) => state.mode);
  const colors = mode === "dark" ? darkColors : lightColors;
  return (
    <div className="sticky top-0 w-full flex justify-center bg-white shadow-sm px-2 md:px-0 py-3 md:py-4 z-1">
      <div className="flex items-center justify-between gap-3 w-full md:w-[95%]">
        <div className="flex items-center gap-3">
          {/* Avatar */}
          <div className="relative">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-500 rounded-full flex items-center justify-center">
              {avatarUrl ? (
                <img
                  src={avatarUrl}
                  alt={name}
                  className="w-full h-full rounded-full"
                />
              ) : (
                <img
                  src="/logo.svg"
                  alt="avatar"
                  className="w-full h-full rounded-full"
                />
              )}
            </div>
            {/* Online status indicator */}
            <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
          </div>

          {/* Name and status */}
          <div>
            <h2
              className="font-semibold"
              style={{ color: colors.text.primary }}
            >
              {name}
            </h2>
            <div className="flex items-center gap-1 text-xs md:text-sm text-green-500">
              <span>{status}</span>
            </div>
          </div>
        </div>
        <ButtonActionChat />
      </div>
    </div>
  );
}
