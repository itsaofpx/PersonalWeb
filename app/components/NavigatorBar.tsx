"use client";

import {
  GithubOutlined,
  HomeOutlined,
  InstagramOutlined,
  LinkedinOutlined,
  SpotifyOutlined,
  TrophyOutlined,
} from "@ant-design/icons";
import { useRouter } from "next/navigation";

// Tighter sizing for mobile (w-9) scaling up to desktop (sm:w-11)
const iconStyle =
  "flex items-center justify-center w-9 h-9 sm:w-11 sm:h-11 rounded-full transition-all duration-300 cursor-pointer text-gray-600 hover:text-white hover:shadow-md";

const IconButton = ({
  icon,
  label,
  hoverGradient,
  clickHandler,
}: {
  icon: React.ReactNode;
  label: string;
  hoverGradient: string;
  clickHandler?: () => void;
}) => {
  return (
    <div className="group relative flex items-center justify-center">
      <span
        className="
          absolute -top-10
          px-3 py-1 text-xs font-medium
          bg-gray-800 text-white rounded-full
          opacity-0 translate-y-2
          transition-all duration-200
          hidden sm:group-hover:block sm:group-hover:opacity-100
          sm:group-hover:translate-y-0
          pointer-events-none
          whitespace-nowrap
          shadow-lg
          z-60
        "
      >
        {label}
        <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-gray-800 rotate-45"></span>
      </span>

      <div
        onClick={clickHandler}
        className={`
          ${iconStyle}
          ${hoverGradient}
          hover:scale-110
          active:scale-95
        `}
      >
        <div className="text-[16px] sm:text-[20px] flex items-center justify-center">
          {icon}
        </div>
      </div>
    </div>
  );
};

const NavigatorBar = () => {
  const router = useRouter();

  const handleClick = (url: string) => {
    if (url.startsWith("http")) {
      window.open(url, "_blank");
    } else {
      router.push(url);
    }
  };

  return (
    <section
      className="
        fixed bottom-6 left-1/2 -translate-x-1/2
        flex items-center gap-1 sm:gap-4
        bg-white/80 backdrop-blur-xl saturate-150
        px-2 py-2 sm:px-4
        rounded-full
        shadow-2xl border border-white/40
        z-50
        w-fit whitespace-nowrap
      "
    >
      <div className="flex items-center gap-1 sm:gap-2">
        <IconButton
          icon={<HomeOutlined />}
          label="Home"
          hoverGradient="hover:bg-linear-to-br hover:from-gray-700 hover:to-gray-900"
          clickHandler={() => handleClick("/")}
        />

        <IconButton
          icon={<TrophyOutlined />}
          label="Certifications"
          hoverGradient="hover:bg-linear-to-br hover:from-yellow-400 hover:to-yellow-600"
          clickHandler={() => handleClick("/cert")}
        />
      </div>

      <div className="h-5 w-px bg-gray-300 mx-1" />

      <div className="flex items-center gap-1 sm:gap-2 flex-nowrap">
        <IconButton
          icon={<LinkedinOutlined />}
          label="LinkedIn"
          hoverGradient="hover:bg-linear-to-br hover:from-blue-500 hover:to-blue-700"
          clickHandler={() =>
            handleClick(
              "https://www.linkedin.com/in/podjanin-wachirawittayakul-293820359/"
            )
          }
        />

        <IconButton
          icon={<InstagramOutlined />}
          label="Instagram"
          hoverGradient="hover:bg-linear-to-br hover:from-purple-500 hover:to-pink-500"
          clickHandler={() =>
            handleClick("https://www.instagram.com/its_aofpx/")
          }
        />

        <IconButton
          icon={<GithubOutlined />}
          label="GitHub"
          hoverGradient="hover:bg-linear-to-br hover:from-gray-800 hover:to-black"
          clickHandler={() => handleClick("https://github.com/itsaofpx")}
        />

        <IconButton
        icon={ <SpotifyOutlined />}
        label="Spotify"
        hoverGradient="hover:bg-linear-to-br hover:from-green-500 hover:to-green-700"
        clickHandler={() =>
          handleClick("https://open.spotify.com/user/31wnv7vgb2tj5xzngjzyb6izg5qy?si=681ff2b8a2b04e9d")
        }
        />
      </div>
    </section>
  );
};

export default NavigatorBar;
