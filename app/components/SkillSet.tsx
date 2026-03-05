"use client";

import { skillSections } from "../data/data";

const SkillPill = ({ children }: { children: React.ReactNode }) => (
  <span className="skill-pill">{children}</span>
);
const SkillSet = () => {
  return (
    <section>
      <div className="mb-7">
        <h2 className="section-heading">Skills</h2>
        <div className="section-rule" />
      </div>

      <div className="flex flex-col gap-6">
        {skillSections.map((section, idx) => (
          <div key={idx}>
            <p className="text-[11px] font-semibold text-[#a89880] uppercase tracking-[1px] mb-2.5">
              {section.title}
            </p>
            <div className="flex flex-wrap gap-2">
              {section.data.map((skill, i) => (
                <SkillPill key={i}>{skill}</SkillPill>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillSet;