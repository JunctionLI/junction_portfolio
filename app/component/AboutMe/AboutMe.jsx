"use client"

import { GlowCard } from "@/component/GlowCard/spotlight-card";
import Skill from "../Skill/Skill";
import Image from "next/image";
import Introduction from "./Introduction";
import { LiquidGlass } from "./liquid-glass";


export default function AboutMe() {



  return (
<section className="flex flex-col lg:flex-row flex-wrap min-h-screen font-sans px-4 sm:px-6 lg:px-8 gap-8">
  {/* 左边 */}
  <div className="w-full lg:flex-1 lg:max-w-[40%] p-8 lg:sticky top-0 h-auto lg:h-screen text-center">
    <div className="flex justify-center items-center my-8 w-full max-w-[800px] sm:max-w-[600px] mx-auto">
      <LiquidGlass borderRadius={60} blur={1} />
      <Image
        className="w-full h-auto object-contain"
        width={800}
        height={800}
        src="/assets/body.png"
        alt="ai generate"
      />
    </div>
  </div>

  {/* 右边 */}
  <div className="w-full lg:flex-1 lg:max-w-[60%] flex flex-col gap-12 px-4 items-center justify-center">
    <GlowCard width="100%" customSize={true} className="w-full max-w-[800px]">
      <Introduction />
      <Skill />
    </GlowCard>
  </div>
</section>

  );
}
