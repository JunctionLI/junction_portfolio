"use client"
import { useState } from "react"
import {
  ContainerAnimated,
  ContainerStagger,
  GalleryGrid,
  GalleryGridCell,
} from "@/component/Project/cta-section-with-gallery"
import { FullscreenImageOverlay } from "@/component/Project/FullscreenImageOverlay"

const IMAGES = [
  "/assets/ai1.png",
  "/assets/a2.png",
  "/assets/a3.png",
  "/assets/a4.png",
]

export const AIProject = () => {
  const [selectedImage, setSelectedImage] = useState<null | string>(null)

  return (
    <section>
      <div className="mx-auto w-full max-w-6xl flex flex-col-reverse md:grid md:grid-cols-2 items-center gap-8 px-8 py-5">
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
                alt={`AI Project Image ${index + 1}`}
              />
            </GalleryGridCell>
          ))}
        </GalleryGrid>

        <ContainerStagger>
          <ContainerAnimated className="mb-4 block text-xs font-medium text-rose-500 md:text-sm">
            n8n AI Agent Project
          </ContainerAnimated>
          <ContainerAnimated className="text-4xl font-semibold md:text-[2.4rem] tracking-tight">
            AI Agent with Voice-to-Task Automation
          </ContainerAnimated>
          <ContainerAnimated className="my-4 text-base text-slate-700 md:my-6 md:text-lg py-10">
            Implementing a no-code AI workflow with n8n, integrating Telegram, ChatGPT, and Gmail. Simple transcripts are used to enable the AI agent to perform routine tasks.
          </ContainerAnimated>
        </ContainerStagger>
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
