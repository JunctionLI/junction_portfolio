import { IconCloud } from "@/component/Skill/interactive-icon-cloud"

const slugs = [
  "typescript",
  "javascript",
  "react",
  "android",
  "html5",
  "css3",
  "nodedotjs",
  "nextdotjs",
  "amazonaws",
  "postgresql",
  "mysql",
  "firebase",
  "vercel",
  "docker",
  "git",
  "github",
  "visualstudiocode",
  "androidstudio",
  "figma",
]

export function IconCloudDemo() {
  return (
    <div className="relative flex items-center justify-center overflow-hidden rounded-lg px-4 sm:px-8 py-8 w-full h-[300px] sm:h-[400px] md:h-[500px]">
      <IconCloud iconSlugs={slugs} />
    </div>
  )
}
