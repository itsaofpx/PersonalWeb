import CertHero from "../components/CertHero";
import NavigatorBar from "../components/NavigatorBar";

const CertPage = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-[#f8faff] via-[#ffffff] to-[#f0f2f5] flex justify-center px-4 py-12">
      <main className="w-full max-w-4xl bg-white/80 backdrop-blur-xl rounded-2xl p-8 md:p-12 space-y-12 shadow-sm border border-white/50">
        <CertHero />
      </main>
      <NavigatorBar />
    </div>
  );
};
export default CertPage;
