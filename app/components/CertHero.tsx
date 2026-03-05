"use client";

import { Modal } from "antd";
import { EyeOutlined, SafetyCertificateOutlined } from "@ant-design/icons";
import Image from "next/image";
import { useState } from "react";
import { certs } from "../data/data";

export const CertHero = () => {
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [previewTitle, setPreviewTitle] = useState("");

  const openPreview = (cert: any) => {
    setPreviewImage(cert.previewPath);
    setPreviewTitle(cert.title);
    setPreviewOpen(true);
  };

  return (
    <section>
      <div className="mb-7">
        <h2 className="section-heading">Certifications</h2>
        <div className="section-rule" />
      </div>

      <div className="grid gap-4" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))" }}>
        {certs.map((cert, index) => (
          <div key={index} className="cert-card" onClick={() => openPreview(cert)}>

            {/* Image area */}
            <div className="relative h-[180px] bg-white overflow-hidden">
              <div className="cert-overlay absolute inset-0 bg-[rgba(45,37,32,0.3)] flex items-center justify-center opacity-0 transition-opacity duration-200 z-10">
                <span className="text-[13px] font-medium text-white bg-white/20 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/30 flex items-center gap-1.5">
                  <EyeOutlined style={{ fontSize: 12 }} />
                  View
                </span>
              </div>
              <Image
                src={cert.previewPath}
                alt={cert.title}
                fill
                sizes="(max-width: 768px) 100vw, 500px"
                className="cert-img object-contain transition-transform duration-[400ms] ease-in-out"
                priority={index < 2}
              />
            </div>

            {/* Info area */}
            <div className="p-[16px_18px]">
              <div className="flex justify-between items-start mb-2.5">
                <div className="flex-1">
                  <p className="text-[15px] text-[#2d2520] m-0 mb-1 leading-[1.3]" style={{ fontFamily: "var(--font-display)" }}>
                    {cert.title}
                  </p>
                  <p className="text-[12px] text-[#a89880] m-0 flex items-center gap-1" style={{ fontFamily: "var(--font-body)" }}>
                    <SafetyCertificateOutlined style={{ fontSize: 11 }} />
                    {cert.provider}
                  </p>
                </div>
                <span className="text-[11px] font-semibold text-[#a89880] bg-[#f0ece7] px-2 py-0.5 rounded-md flex-shrink-0 ml-2" style={{ fontFamily: "var(--font-body)" }}>
                  {cert.year}
                </span>
              </div>

              <div className="border-t border-[#ede9e3] pt-2.5 flex flex-wrap gap-1.5">
                {cert.skillTag.map((skill: string, i: number) => (
                  <span key={i} className="text-[10px] font-medium px-2 py-0.5 rounded-md bg-white border-[1.5px] border-[#ede9e3] text-[#6b5a4e]" style={{ fontFamily: "var(--font-body)" }}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Preview Modal */}
      <Modal
        open={previewOpen}
        title={null}
        footer={null}
        onCancel={() => setPreviewOpen(false)}
        width={1000}
        centered
        className="cert-modal"
      >
        <div className="relative w-full bg-[#1a1410]" style={{ aspectRatio: "4/3" }}>
          {previewImage && (
            <Image src={previewImage} alt={previewTitle} fill style={{ objectFit: "contain" }} />
          )}
        </div>
        <div className="px-5 py-4 flex justify-between items-center border-t border-[#ede9e3]">
          <p className="text-[16px] m-0" style={{ fontFamily: "var(--font-display)" }}>
            {previewTitle}
          </p>
          <span className="text-[11px] font-semibold px-3 py-1 rounded-full flex items-center gap-1.5" style={{ fontFamily: "var(--font-body)" }}>
            <SafetyCertificateOutlined style={{ fontSize: 11 }} />
            Verified
          </span>
        </div>
      </Modal>
    </section>
  );
};

export default CertHero;