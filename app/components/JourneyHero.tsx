"use client";

import {
  EnvironmentOutlined,
  GlobalOutlined,
  LaptopOutlined,
  ReadOutlined,
  RocketOutlined,
  TrophyOutlined,
} from "@ant-design/icons";
import { journey } from "../data/data";

type Milestone = (typeof journey.milestones)[number];

const typeStyles: Record<
  string,
  { icon: React.ReactNode; dot: string; bg: string; text: string; border: string; label: string }
> = {
  education: {
    icon: <ReadOutlined />,
    dot: "linear-gradient(135deg, #3b6fd4, #2a55ad)",
    bg: "#eef4ff",
    text: "#3b6fd4",
    border: "#c5d9f9",
    label: "Education",
  },
  work: {
    icon: <LaptopOutlined />,
    dot: "linear-gradient(135deg, #c8a882, #8c6a4a)",
    bg: "#f5f0ea",
    text: "#8c6a4a",
    border: "#e8d5be",
    label: "Experience",
  },
  exchange: {
    icon: <GlobalOutlined />,
    dot: "linear-gradient(135deg, #e0912f, #c2700f)",
    bg: "#fff7ed",
    text: "#c2700f",
    border: "#f9d9a8",
    label: "Exchange",
  },
  achievement: {
    icon: <TrophyOutlined />,
    dot: "linear-gradient(135deg, #eab308, #ca9a04)",
    bg: "#fefbe8",
    text: "#a17d05",
    border: "#f5e79e",
    label: "Achievement",
  },
  now: {
    icon: <RocketOutlined />,
    dot: "linear-gradient(135deg, #2e9d6c, #1f7d54)",
    bg: "#edfbf3",
    text: "#2e7d5c",
    border: "#b6e8d0",
    label: "Now",
  },
};

const TimelineNode = ({ m, isLast }: { m: Milestone; isLast: boolean }) => {
  const s = typeStyles[m.type] || typeStyles.work;

  return (
    <div className="relative flex gap-4 sm:gap-6">
      {/* Rail + dot */}
      <div className="relative flex flex-col items-center flex-shrink-0">
        <div
          className="flex items-center justify-center rounded-full text-white z-10"
          style={{
            width: 44,
            height: 44,
            background: s.dot,
            boxShadow: "0 4px 12px rgba(45,37,32,0.15), 0 0 0 4px #fff",
            fontSize: 17,
          }}
        >
          {s.icon}
        </div>
        {!isLast && (
          <div
            className="w-[2px] flex-1 my-1"
            style={{
              background: "linear-gradient(to bottom, #e4ddd6, #ede9e3)",
              minHeight: 24,
            }}
          />
        )}
      </div>

      {/* Card */}
      <div className={`flex-1 min-w-0 ${isLast ? "pb-1" : "pb-8"}`}>
        <div className="exp-card" style={{ position: "relative" }}>
          <div className="card-accent-bar" style={{ background: s.dot }} />

          <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
            <span
              className="text-[10px] font-semibold px-2.5 py-0.5 rounded-full tracking-[0.3px]"
              style={{ background: s.bg, color: s.text, border: `1px solid ${s.border}` }}
            >
              {s.label}
            </span>
            <span className="text-[11px] text-[#a89880] bg-[#f5f0ea] border border-[#ede9e3] px-2.5 py-0.5 rounded-md font-medium whitespace-nowrap">
              {m.period}
            </span>
          </div>

          <h3
            className="text-[16px] sm:text-[17px] text-[#2d2520] m-0 leading-snug"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {m.title}
          </h3>

          <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5 mt-1">
            <span className="text-[13px] text-[#4a3728] font-semibold">{m.org}</span>
            <span className="text-[11px] text-[#b0a090] flex items-center gap-1">
              <EnvironmentOutlined style={{ fontSize: 10 }} />
              {m.location}
            </span>
          </div>

          <p className="text-[13px] text-[#6b5a4e] leading-[1.65] m-0 mt-3">{m.blurb}</p>
        </div>
      </div>
    </div>
  );
};

const JourneyHero = () => {
  return (
    <section>
      {/* Header */}
      <div className="text-center mb-8">
        <p
          className="uppercase tracking-[2.5px] text-[#c8a882] mb-2 text-[13px] font-medium"
          style={{ fontFamily: "var(--font-body)" }}
        >
          The Path So Far
        </p>
        <h1
          className="text-[28px] md:text-[34px] text-[#2d2520] tracking-[-0.5px] leading-[1.15]"
          style={{ fontFamily: "var(--font-display)" }}
        >
          My Journey
        </h1>
        <div className="w-12 h-[2px] bg-gradient-to-r from-[#c8a882] to-[#8c6a4a] rounded-full mx-auto mt-4 mb-4" />
        <p
          className="text-[14px] text-[#a89880] font-light italic leading-[1.7] max-w-[560px] mx-auto"
          style={{ fontFamily: "var(--font-body)" }}
        >
          {journey.intro}
        </p>
      </div>

      {/* Timeline */}
      <div className="mt-10">
        {journey.milestones.map((m, i) => (
          <TimelineNode key={i} m={m} isLast={i === journey.milestones.length - 1} />
        ))}
      </div>
    </section>
  );
};

export default JourneyHero;
