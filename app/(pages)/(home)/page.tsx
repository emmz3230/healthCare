import BMI from "@/components/BMI";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import Image from "next/image";

export default function Home() {
  return (
      <div>
        <div>
          <Header/>
          <HeroSection/>
          <BMI/>
        </div>
      </div>
  );
}
