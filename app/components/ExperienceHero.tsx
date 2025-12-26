"use client";

import { Card, Typography, Avatar, Tag, Collapse, Row, Col } from "antd";
import { jobExperience } from "../data/data";

const { Title, Text, Paragraph } = Typography;

const ExperienceHero = () => {
  return (
    <section>
      <Title level={3}>
        Work Experience
      </Title>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 24,
          position: "relative",
        }}
      >
        <div className="absolute left-7 top-4 bottom-4 w-0.5 bg-linear-to-b from-gray-200 via-gray-100 to-transparent hidden md:block" />

        {jobExperience.map((job, index) => (
          <Card
            key={index}
            style={{
              boxShadow: "0 4px 20px rgba(0,0,0,0.02)",
              background: "linear-gradient(to right, #ffffff, #fafafa)",
            }}
            className="z-10"
          >
            <Row gutter={24} align="top">
              <Col>
                <div className="p-1 bg-white rounded-full shadow-sm border border-gray-100">
                  <Avatar
                    src={job.picture}
                    size={56}
                    style={{ background: "#fff" }}
                  />
                </div>
              </Col>

              <Col flex="1">
                <Row
                  justify="space-between"
                  align="top"
                  wrap={false}
                  className="mb-2"
                >
                  <Col>
                    <Text strong style={{ fontSize: 16 }}>
                      {job.company}
                    </Text>
                    <Paragraph style={{ margin: 0, color: "#666" }}>
                      {job.position}
                    </Paragraph>
                    <Tag
                      color="blue"
                      style={{ marginTop: 8, borderRadius: 10 }}
                    >
                      {job.employmentType}
                    </Tag>
                  </Col>

                  <Col style={{ textAlign: "right" }}>
                    <Text type="secondary" style={{ display: "block" }}>
                      {job.duration}
                    </Text>
                    <Text type="secondary" style={{ fontSize: 12 }}>
                      {job.location}
                    </Text>
                  </Col>
                </Row>

                <Collapse
                  ghost
                  expandIconPlacement="start"
                  bordered={false}
                  items={[
                    {
                      key: "1",
                      label: (
                        <span className="text-gray-400 hover:text-blue-500 transition-colors text-sm">
                          See responsibilities
                        </span>
                      ),
                      children: (
                        <div style={{ marginLeft: 16 }}>
                          {job.description.map((d, i) => (
                            <div
                              key={i}
                              className="flex items-start gap-3 mb-2"
                            >
                              {/* Gradient Bullet dot */}
                              <span className="w-1.5 h-1.5 mt-2 rounded-full shrink-0 bg-linear-to-br from-gray-400 to-gray-600"></span>
                              <Text style={{ color: "#444" }}>{d}</Text>
                            </div>
                          ))}
                        </div>
                      ),
                    },
                  ]}
                />
              </Col>
            </Row>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default ExperienceHero;
