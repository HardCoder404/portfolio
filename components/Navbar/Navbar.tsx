"use client"; // only if you're in Next.js App Router

import { useState } from "react";
import { Tooltip } from "antd";
import Link from "next/link";
import { useRouter } from "next/router"; // if App Router, use next/navigation
import {
  BugOff,
  FolderOpenDot,
  GraduationCap,
  LayoutDashboard,
  PhoneIncoming,
} from "lucide-react";

function Navbar() {
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  const router = useRouter();

  const icons = [
    { icon: <LayoutDashboard size={22} />, label: "Dashboard", path: "/" },
    {
      icon: <PhoneIncoming size={22} />,
      label: "Contact Me",
      path: "/contact",
    },
    {
      icon: <GraduationCap size={22} />,
      label: "Background",
      path: "/background",
    },
    {
      icon: <FolderOpenDot size={22} />,
      label: "Projects",
      path: "/portfolio",
    },
    {
      icon: <BugOff size={22} />,
      label: "Problem Solving",
      path: "/problemSolvingSkill",
    },
  ];

  return (
    <main>
      <div className="flex flex-col gap-4 rounded-lg items-center">
        {icons.map((item, index) => {
          let scale = 1;
          if (hoverIndex !== null) {
            const diff = Math.abs(hoverIndex - index);
            if (diff === 0) scale = 1.3;
            if (diff === 1) scale = 1.05;
          }

          const isActive = router.asPath === item.path;

          return (
            <Tooltip key={index} placement="left" title={item.label}>
              <Link
                href={item.path}
                onMouseEnter={() => setHoverIndex(index)}
                onMouseLeave={() => setHoverIndex(null)}
                className={`rounded-full p-3 flex items-center justify-center cursor-pointer transition-all duration-300 ease-in-out
                  ${
                    isActive
                      ? "bg-green-500 text-white"
                      : "bg-black/50 text-white/40 hover:bg-green-500 hover:text-white"
                  }`}
                style={{
                  transform: `scale(${scale})`,
                  zIndex: hoverIndex === index ? 10 : 1,
                }}
              >
                {item.icon}
              </Link>
            </Tooltip>
          );
        })}
      </div>
    </main>
  );
}

export default Navbar;
