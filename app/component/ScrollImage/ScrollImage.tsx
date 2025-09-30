"use client";
import React from "react";
import { ContainerScroll } from "@/component/ScrollImage/container-scroll-animation";
import Image from "next/image";
import { SparklesText } from "../SparkleText/sparkles-text";

export function HeroScrollDemo() {
  return (
    <div className="flex flex-col overflow-hidden ">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-black dark:text-white">
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
          <SparklesText text="Graphic Design" className="text-2xl" />
          <SparklesText text="SEO & Social Media Strategy" className="text-2xl" />
          <SparklesText text="Event & Product Photography" className="text-2xl" />
        </div>
      
    </div>
  );
}
