"use client"
import{ useState } from "react";
import {   ContainerAnimated,
  ContainerStagger,
  GalleryGrid,
  GalleryGridCell,
 } from "@/component/Project/cta-section-with-gallery";
import { FullscreenImageOverlay } from "@/component/Project/FullscreenImageOverlay" 

const IMAGES = [
  "/assets/capstone1.png",
  "/assets/capstone2.png",
  "/assets/capstone3.png",
  "/assets/capstone4.png",
]

export const Capstone = () => {

  const[selectedImage, setSelectedImage ] =useState <null|string>(null);

  return (
    <section>
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-8 px-8 py-5 md:grid-cols-2">
        <ContainerStagger>
          <ContainerAnimated className="mb-4 block text-xs font-medium text-rose-500 md:text-sm">
            SAIT Capstone Project
          </ContainerAnimated>
          <ContainerAnimated className="text-4xl font-semibold md:text-[2.4rem] tracking-tight">
            Orbit Inventory Management System
          </ContainerAnimated>
          <ContainerAnimated className="my-4 text-base text-slate-700 md:my-6 md:text-lg py-8">
            Designed intuitive UI/UX with Figma and developed a scalable inventory system using Next.js, React, and TypeScript. Integrated Firebase, built RESTful APIs, and implemented features like role-based access and low-stock alerts. Completed over 8 months from draft to deployment by a team of five.          </ContainerAnimated>
        </ContainerStagger>

        <GalleryGrid>
          {IMAGES.map((imageUrl, index) => (
            <GalleryGridCell
              index={index}
              key={index}
              onClick={() => {
                console.log("Clicked:", imageUrl)
                setSelectedImage(imageUrl)
              }}
            >
              <img
                className="size-full object-cover object-center pointer-events-none"
                width="100%"
                height="100%"
                src={imageUrl}
                alt={`Capstone Image ${index + 1}`}
              />
            </GalleryGridCell>

          ))}
        </GalleryGrid>
      </div>

      {selectedImage && (
        <FullscreenImageOverlay
          src={selectedImage}
          onClose={() => setSelectedImage(null)}
        />
      )}

    </section>
  )
}
