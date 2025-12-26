"use client";

import { Card, Col, Row, Tag, Typography, Space, Button } from "antd";
import {
  GithubOutlined,
  CalendarOutlined,
  CodeOutlined,
} from "@ant-design/icons";

const { Title, Paragraph, Text } = Typography;

export const ProjectHero = () => {
  const projects = [
    {
      name: "Financial Literacy Platform",
      description:
        "AI-driven investment ecosystem providing real-time market analysis and automated news synthesis via Google Gemini.",
      repo: [
        {
          name: "Next.js",
          link: "https://github.com/itsaofpx/fp-financial-web",
        },
        {
          name: "NestJS",
          link: "https://github.com/itsaofpx/fp-financial-app",
        },
        {
          name: "Python",
          link: "https://github.com/itsaofpx/fp-financial-api",
        },
      ],
      features: ["Gemini AI", "News Scraping", "Google OAuth"],
      year: "2025",
      picturePath: "/data/projectpreview/FinancialLiteracy.png",
      primaryColor: "blue",
    },
    {
      name: "Booking Stadium App",
      description:
        "Mobile-first reservation system facilitating real-time booking, in-app transactions, and GPS-based venue navigation.",
      repo: [
        { name: "Flutter", link: "https://github.com/itsaofpx/Mobile-Project" },
      ],
      features: ["Firebase", "Maps API", "UI/UX Design"],
      year: "2025",
      picturePath: "/data/projectpreview/BookingStadium.png",
      primaryColor: "cyan",
    },
    {
      name: "Drink and Groove",
      description:
        "Scalable digital venue platform streamlining nightlife operations through automated booking, social integration, and async processing.",
      repo: [
        {
          name: "Next.js",
          link: "https://github.com/itsaofpx/se-project-frontend",
        },
        {
          name: "Go Fiber",
          link: "https://github.com/itsaofpx/se-project-backend",
        },
      ],
      features: ["RabbitMQ", "PostgreSQL", "Clean Arch"],
      year: "2024",
      picturePath: "/data/projectpreview/DrinkAndGroove.png",
      primaryColor: "purple",
    },
    {
      name: "Wholesale Marketplace",
      description:
        "Scalable wholesale solution with real-time inventory, built using Agile methodologies and CI/CD automation.",
      repo: [
        {
          name: "Next.js",
          link: "https://github.com/itsaofpx/472-S-Wholesale-BusinessFrontend-6510450691",
        },
        {
          name: "Go Fiber",
          link: "https://github.com/itsaofpx/472-S-Wholesale-BusinessBackend-6510450691",
        },
      ],
      features: ["E-Commerce", "CI/CD", "Agile Methodologies"],
      year: "2024",
      picturePath: "/data/projectpreview/Wholesale.png",
      primaryColor: "green",
    },
    {
      name: "Event Management System",
      description:
        "MVC-based event system featuring team chat and polymorphic role management, built for scalability using modular design patterns.",
      repo: [
        {
          name: "Java",
          link: "https://github.com/CS211-661/cs211-661-project-a-pang",
        },
      ],
      features: ["MVC Architecture", "Role-Based Access", "OOP Principles"],
      year: "2023",
      picturePath: "/data/projectpreview/JavaEvent.png",
      primaryColor: "magenta",
    },
  ];

  const getGradient = (color: string) => {
    switch (color) {
      case "blue":
        return "from-blue-50 to-indigo-50 text-blue-700";
      case "cyan":
        return "from-cyan-50 to-blue-50 text-cyan-700";
      case "purple":
        return "from-purple-50 to-fuchsia-50 text-purple-700";
      case "green":
        return "from-emerald-50 to-green-50 text-emerald-700";
      case "magenta":
        return "from-pink-50 to-rose-50 text-pink-700";
      default:
        return "from-gray-50 to-gray-100 text-gray-700";
    }
  };

  return (
    <section style={{ padding: "40px 0" }}>
      <div style={{ marginBottom: 40 }}>
        <Title level={2} style={{ margin: 0, fontWeight: 700 }}>
          Featured Projects
        </Title>
        <div className="h-1 w-12 bg-linear-to-r from-[#1677ff] to-[#4096ff] mt-2 rounded-full" />
      </div>

      <Row gutter={[32, 32]}>
        {projects.map((project, index) => (
          <Col key={index} xs={24} lg={12}>
            <Card
              hoverable
              style={{
                height: "100%",
                borderRadius: 20,
                overflow: "hidden",
                border: "none",
                boxShadow: "0 10px 40px -10px rgba(0,0,0,0.08)",
                display: "flex",
                flexDirection: "column",
              }}
              cover={
                <div
                  style={{
                    overflow: "hidden",
                    height: 220,
                    position: "relative",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      right: 0,
                      height: "40%",
                      background:
                        "linear-gradient(to top, rgba(0,0,0,0.05), transparent)",
                      zIndex: 1,
                    }}
                  />
                  <img
                    alt={project.name}
                    src={project.picturePath}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      transition: "transform 0.4s ease",
                    }}
                    className="project-image"
                  />
                </div>
              }
            >
              <div style={{ flex: 1 }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    marginBottom: 12,
                  }}
                >
                  <Title level={4} style={{ margin: 0, fontSize: "1.25rem" }}>
                    {project.name}
                  </Title>
                  <Tag
                    icon={<CalendarOutlined />}
                    style={{
                      margin: 0,
                      background: "#f8fafc",
                      color: "#64748b",
                      alignItems: "center",
                    }}
                  >
                    {project.year}
                  </Tag>
                </div>

                <Paragraph
                  type="secondary"
                  style={{
                    marginBottom: 16,
                    fontSize: "15px",
                    lineHeight: "1.6",
                  }}
                >
                  {project.description}
                </Paragraph>

                <div style={{ marginBottom: 20 }}>
                  <Space size={[0, 8]} wrap>
                    {project.features.map((feature, i) => (
                      <span
                        key={i}
                        className={`px-3 py-1 rounded-full text-xs font-medium bg-linear-to-r ${getGradient(
                          project.primaryColor
                        )}`}
                      >
                        {feature}
                      </span>
                    ))}
                  </Space>
                </div>
              </div>

              <div
                style={{
                  marginTop: "auto",
                  borderTop: "1px solid #f0f0f0",
                  paddingTop: 16,
                }}
              >
                <Text
                  type="secondary"
                  style={{ fontSize: 12, display: "block", marginBottom: 8 }}
                >
                  <CodeOutlined /> View Source Code:
                </Text>
                <Space wrap size={8}>
                  {project.repo.map((repo, repoIndex) => (
                    <Button
                      key={repoIndex}
                      size="small"
                      icon={<GithubOutlined />}
                      onClick={() => window.open(repo.link, "_blank")}
                      style={{
                        borderRadius: 6,
                        fontSize: 12,
                        borderColor: "#e2e8f0",
                        color: "#475569",
                      }}
                      className="hover:border-blue-400 hover:text-blue-500 transition-colors"
                    >
                      {repo.name}
                    </Button>
                  ))}
                </Space>
              </div>
            </Card>
          </Col>
        ))}
      </Row>

      <style jsx>{`
        .ant-card:hover .project-image {
          transform: scale(1.05);
        }
      `}</style>
    </section>
  );
};
