"use client";

import { Collapse } from "antd";
import { education } from "../data/data";

export const EducationHero = () => {
  return (
    <section>
      <div className="mb-7">
        <h2 className="section-heading">Education</h2>
        <div className="section-rule" />
      </div>

      <div
        className="card-base relative max-w-[800px] px-8 py-7"
        style={{ position: "relative" }}
      >
        <div className="card-accent-bar" />

        <div className="flex gap-5 items-stretch">
          {/* Logo */}
          {education.picture && (
            <div className="logo-circle">
              <img src={education.picture} alt="school" />
            </div>
          )}

          {/* Vertical divider */}
          <div
            className="w-[1.5px] flex-shrink-0 self-stretch rounded-[99px] min-h-[80px]"
            style={{ background: "linear-gradient(to bottom, #ede9e3, transparent)" }}
          />

          {/* Content */}
          <div className="flex-1 min-w-0">
            <h3 className="text-[18px] text-[#2d2520] mb-1 mt-0" style={{ fontFamily: "var(--font-display)" }}>
              {education.school}
            </h3>
            <p className="text-[14px] font-semibold text-[#4a3728] mb-1 mt-0" style={{ fontFamily: "var(--font-body)" }}>
              {education.degree}
            </p>
            <p className="text-[13px] text-[#a89880] mb-3 mt-0" style={{ fontFamily: "var(--font-body)" }}>
              {education.duration} &nbsp;·&nbsp; GPAX: {education.gpax}
            </p>

            <Collapse
              ghost
              bordered={false}
              className="edu-collapse"
              style={{ marginLeft: -8 }}
              items={[
                {
                  key: "1",
                  label: <span className="collapse-label">More Info</span>,
                  children: (
                    <div className="pl-2">
                      <div className="mb-4">
                        <p className="text-[12px] font-semibold text-[#4a3728] uppercase tracking-[0.6px] mb-2 mt-0" style={{ fontFamily: "var(--font-body)" }}>
                          Relevant Courses
                        </p>
                        <ul className="m-0 pl-4 flex flex-col gap-1 list-disc">
                          {education.courses.map((course, idx) => (
                            <li key={idx} className="text-[13px] text-[#6b5a4e]" style={{ fontFamily: "var(--font-body)" }}>
                              {course}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <p className="text-[12px] font-semibold text-[#4a3728] uppercase tracking-[0.6px] mb-2 mt-0" style={{ fontFamily: "var(--font-body)" }}>
                          Achievements & Activities
                        </p>
                        <ul className="m-0 pl-4 flex flex-col gap-1 list-disc">
                          {education.description.map((item, idx) => (
                            <li key={idx} className="text-[13px] text-[#6b5a4e]" style={{ fontFamily: "var(--font-body)" }}>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ),
                },
              ]}
            />
          </div>
        </div>
      </div>
    </section>
  );
};