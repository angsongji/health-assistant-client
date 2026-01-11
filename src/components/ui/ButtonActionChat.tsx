import { useState, useRef, useEffect } from "react";
import { Menu } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";

export default function ButtonActionChat() {
  const [openMenu, setOpenMenu] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        buttonRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setOpenMenu(false);
      }
    };

    if (openMenu) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [openMenu]);

  const menuItems = [
    {
      key: "rename",
      label: "Đổi tên",
      icon: <EditOutlined />,
      onClick: () => {
        onRename();
        setOpenMenu(false);
      },
    },
    {
      key: "delete",
      label: "Xóa",
      icon: <DeleteOutlined />,
      danger: true,
      onClick: () => {
        onDelete();
        setOpenMenu(false);
      },
    },
  ];

  const onRename = () => {
    // Handle rename action
    console.log("Rename clicked");
  };

  const onDelete = () => {
    // Handle delete action
    console.log("Delete clicked");
  };

  return (
    <>
      {/* Menu button */}
      <button
        ref={buttonRef}
        onClick={() => setOpenMenu(!openMenu)}
        className="p-2 rounded-full transition-colors cursor-pointer relative"
      >
        <svg
          className="w-6 h-6 text-gray-600 hover:text-blue-500"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
        </svg>
      </button>

      {/* Dropdown Menu */}
      {openMenu && (
        <div
          ref={menuRef}
          style={{
            position: "absolute",
            top: "100%",
            right: 5,
            marginTop: 5,
            zIndex: 10,
            minWidth: 150,
          }}
          className="shadow-md rounded-xl p-1 bg-white"
        >
          <Menu mode="vertical" items={menuItems} style={{ border: "none" }} />
        </div>
      )}
    </>
  );
}
