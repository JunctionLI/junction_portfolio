import { MarqueeAnimation } from "@/component/Marquee/marquee-effect";

function MarqueeEffectDoubleExample() {
  return (
    <div className="flex flex-col gap-4">
      <MarqueeAnimation
        direction="left"
        baseVelocity={-3}
        className="bg-green-500 text-white py-2"
      >
        I would love to change the world
      </MarqueeAnimation>
      <MarqueeAnimation
        direction="right"
        baseVelocity={-3}
        className="bg-purple-500 text-white py-2"
      >
        But they won&apos;t give me the source code
      </MarqueeAnimation>
    </div>
  );
}

export { MarqueeEffectDoubleExample }; 