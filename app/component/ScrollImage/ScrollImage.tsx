"use client";
import React from "react";
import { ContainerScroll } from "@/component/ScrollImage/container-scroll-animation";
import Image from "next/image";
import { SparklesText } from "../SparkleText/sparkles-text";

export function HeroScrollDemo() {
  return (
    <div className="flex flex-col overflow-hidden pb-[5px] pt-[5px]">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-black dark:text-white">
              <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                More Than Web Design
              </span>
            </h1>
          </>
        }
      >
        <Image
          src={`/assets/portfolio.png`}
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
        />
      </ContainerScroll>

        <div className="flex flex-col md:flex-row justify-between">
          <SparklesText text="Logo & Branding Design" className="text-2xl" />
          <SparklesText text="SEO & Marketing Strategy" className="text-2xl" />
          <SparklesText text="Customize Social Media Creator" className="text-2xl" />
        </div>
      
    </div>
  );
}
