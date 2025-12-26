"use client";

import { Card, Col, Row, Typography, Tag, Modal } from "antd";
import { SafetyCertificateOutlined, EyeOutlined } from "@ant-design/icons";
import Image from "next/image";
import { useState } from "react";
import { certs } from "../data/data";

const { Title, Text } = Typography;

export const CertHero = () => {
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [previewTitle, setPreviewTitle] = useState("");

  const openPreview = (cert: any) => {
    setPreviewImage(cert.previewPath);
    setPreviewTitle(cert.title);
    setPreviewOpen(true);
  };

  const getGradient = (color: string) => {
    switch (color) {
      case "blue":
        return "from-blue-50 to-indigo-50 text-blue-700 border-blue-100";
      case "cyan":
        return "from-cyan-50 to-blue-50 text-cyan-700 border-cyan-100";
      case "purple":
        return "from-purple-50 to-fuchsia-50 text-purple-700 border-purple-100";
      case "magenta":
        return "from-pink-50 to-rose-50 text-pink-700 border-pink-100";
      default:
        return "from-gray-50 to-gray-100 text-gray-700 border-gray-100";
    }
  };

  return (
    <section className="w-full py-10">
      <div className="mb-8">
        <Title level={3} style={{ margin: 0 }}>
          Certifications
        </Title>
        <div className="h-1 w-16 bg-linear-r from-orange-400 to-red-400 rounded-full mt-2" />
      </div>

      <Row gutter={[24, 24]}>
        {certs.map((cert, index) => (
          <Col key={index} xs={24} sm={12}>
            <Card
              hoverable
              onClick={() => openPreview(cert)}
              style={{
                borderRadius: 16,
                height: "100%",
                boxShadow: "0 4px 20px rgba(0,0,0,0.03)",
                overflow: "hidden",
                border: "none",
              }}
              className="group transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              cover={
                <div
                  className="relative w-full bg-gray-50 overflow-hidden group-hover:bg-gray-100 transition-colors"
                  style={{ height: 192, position: "relative" }}
                >
                  {/* View Icon Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity z-10">
                    <div className="bg-white/90 backdrop-blur px-3 py-1 rounded-full shadow-sm text-xs font-medium text-gray-700 flex items-center gap-2">
                      <EyeOutlined /> View
                    </div>
                  </div>

                  <Image
                    src={cert.previewPath}
                    alt={cert.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 500px"
                    className="object-contain p-4 transition-transform duration-500 group-hover:scale-105"
                    priority={index < 2}
                  />
                </div>
              }
            >
              <div className="flex flex-col h-full gap-3">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <Title
                      level={5}
                      style={{ marginBottom: 4, fontSize: "1rem" }}
                    >
                      {cert.title}
                    </Title>
                    <Text
                      type="secondary"
                      className="text-xs flex items-center gap-1"
                    >
                      <SafetyCertificateOutlined /> {cert.provider}
                    </Text>
                  </div>
                  <Tag className="m-0 bg-gray-100 text-gray-500 rounded-md font-medium border-0">
                    {cert.year}
                  </Tag>
                </div>

                <div className="mt-auto pt-3 border-t border-gray-50 flex flex-wrap gap-2">
                  {cert.skillTag.map((skill: string, i: number) => (
                    <span
                      key={i}
                      className={`text-[10px] px-2 py-1 rounded-md border bg-linear-br ${getGradient(
                        cert.color || "blue"
                      )}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          </Col>
        ))}
      </Row>

      {/* 🔍 Preview Modal */}
      <Modal
        open={previewOpen}
        title={null}
        footer={null}
        onCancel={() => setPreviewOpen(false)}
        width={1200}
        centered
        className="rounded-xl overflow-hidden p-0"
      >
        <div className="relative w-full aspect-4/3 bg-gray-900 flex items-center justify-center">
          {previewImage && (
            <Image
              src={previewImage}
              alt={previewTitle}
              fill
              className="object-contain"
            />
          )}
        </div>
        <div className="p-4 bg-white flex justify-between items-center">
          <Title level={5} style={{ margin: 0 }}>
            {previewTitle}
          </Title>
          <Tag color="blue">Verified</Tag>
        </div>
      </Modal>
    </section>
  );
};

export default CertHero;
