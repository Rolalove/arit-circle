import { HeroSection } from "@/components/HeroSection";
import { Navbar } from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className=" flex flex-col  justify-center items-center lg:min-h-screen">
        <HeroSection />
      </main>
    </>
  );
}
