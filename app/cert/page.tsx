import CertHero from "../components/CertHero";
import NavigatorBar from "../components/NavigatorBar";

const CertPage = () => {
  return (
    <div
      className="min-h-screen flex justify-center px-4 py-12 pb-[120px]"
      style={{ background: "linear-gradient(135deg, #f5f0ea 0%, #faf9f7 50%, #f0ece7 100%)" }}
    >
      <main
        className="w-full flex flex-col gap-14 rounded-3xl px-10 py-10"
        style={{
          maxWidth: 880,
          background: "rgba(255,255,255,0.82)",
          backdropFilter: "blur(20px)",
          boxShadow: "0 4px 40px rgba(45,37,32,0.06), 0 0 0 1px rgba(200,185,154,0.2)",
        }}
      >
        <CertHero />
      </main>
      <NavigatorBar />
    </div>
  );
};

export default CertPage;