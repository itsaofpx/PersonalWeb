"use client";

import {
  BulbOutlined,
  EnvironmentOutlined,
  RocketOutlined,
  SafetyCertificateOutlined,
  SmileOutlined,
  TeamOutlined,
} from "@ant-design/icons";
import Image from "next/image";
import { aboutData } from "../data/data";

const valueIcons: Record<string, React.ReactNode> = {
  rocket: <RocketOutlined />,
  team: <TeamOutlined />,
  bulb: <BulbOutlined />,
  safety: <SafetyCertificateOutlined />,
};

const AboutHero = () => {
  const {
    name,
    nickname,
    role,
    photo,
    location,
    availability,
    tagline,
    summary,
    highlights,
    values,
    workingStyle,
    seeking,
  } = aboutData;

  return (
    <section className="flex flex-col gap-12">
      {/* ── Intro ── */}
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 text-center sm:text-left">
        <div
          className="flex-shrink-0 rounded-2xl overflow-hidden"
          style={{
            width: 104,
            height: 104,
            border: "2px solid var(--color-border)",
            background: "var(--color-surface)",
          }}
        >
          <Image
            src={photo}
            alt={name}
            width={104}
            height={104}
            className="w-full h-full object-contain p-2"
            priority
          />
        </div>

        <div className="flex-1 min-w-0">
          <p
            className="uppercase tracking-[2.5px] text-[#c8a882] mb-2 text-[13px] font-medium"
            style={{ fontFamily: "var(--font-body)" }}
          >
            About Me
          </p>
          <h1
            className="text-[28px] md:text-[34px] text-[#2d2520] tracking-[-0.5px] leading-[1.15]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {name}
          </h1>
          <p className="text-[14px] text-[#4a3728] font-semibold mt-1">
            {role} <span className="text-[#b0a090] font-normal">· "{nickname}"</span>
          </p>

          <div className="flex flex-wrap gap-2 justify-center sm:justify-start mt-3.5">
            <span className="text-[11px] font-medium text-[#6b5a4e] bg-[#f5f0ea] border border-[#ede9e3] px-2.5 py-1 rounded-full flex items-center gap-1.5">
              <EnvironmentOutlined style={{ fontSize: 11, color: "#c8a882" }} />
              {location}
            </span>
            <span className="text-[11px] font-medium text-[#2e7d5c] bg-[#edfbf3] border border-[#b6e8d0] px-2.5 py-1 rounded-full flex items-center gap-1.5">
              <SmileOutlined style={{ fontSize: 11 }} />
              {availability}
            </span>
          </div>
        </div>
      </div>

      <p
        className="text-[16px] text-[#a89880] font-light italic leading-[1.7] -mt-4"
        style={{ fontFamily: "var(--font-body)" }}
      >
        {tagline}
      </p>

      {/* ── Highlights ── */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {highlights.map((h, i) => (
          <div
            key={i}
            className="rounded-2xl border-[1.5px] border-[#ede9e3] bg-[#faf9f7] px-3 py-4 text-center transition-all duration-200 hover:border-[#c8b99a] hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)]"
          >
            <p
              className="text-[26px] leading-none text-[#2d2520] m-0"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {h.value}
            </p>
            <p className="text-[11px] text-[#a89880] font-medium mt-1.5 m-0 uppercase tracking-[0.5px]">
              {h.label}
            </p>
          </div>
        ))}
      </div>

      {/* ── Professional Summary ── */}
      <div>
        <div className="mb-6">
          <h2 className="section-heading">Professional Summary</h2>
          <div className="section-rule" />
        </div>
        <div className="flex flex-col gap-4">
          {summary.map((p, i) => (
            <p key={i} className="text-[14px] text-[#6b5a4e] leading-[1.75] m-0">
              {p}
            </p>
          ))}
        </div>
      </div>

      {/* ── What Drives Me ── */}
      <div>
        <div className="mb-6">
          <h2 className="section-heading">What Drives Me</h2>
          <div className="section-rule" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {values.map((v, i) => (
            <div
              key={i}
              className="rounded-2xl border-[1.5px] border-[#ede9e3] bg-white p-5 transition-all duration-200 hover:border-[#c8b99a] hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)]"
            >
              <div className="icon-box mb-3">{valueIcons[v.icon]}</div>
              <p
                className="text-[15px] text-[#2d2520] m-0 mb-1.5"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {v.title}
              </p>
              <p className="text-[13px] text-[#6b5a4e] leading-[1.6] m-0">{v.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── How I Work ── */}
      <div>
        <div className="mb-6">
          <h2 className="section-heading">How I Work</h2>
          <div className="section-rule" />
        </div>
        <div className="exp-card">
          <div className="card-accent-bar" />
          <div className="flex flex-col gap-3">
            {workingStyle.map((s, i) => (
              <div key={i} className="flex gap-3 items-start">
                <div className="w-[6px] h-[6px] rounded-full bg-[#c8a882] flex-shrink-0 mt-[7px]" />
                <p className="text-[13.5px] text-[#6b5a4e] m-0 leading-[1.6]">{s}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── What I'm Looking For ── */}
      <div>
        <div className="mb-6">
          <h2 className="section-heading">What I'm Looking For</h2>
          <div className="section-rule" />
        </div>
        <div
          className="rounded-2xl p-6 sm:p-7"
          style={{
            background: "linear-gradient(135deg, #2d2520 0%, #4a3728 100%)",
            boxShadow: "0 8px 32px rgba(45,37,32,0.18)",
          }}
        >
          <p
            className="text-[15px] text-[#f5efe6] leading-[1.75] m-0"
            style={{ fontFamily: "var(--font-body)" }}
          >
            {seeking}
          </p>
          <a
            href="/data/resume/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-5 px-5 py-2.5 rounded-full text-[13px] font-semibold transition-all duration-200 hover:-translate-y-0.5"
            style={{ background: "#f5efe6", color: "#2d2520" }}
          >
            <RocketOutlined style={{ fontSize: 13 }} />
            View My Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
