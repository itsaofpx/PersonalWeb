"use client";

import { Typography } from "antd";

const { Title, Paragraph } = Typography;

const HeaderHero = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <Title level={2} style={{ marginBottom: 8, letterSpacing: "-0.5px" }}>
        Hey there, I’m{" "}
        <span className="bg-clip-text">
          Podjanin
        </span>
      </Title>

      <Paragraph type="secondary" style={{ fontSize: 16 }}>
        Take risks early. The lessons compound, and the rewards multiply.
      </Paragraph>
    </div>
  );
};

export default HeaderHero;
