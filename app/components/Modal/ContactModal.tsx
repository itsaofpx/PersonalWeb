"use client";

import { Modal, message } from "antd";
import {
  CopyOutlined,
  MailOutlined,
  PhoneOutlined,
  FilePdfOutlined,
  DownloadOutlined,
  EyeOutlined,
  CloseOutlined,
} from "@ant-design/icons";

type ContactModalProps = {
  open: boolean;
  setOpen: (open: boolean) => void;
  email: string;
  phone: string;
  resumeUrl: string;
};

export default function ContactModal({ open, setOpen, email, phone, resumeUrl }: ContactModalProps) {
  const copy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    message.success(`${label} copied`);
  };

  return (
    <Modal
      open={open}
      onCancel={() => setOpen(false)}
      footer={null}
      centered
      width={460}
      closeIcon={null}
      className="contact-modal"
    >
      <div className="relative" style={{ fontFamily: "var(--font-body)" }}>

        {/* Close button */}
        <button className="close-btn" onClick={() => setOpen(false)}>
          <CloseOutlined />
        </button>

        {/* Header stripe */}
        <div className="px-8 pt-9 pb-7" style={{ background: "linear-gradient(135deg, #2d2520 0%, #4a3728 100%)" }}>
          <p className="text-[22px] text-white m-0 tracking-[-0.3px]" style={{ fontFamily: "var(--font-display)" }}>
            Let's connect
          </p>
          <p className="text-[13px] text-white/55 mt-1 mb-0 font-light">
            Pick any channel that works best for you
          </p>
        </div>

        {/* Body */}
        <div className="px-7 pt-6 pb-7 bg-white">
          <div className="flex flex-col gap-2.5">

            {/* Email */}
            <div className="contact-row">
              <div className="flex items-center gap-3">
                <div className="icon-box"><MailOutlined /></div>
                <div>
                  <p className="text-[11px] text-[#b0a090] m-0 font-medium uppercase tracking-[0.6px]">Email</p>
                  <a
                    href={`mailto:${email}`}
                    className="text-[14px] text-[#2d2520] font-medium no-underline hover:underline"
                  >
                    {email}
                  </a>
                </div>
              </div>
              <div className="copy-btn" onClick={() => copy(email, "Email")}>
                <CopyOutlined style={{ fontSize: 13 }} />
              </div>
            </div>

            {/* Phone */}
            <div className="contact-row">
              <div className="flex items-center gap-3">
                <div className="icon-box"><PhoneOutlined /></div>
                <div>
                  <p className="text-[11px] text-[#b0a090] m-0 font-medium uppercase tracking-[0.6px]">Phone</p>
                  <a
                    href={`tel:${phone}`}
                    className="text-[14px] text-[#2d2520] font-medium no-underline hover:underline"
                  >
                    {phone}
                  </a>
                </div>
              </div>
              <div className="copy-btn" onClick={() => copy(phone, "Phone")}>
                <CopyOutlined style={{ fontSize: 13 }} />
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="flex items-center gap-2.5 my-5">
            <div className="flex-1 h-px bg-[#ede9e3]" />
            <div className="flex items-center gap-1.5 text-[11px] font-semibold text-[#c8a882] uppercase tracking-[1px]">
              <FilePdfOutlined style={{ fontSize: 12 }} />
              Resume
            </div>
            <div className="flex-1 h-px bg-[#ede9e3]" />
          </div>

          {/* Resume buttons */}
          <div className="flex gap-2">
            <a href={resumeUrl} target="_blank" className="resume-btn-primary">
              <EyeOutlined style={{ fontSize: 14 }} />
              View Resume
            </a>
            <a href={resumeUrl} download className="resume-btn-secondary">
              <DownloadOutlined style={{ fontSize: 16 }} />
            </a>
          </div>
        </div>
      </div>
    </Modal>
  );
}