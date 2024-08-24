import Header from "@/components/Header";
import AboutSection from "@/components/home/AboutSection";
import WorkSection from "@/components/home/WorkSection";

export default function Home() {
  return (
    <div className="font-sans relative pt-8 pb-12 text-white bg-[url('/assets/images/page-bg.png')]">
      <Header />
      <main className="w-[90%] mx-auto">
        <AboutSection />
        <WorkSection />
      </main>
    </div>
  );
}
