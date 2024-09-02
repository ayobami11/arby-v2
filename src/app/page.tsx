import Header from "@/components/Header";
import Introduction from "./components/Introduction";
import Skills from "@/components/home/Skills";
import Socials from "@/components/Socials";

export default function Home() {
  return (
    <div className="min-h-screen font-sans py-8 text-white bg-[linear-gradient(hsla(200deg,10%,12%,0.3),hsla(200deg,10%,12%,0.3)),url('/assets/images/page-bg.png')]">
      <div className="w-[90%] mx-auto">
        <Header />
        <main className="flex-1">
          <Introduction />
          <Skills />
          <Socials />
        </main>
      </div>
    </div>
  );
}
