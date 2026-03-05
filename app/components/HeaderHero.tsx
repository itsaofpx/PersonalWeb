"use client";

const HeaderHero = () => {
  return (
    <div className="text-center py-2">
      <p className="uppercase tracking-[2.5px] text-[#c8a882] mb-3 text-[16px] font-medium" style={{ fontFamily: "var(--font-body)" }}>
        Hello there
      </p>
      <h1
        className="text-[32px] md:text-[40px] lg:text-[48px] text-[#2d2520] mb-3 tracking-[-1px] leading-[1.1]"
        style={{ fontFamily: "var(--font-display)" }}
      >
        Podjanin.com
      </h1>
      <div className="w-12 h-[2px] bg-gradient-to-r from-[#c8a882] to-[#8c6a4a] rounded-full mx-auto mb-4" />
      <p
        className="text-[15px] text-[#a89880] font-light italic leading-[1.7] max-w-[500px] mx-auto"
        style={{ fontFamily: "var(--font-body)" }}
      >
        "Take risks early. The lessons compound, and the rewards multiply."
      </p>
    </div>
  );
};

export default HeaderHero;