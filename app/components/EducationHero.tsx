"use client";
import { Card, Typography, Avatar, Collapse, Row, Col, Tag } from "antd";
import { education } from "../data/data";
const { Title, Text, Paragraph } = Typography;

export const EducationHero = () => {
  return (
    <section>
      <Title level={3}>Education</Title>
      <Card style={{ maxWidth: 800, margin: "0"}}>
        <Row gutter={16} align="top">
          <Col>
            {education.picture && (
              <Avatar
                src={education.picture}
                size={100}
                shape="square"
                style={{ objectFit: "cover" }}
              />
            )}
          </Col>

          <Col flex="1">
            <Title level={4} style={{ margin: "4px 0" }}>{education.school}</Title>
            <Text strong>{education.degree}</Text>
            <Paragraph type="secondary" style={{ margin: "4px 0" }}>
              {education.duration} | GPAX: {education.gpax}
            </Paragraph>

            <Collapse
              ghost
              bordered={false}
              style={{ margin: "4px 0" }}
              items={[
                {
                  key: "1",
                  label: "More info",
                  children: (
                    <div>
                      <div className="mb-4">
                        <Text strong>Relevant Courses:</Text>
                        <ul className="list-disc list-inside mt-1">
                          {education.courses.map((course, idx) => (
                            <li key={idx}>
                              <Text>{course}</Text>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <Text strong>Achievements & Activities:</Text>
                        <ul className="list-disc list-inside mt-1">
                          {education.description.map((item, idx) => (
                            <li key={idx}>
                              <Text>{item}</Text>
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
    </section>
  );
};
