"use client";

import { Row, Tag, Typography } from "antd";

const { Title } = Typography;

const GradientTag = ({ children }: { children: React.ReactNode }) => (
  <Tag
    style={{
      padding: "4px 12px",
      borderRadius: "6px",
      fontSize: "13px",
      background: "linear-gradient(135deg, #f0f5ff 0%, #f6ffed 100%)",
      border: "1px solid rgba(0,0,0,0.02)",
      color: "#333",
      fontWeight: 500,
    }}
  >
    {children}
  </Tag>
);

const SkillSet = () => {
  const skills = {
    programmingSkill: [
      "Python",
      "Java",
      "JavaScript",
      "TypeScript",
      "Golang",
      "Dart",
      "C++",
      "C#",
      "HTML",
      "CSS",
      "SQL",
    ],
    frameworkSkill: [
      "React",
      "Next.js",
      "Node.js",
      "Angular",
      "NestJS",
      "Fiber",
      "Tailwind CSS",
      "Flutter",
      "AWS",
      "GCP",
      "Docker",
      "PostgreSQL",
      "Postman",
      "Bruno",
      "Figma",
      "Jira",
    ],
    softSkill: [
      "Collaborative Team Player",
      "Agile Practitioner",
      "Excellent Communicator",
      "Analytical Problem Solver",
      "Resilient Performer",
      "Curious Learner",
      "Self-Motivated Improver",
      "Disciplined Professional",
    ],
    languageSkill: ["Thai (Native)", "English B2 (Upper-Intermediate)"],
  };

  return (
    <section>
      <div className="mb-6 pb-2 border-b border-gray-100">
        <Title level={3} style={{ margin: 0 }}>
          Skills
        </Title>
        {/* Gradient Underline */}
        <div className="h-1 w-16 bg-linear-to-r from-blue-500 to-teal-400 rounded-full mt-2" />
      </div>

      <div className="flex flex-col gap-8">
        {[
          { title: "Programming", data: skills.programmingSkill },
          { title: "Frameworks & Tools", data: skills.frameworkSkill },
          { title: "Soft Skills", data: skills.softSkill },
          { title: "Languages", data: skills.languageSkill },
        ].map((section, idx) => (
          <div key={idx}>
            <Title level={5} style={{ color: "#666", marginBottom: 12 }}>
              {section.title}
            </Title>
            <div className="flex flex-wrap gap-2">
              {section.data.map((skill, i) => (
                <GradientTag key={i}>{skill}</GradientTag>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillSet;
