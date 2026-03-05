"use client";

import { Collapse } from "antd";
import { jobExperience } from "../data/data";

const employmentColors: Record<string, { bg: string; text: string; border: string }> = {
  Internship: { bg: "#eef4ff", text: "#3b6fd4", border: "#c5d9f9" },
  Exchange: { bg: "#fff7ed", text: "#c2700f", border: "#f9d9a8" },
  default: { bg: "#edfbf3", text: "#2e7d5c", border: "#b6e8d0" },
};

type Job = (typeof jobExperience)[number];

const JobResponsibilities = ({ description }: { description: string[] }) => (
  <div className="mt-1 pt-1">
    {/* gradient divider */}
    <div className="h-px w-full bg-gradient-to-r from-[#cdc9c3] to-[#ede9e3] mb-3"></div>

    <Collapse
      ghost
      bordered={false}
      className="exp-collapse"
      style={{ marginLeft: 4 }}
      items={[
        {
          key: "1",
          label: <span className="collapse-label">See responsibilities</span>,
          children: (
            <div className="flex flex-col gap-2 pl-1 pt-1">
              {description.map((d, i) => (
                <div key={i} className="flex gap-2.5 items-start">
                  <div className="w-[5px] h-[5px] rounded-full bg-[#c8a882] flex-shrink-0 mt-[7px]" />
                  <p className="text-[13px] text-[#6b5a4e] m-0 leading-[1.6]">
                    {d}
                  </p>
                </div>
              ))}
            </div>
          ),
        },
      ]}
    />
  </div>
);

const VerticalDivider = () => (
  <div className="w-px self-stretch bg-gradient-to-b from-[#ede9e3] to-transparent rounded-full flex-shrink-0 ml-1 mr-4" />
);

const EmploymentTag = ({ type }: { type: string }) => {
  const tagStyle = employmentColors[type] || employmentColors.default;
  return (
    <span
      className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full tracking-[0.3px] inline-block"
      style={{ background: tagStyle.bg, color: tagStyle.text, border: `1px solid ${tagStyle.border}` }}
    >
      {type}
    </span>
  );
};

const DesktopJobCard = ({ job }: { job: Job }) => (
  <div className="hidden sm:flex items-start">
    {/* Logo */}
    <div className="w-24 h-24 flex-shrink-0 flex items-center justify-center">
      <img src={job.picture} alt={job.company} className="w-full h-full object-cover" />
    </div>

    <VerticalDivider />

    {/* Content */}
    <div className="flex-1 min-w-0">
      {/* Row 1: Company ---- Duration */}
      <div className="flex items-baseline justify-between">
        <div className="text-[16px] text-[#2d2520] m-0 leading-snug font-semibold truncate tracking-wider" style={{ fontFamily: "var(--font-display)" }}>
          {job.company}
        </div>
        <span className="text-[11px] text-[#a89880] bg-[#f5f0ea] border border-[#ede9e3] px-2.5 py-0.5 rounded-md flex-shrink-0 font-medium whitespace-nowrap">
          {job.duration}
        </span>
      </div>

      {/* Row 2: Position ---- Location */}
      <div className="flex items-baseline justify-between gap-2 mt-0.5">
        <div className="text-[13px] text-[#4a3728] m-0 font-semibold truncate">
          {job.position}
        </div>
        <span className="text-[11px] text-[#b0a090] flex-shrink-0 whitespace-nowrap">
          {job.location}
        </span>
      </div>

      {/* Row 3: Employment tag */}
      <div className="mt-2">
        <EmploymentTag type={job.employmentType} />
      </div>
    </div>
  </div>
);

const MobileJobCard = ({ job }: { job: Job }) => (
  <div className="flex sm:hidden items-start gap-4">
    {/* Logo */}
    <div className="w-20 h-20 overflow-hidden flex-shrink-0 flex items-center justify-center">
      <img src={job.picture} alt={job.company} className="w-full h-full object-cover" />
    </div>

    <VerticalDivider />

    {/* Stacked content */}
    <div className="flex-1 min-w-0">
      <div className="text-[15px] text-[#2d2520] m-0 leading-snug font-semibold" style={{ fontFamily: "var(--font-display)" }}>
        {job.company}
      </div>

      <p className="text-[11px] text-[#b0a090] flex-shrink-0 whitespace-nowrap">{job.location}</p>

      <div className="text-[13px] text-[#4a3728] m-0 mt-0.5 font-semibold">
        {job.position}
      </div>

      <div className="flex items-center gap-1.5 mt-1.5 flex-wrap">
        <span className="text-[11px] text-[#a89880] bg-[#f5f0ea] border border-[#ede9e3] px-2 py-0.5 rounded-md font-medium">
          {job.duration}
        </span>
      </div>

      <div className="mt-2">
        <EmploymentTag type={job.employmentType} />
      </div>
    </div>
  </div>
);

const ExperienceHero = () => {
  return (
    <section>
      <div className="mb-7">
        <h2 className="section-heading">Work Experience</h2>
        <div className="section-rule" />
      </div>

      <div className="flex flex-col gap-3">
        {jobExperience.map((job, index) => (
          <div key={index} className="exp-card">
            <div className="card-accent-bar" />
            <DesktopJobCard job={job} />
            <MobileJobCard job={job} />
            <JobResponsibilities description={job.description} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceHero;