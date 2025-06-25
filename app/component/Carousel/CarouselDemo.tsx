"use client";

import { Carousel } from "@/component/Carousel/carousel";


export function CarouselDemo() {
  const slideData = [
    {
      title:"Junction Li Photography",
      button:"Visit Website",
      src:"/assets/junctionli.png",
      link:"https://www.junctionliphoto.com/",
    },
    {
      title: "ME Permanent Aesthetics",
      button: "Visit Website",
      src: "/assets/me.png",
      link: "https://www.meaesthetics.ca/",
    },
    {
      title: "MZS Beauty Salon",
      button: "Visit Website",
      src: "/assets/mzs.png",
      link:"https://www.mzsbeautysalon.ca/"
    },
    {
      title: "New Face Beauty Spa",
      button: "Visit Website",
      src: "/assets/newface.png",
      link:"https://www.newfacecalgary.ca/",
    },
    {
      title: "Hey Beauty Medi Spa&Wellness",
      button: "Visit Website",
      src: "/assets/heybeauty.png",
      link:"https://www.heybeautymedispa.com/",
    },
    {
      title: "Harmony the Musical",
      button: "Visit Website",
      src: "/assets/harmony.png",
      link:"https://harmonymusical.ca/",
    },
    {
      title: "Tattooff Laser Removal",
      button: "Visit Website",
      src: "/assets/tattooff.png",
      link:"https://tattooff.ca",
    },
    {
      title: "Walk for Wing Kei 2025",
      button: "Visit Website",
      src: "/assets/walkforwingkei.png",
      link:"https://www.walkforwingkei.org/",
    },
  ];
  return (
    <div className="relative overflow-hidden w-full h-full py-15">
      <Carousel slides={slideData} />
    </div>
  );
}
