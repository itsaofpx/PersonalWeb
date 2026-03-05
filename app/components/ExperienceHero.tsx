"use client";

import { Collapse } from "antd";
import { jobExperience } from "../data/data";

const employmentColors: Record<string, { bg: string; text: string; border: string }> = {
  Internship: { bg: "#eef4ff", text: "#3b6fd4", border: "#c5d9f9" },
  Exchange: { bg: "#fff7ed", text: "#c2700f", border: "#f9d9a8" },
  "Full-Time": { bg: "#edfbf3", text: "#2e7d5c", border: "#b6e8d0" },
  default: { bg: "#edfbf3", text: "#2e7d5c", border: "#b6e8d0" },
};

type Job = (typeof jobExperience)[number];
type GroupedCompany = { company: string; picture: string; location: string; roles: Job[] };

const groupByCompany = (jobs: Job[]): GroupedCompany[] => {
  const groups: GroupedCompany[] = [];
  for (const job of jobs) {
    const last = groups[groups.length - 1];
    if (last && last.company === job.company) {
      last.roles.push(job);
    } else {
      groups.push({ company: job.company, picture: job.picture, location: job.location, roles: [job] });
    }
  }
  return groups;
};

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

const JobResponsibilities = ({ description }: { description: string[] }) => (
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
                <p className="text-[13px] text-[#6b5a4e] m-0 leading-[1.6]">{d}</p>
              </div>
            ))}
          </div>
        ),
      },
    ]}
  />
);

// ── Single role row (used inside grouped card) ─────────────────────────────
const RoleRow = ({ job, isLast }: { job: Job; isLast: boolean }) => (
  <div className="flex gap-3 items-stretch">
    {/* Timeline column */}
    <div className="flex flex-col items-center flex-shrink-0 w-5">
      {/* Dot */}
      <div className="w-2.5 h-2.5 rounded-full border-2 border-[#c8a882] bg-white flex-shrink-0 mt-1" />
      {/* Connecting line — stretches to fill remaining height */}
      {!isLast && (
        <div className="w-px flex-1 bg-gradient-to-b from-[#c8a882] to-[#ede9e3] mt-1" />
      )}
    </div>

    {/* Role content */}
    <div className="flex-1 min-w-0 pb-5">
      {/* Role header */}
      <div className="flex items-start justify-between gap-2 flex-wrap">
        <div>
          <p className="text-[13px] text-[#2d2520] m-0 font-semibold">{job.position}</p>
          <div className="flex items-center gap-1.5 mt-1 flex-wrap">
            <EmploymentTag type={job.employmentType} />
            <span className="text-[#c8b99a] text-[10px]">·</span>
            <span className="text-[11px] text-[#b0a090]">{job.location}</span>
          </div>
        </div>
        <span className="text-[11px] text-[#a89880] bg-[#f5f0ea] border border-[#ede9e3] px-2.5 py-0.5 rounded-md flex-shrink-0 font-medium whitespace-nowrap">
          {job.duration}
        </span>
      </div>

      {/* Responsibilities */}
      <div className="mt-2">
        <JobResponsibilities description={job.description} />
      </div>
    </div>
  </div>
);

// ── Desktop grouped card ───────────────────────────────────────────────────
const DesktopGroupCard = ({ group }: { group: GroupedCompany }) => (
  <div className="hidden sm:flex items-start gap-0">
    {/* Logo */}
    <div className="w-24 h-24 flex-shrink-0 flex items-center justify-center">
      <img src={group.picture} alt={group.company} className="w-full h-full object-cover" />
    </div>

    {/* Vertical divider */}
    <div className="w-px self-stretch bg-gradient-to-b from-[#ede9e3] to-transparent rounded-full flex-shrink-0 mx-5" />

    {/* Content */}
    <div className="flex-1 min-w-0">
      {/* Company header */}
      <div className="mb-3">
        <p className="text-[16px] text-[#2d2520] m-0 font-semibold tracking-wider" style={{ fontFamily: "var(--font-display)" }}>
          {group.company}
        </p>
        {group.roles.length > 1 && (
          <p className="text-[11px] text-[#b0a090] mt-0.5 m-0">{group.roles.length} roles</p>
        )}
      </div>

      {/* Roles timeline */}
      <div>
        {group.roles.map((job, i) => (
          <RoleRow key={i} job={job} isLast={i === group.roles.length - 1} />
        ))}
      </div>
    </div>
  </div>
);

// ── Mobile grouped card ────────────────────────────────────────────────────
const MobileGroupCard = ({ group }: { group: GroupedCompany }) => (
  <div className="flex sm:hidden items-start gap-4">
    {/* Logo */}
    <div className="w-16 h-16 overflow-hidden flex-shrink-0 flex items-center justify-center">
      <img src={group.picture} alt={group.company} className="w-full h-full object-cover" />
    </div>

    {/* Vertical divider */}
    <div className="w-px self-stretch bg-gradient-to-b from-[#ede9e3] to-transparent rounded-full flex-shrink-0" />

    {/* Content */}
    <div className="flex-1 min-w-0">
      {/* Company header */}
      <div className="mb-3">
        <p className="text-[15px] text-[#2d2520] m-0 font-semibold" style={{ fontFamily: "var(--font-display)" }}>
          {group.company}
        </p>
        {group.roles.length > 1 && (
          <p className="text-[11px] text-[#b0a090] mt-0.5 m-0">{group.roles.length} roles</p>
        )}
      </div>

      {/* Roles timeline */}
      <div>
        {group.roles.map((job, i) => (
          <RoleRow key={i} job={job} isLast={i === group.roles.length - 1} />
        ))}
      </div>
    </div>
  </div>
);

// ── Main component ─────────────────────────────────────────────────────────
const ExperienceHero = () => {
  const grouped = groupByCompany(jobExperience);

  return (
    <section>
      <div className="mb-7">
        <h2 className="section-heading">Work Experience</h2>
        <div className="section-rule" />
      </div>

      <div className="flex flex-col gap-3">
        {grouped.map((group, index) => (
          <div key={index} className="exp-card">
            <div className="card-accent-bar" />
            <DesktopGroupCard group={group} />
            <MobileGroupCard group={group} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceHero;