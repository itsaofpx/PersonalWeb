"use client";
import { Card, Typography, Avatar, Collapse, Row, Col } from "antd";
import { education } from "../data/data";
const { Title, Text, Paragraph } = Typography;

export const EducationHero = () => {
  return (
    <section>
      <Title level={3}>Education</Title>
      <Card
        style={{ maxWidth: 800, margin: "0" }}
        className="shadow-sm border-none"
      >
        <Row gutter={[24, 16]} align="top">
          <Col
            xs={24}
            sm={6}
            className="flex justify-center"
            style={{ display: "flex", justifyContent: "center" }}
          >
            {education.picture && (
              <Avatar
                src={education.picture}
                size={100}
                className="rounded-lg shadow-sm"
                style={{ objectFit: "cover" }}
              />
            )}
          </Col>

          <Col xs={24} sm={18} className="text-center sm:text-left">
            <Title
              level={4}
              style={{ margin: "0 0 4px 0" }}
              className="text-lg sm:text-xl"
            >
              {education.school}
            </Title>
            <Text strong className="block sm:inline">
              {education.degree}
            </Text>
            <Paragraph type="secondary" style={{ margin: "4px 0" }}>
              {education.duration} <span className="hidden sm:inline">|</span>{" "}
              <br className="sm:hidden" /> GPAX: {education.gpax}
            </Paragraph>

            <Collapse
              ghost
              bordered={false}
              className="mt-2 custom-collapse -ml-4 sm:ml-0"
              items={[
                {
                  key: "1",
                  label: (
                    <span className="text-gray-400 hover:text-blue-500 transition-colors text-[10px] sm:text-xs font-medium uppercase tracking-wider">
                      More Info
                    </span>
                  ),
                  style: { padding: 0 },
                  children: (
                    <div className="text-left pl-4 sm:pl-0">
                      <div className="mb-4">
                        <Text strong>Relevant Courses:</Text>
                        <ul className="list-disc list-inside mt-1 space-y-1">
                          {education.courses.map((course, idx) => (
                            <li key={idx}>
                              <Text className="text-gray-600">{course}</Text>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <Text strong>Achievements & Activities:</Text>
                        <ul className="list-disc list-inside mt-1 space-y-1">
                          {education.description.map((item, idx) => (
                            <li key={idx}>
                              <Text className="text-gray-600">{item}</Text>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ),
                },
              ]}
            />
          </Col>
        </Row>
      </Card>

      <style jsx global>{`
        .custom-collapse .ant-collapse-header {
          padding: 4px 0 !important; /* Forces the header height to be smaller */
          display: inline-flex !important; /* Keeps the arrow and text tightly grouped */
          align-items: center;
        }
        .custom-collapse .ant-collapse-expand-icon {
          padding-inline-end: 4px !important; /* Reduces space after the arrow */
        }
      `}</style>
    </section>
  );
};
