"use client";

import { Card, Typography, Avatar, Tag, Collapse, Row, Col } from "antd";
import { jobExperience } from "../data/data";

const { Title, Text, Paragraph } = Typography;

const ExperienceHero = () => {
  return (
    <section>
      <Title level={3} className="mb-6">
        Work Experience
      </Title>

      <div className="flex flex-col gap-6 relative">
        <div className="absolute left-7 top-4 bottom-4 w-0.5 bg-linear-to-b from-gray-200 via-gray-100 to-transparent hidden md:block" />

        {jobExperience.map((job, index) => (
          <Card
            key={index}
            className="z-10 shadow-sm border-none bg-linear-to-r from-white to-gray-50/50"
            style={{ padding: "16px" }}
          >
            <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-start">
              <div className="w-full md:w-auto flex justify-start">
                <div className="p-1 bg-white rounded-full shadow-sm border border-gray-100 shrink-0">
                  <Avatar
                    src={job.picture}
                    size={56}
                    style={{ background: "#fff" }}
                  />
                </div>
              </div>

              <div className="flex-1 w-full">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 mb-2">
                  <div>
                    <Text strong className="text-base block">
                      {job.company}
                    </Text>
                    <Text className="text-gray-500 block">{job.position}</Text>
                    <Tag
                      color="blue"
                      className="mt-2 rounded-full border-none px-3 bg-blue-50 text-blue-600"
                    >
                      {job.employmentType}
                    </Tag>
                  </div>

                  <div className="mt-2 sm:mt-0 sm:text-right shrink-0">
                    <Text type="secondary" className="block text-sm">
                      {job.duration}
                    </Text>
                    <Text type="secondary" className="text-xs">
                      {job.location}
                    </Text>
                  </div>
                </div>

                <Collapse
                  ghost
                  expandIconPlacement="start"
                  bordered={false}
                  className="experience-collapse -ml-3"
                  items={[
                    {
                      key: "1",
                      label: (
                        <span className="text-gray-400 hover:text-blue-500 transition-colors text-xs font-medium uppercase tracking-wider">
                          See responsibilities
                        </span>
                      ),
                      children: (
                        <div className="ml-2 mt-1 flex flex-col gap-2">
                          {job.description.map((d, i) => (
                            <div key={i} className="flex items-start gap-3">
                              <span className="w-1.5 h-1.5 mt-2 rounded-full shrink-0 bg-linear-to-br from-gray-400 to-gray-600"></span>
                              <Text className="text-gray-600 text-sm leading-relaxed">
                                {d}
                              </Text>
                            </div>
                          ))}
                        </div>
                      ),
                    },
                  ]}
                />
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default ExperienceHero;
