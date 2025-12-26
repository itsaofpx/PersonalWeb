"use client";

import Icon, {
  GithubOutlined,
  HomeOutlined,
  InstagramOutlined,
  LinkedinOutlined,
  TrophyOutlined,
} from "@ant-design/icons";
import { Row } from "antd";
import { useRouter } from "next/navigation";

const iconStyle =
  "flex items-center justify-center w-11 h-11 rounded-full transition-all duration-300 cursor-pointer text-gray-600 hover:text-white hover:shadow-md";

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
          group-hover:opacity-100
          group-hover:translate-y-0
          pointer-events-none
          whitespace-nowrap
          shadow-lg
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
          group-hover:scale-110
          active:scale-95
        `}
      >
        {icon}
      </div>
    </div>
  );
};

const NavigatorBar = () => {
  const router = useRouter();
  const handleClick = (url: string) => {
    router.push(url);
  };
  return (
    <section
      className="
        fixed bottom-8 left-1/2 -translate-x-1/2
        flex items-center gap-4
        bg-white/80 backdrop-blur-xl saturate-150
        px-4 py-2
        rounded-full
        shadow-2xl border border-white/40
        z-50
      "
    >
      <IconButton
        icon={<HomeOutlined style={{ fontSize: 20 }} />}
        label="Home"
        hoverGradient="hover:bg-linear-to-br hover:from-gray-700 hover:to-gray-900"
        clickHandler={() => handleClick("/")}
      />

      <IconButton
        icon={<TrophyOutlined style={{ fontSize: 20 }} />}
        label="Certifications"
        hoverGradient="hover:bg-linear-to-br hover:from-yellow-400 hover:to-yellow-600"
        clickHandler={() => handleClick("/cert")}
      />

      <div className="h-6 w-px bg-gray-200" />

      <Row style={{ gap: 8 }}>
        <IconButton
          icon={<LinkedinOutlined style={{ fontSize: 20 }} />}
          label="LinkedIn"
          hoverGradient="hover:bg-linear-to-br hover:from-blue-500 hover:to-blue-700"
          clickHandler={() =>
            handleClick(
              "https://www.linkedin.com/in/podjanin-wachirawittayakul-293820359/"
            )
          }
        />

        <IconButton
          icon={<InstagramOutlined style={{ fontSize: 20 }} />}
          label="Instagram"
          hoverGradient="hover:bg-linear-to-br hover:from-purple-500 hover:to-pink-500"
          clickHandler={() =>
            handleClick("https://www.instagram.com/its_aofpx/")
          }
        />

        <IconButton
          icon={<GithubOutlined style={{ fontSize: 20 }} />}
          label="GitHub"
          hoverGradient="hover:bg-linear-to-br hover:from-gray-800 hover:to-black"
          clickHandler={() => handleClick("https://github.com/itsaofpx")}
        />
      </Row>
    </section>
  );
};

export default NavigatorBar;
