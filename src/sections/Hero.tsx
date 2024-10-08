"use client";
import Arrow from "@/assets/arrow-right.svg";
import cogImg from "@/assets/cog.png";
import Image from "next/image";
import cyl from "@/assets/cylinder.png";
import noodle from "@/assets/noodle.png";
import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion';
import { useRef } from "react";

export const Hero = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start end", "end start"],
  });

  // const { scrollXProgress } = useScroll({
  //   target: heroRef,
  //   offset: ["start end", "end start"],
  // });
  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  const translateX = useTransform(scrollYProgress, [0, 1], [150, -150]);

  
  return (
    <section ref={heroRef} className="pt-8 pb-20 md:pt-5 md:pb-10 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183ec2,#eaeefe_80%)] overflow-x-clip">
      <div className="container">
        <div className="md:flex items-center">
          <div className="md:w-[478px]">
            <div className="tx-border">
              Version 2.0 is here
            </div>
            <h1 className="heading-tx">
              Pathway to productivity
            </h1>
            <p className="dis">
              Celebrate the joy of accomplishment with an app designed to track
              your progress, motivate your efforts, and celebrate your
              successes.
            </p>
            <div className="flex gap-1 items-center mt-[30px]">
              <button className="btn btn-primary">Get for free</button>
              <button className="btn btn-text gap-1">
                <span>Learn more</span>
                <Arrow className="h-5 w-5" />
              </button>
            </div>
          </div>

          <div className="mt-20 md:mt-0 md:h-[648px] md:flex-1 relative">
            <motion.img
              src={cogImg.src}
              alt="cogimg"
              className="md:absolute md:h-full md:w-auto md:max-w-none md:-left-6 lg:left-0"
              animate={{
                translateY: [-30, 30],
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                repeatType: "mirror",
                ease: "easeInOut", 
              }}
            />

            <motion.img
              src={cyl.src}
              alt="cylimg"
              width={220}
              height={220}
              className="hidden md:block -top-8 -left-32 md:absolute"
              style={{
                translateY: translateY,
              }}
            />

            <motion.img
              src={noodle.src}
              alt="noodle"
              width={220}
              height={220}
              className="hidden lg:block top-[524px] left-[448px] md:absolute rounded-[30deg]"
              style={{
                translateY: translateY,
                rotate: 30,
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};