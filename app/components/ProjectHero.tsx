"use client";

import { projects } from "../data/data";
import { CalendarOutlined, CodeOutlined, GithubOutlined } from "@ant-design/icons";

export const ProjectHero = () => {
  return (
    <section>
      <div className="mb-7">
        <h2 className="section-heading">Featured Projects</h2>
        <div className="section-rule" />
      </div>

      <div className="grid gap-5" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))" }}>
        {projects.map((project, index) => (
          <div key={index} className="project-card">

            {/* Cover image */}
            <div className="h-[200px] overflow-hidden bg-[#f0ece7] relative">
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(45,37,32,0.08)] to-transparent z-10" />
              <img
                alt={project.name}
                src={project.picturePath}
                className="project-img w-full h-full object-cover transition-transform duration-[400ms] ease-in-out"
              />
            </div>

            {/* Card body */}
            <div className="p-[18px_20px] flex flex-col flex-1">
              <div className="flex justify-between items-start mb-2.5">
                <h3 className="text-[17px] text-[#2d2520] m-0 leading-[1.3]" style={{ fontFamily: "var(--font-display)" }}>
                  {project.name}
                </h3>
                <span className="text-[11px] font-semibold text-[#a89880] bg-[#f0ece7] px-2 py-0.5 rounded-md flex-shrink-0 ml-2 flex items-center gap-1" style={{ fontFamily: "var(--font-body)" }}>
                  <CalendarOutlined style={{ fontSize: 10 }} />
                  {project.year}
                </span>
              </div>

              <p className="text-[13px] text-[#7a6455] leading-[1.65] mb-3.5 font-light" style={{ fontFamily: "var(--font-body)" }}>
                {project.description}
              </p>

              {/* Feature tags */}
              <div className="flex flex-wrap gap-1.5 mb-4">
                {project.features.map((feature, i) => (
                  <span key={i} className="text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-white border-[1.5px] border-[#ede9e3] text-[#6b5a4e]" style={{ fontFamily: "var(--font-body)" }}>
                    {feature}
                  </span>
                ))}
              </div>

              {/* Repo links */}
              <div className="mt-auto border-t border-[#ede9e3] pt-3.5">
                <p className="text-[11px] text-[#a89880] mb-2 mt-0 uppercase tracking-[0.8px] font-semibold flex items-center gap-1.5" style={{ fontFamily: "var(--font-body)" }}>
                  <CodeOutlined style={{ fontSize: 11 }} />
                  Source Code
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {project.repo.map((repo, repoIndex) => (
                    <a key={repoIndex} href={repo.link} target="_blank" rel="noreferrer" className="repo-btn">
                      <GithubOutlined style={{ fontSize: 12 }} />
                      {repo.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};