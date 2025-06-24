// component.tsx
'use client';

import { useScroll, useTransform, motion, MotionValue } from 'motion/react';
import Head from "@/component/Head/Head";
import AboutMe from "@/component/AboutMe/AboutMe";

import React, { useRef, forwardRef } from 'react';

interface SectionProps {
  scrollYProgress: MotionValue<number>;
}

const Section1: React.FC<SectionProps> = ({ scrollYProgress }) => {
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, -5]);
  return (
    <motion.section
      style={{ scale, rotate }}
      className='sticky  font-semibold top-0 h-screen'
    >
      <div className='absolute bottom-0 left-0 right-0 top-0 bg-transparent'>

        <Head/>
      </div>

        
    </motion.section>
  );
};

const Section2: React.FC<SectionProps> = ({ scrollYProgress }) => {
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const rotate = useTransform(scrollYProgress, [0, 1], [5, 0]);

  return (
    <motion.section
      style={{ scale, rotate }}
      className='relative h-screen '
    >
      <div className='absolute bottom-0 left-0 right-0 top-0'></div>
      <article className='container mx-auto relative z-10 '>
        <div className='grid grid-cols-4 gap-4'>
            
        </div>
      </article>
    </motion.section>
  );
};

const Component = forwardRef<HTMLElement>((props, ref) => {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  });

  return (
    <>
      <main ref={container} className='relative h-[200vh]'>
        <Section1 scrollYProgress={scrollYProgress} />
        <Section2 scrollYProgress={scrollYProgress} />
      </main>
    </>
  );
});

Component.displayName = 'Component';

export default Component;