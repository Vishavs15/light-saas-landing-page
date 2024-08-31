"use client";
import productImg from "@/assets/product-image.png";
import pyramid from "@/assets/pyramid.png";
import tube from "@/assets/tube.png";
import Image from "next/image";
import { useScroll, motion, useTransform } from 'framer-motion';
import { useRef } from 'react';

export const ProductShowcase = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start']
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150])

  return (
    <div ref={sectionRef} className="bg-gradient-to-b from-[#ffffff] to-[#d2dcff] py-24 overflow-x-clip">
      <div className="container">
        <div className="section-heading">
          <div className="flex justify-center">
            <div className="tx-border">Boost your productivity</div>
          </div>
          <h2 className="heading-tx text-center text-4xl mt-5 md:text-[54px] md:leading-[60px]">
            A more effective way to track progress
          </h2>
          <p className="text-center dis mb-4">
            Celebrate the joy of accomplishment with an app designed to track
            your progress and motivate your efforts.
          </p>
        </div>
        <div className="relative">
          <Image src={productImg} alt="productImage" className="mt-10" />

          <motion.img
            src={pyramid.src}
            alt="pyramid"
            height={262}
            width={262}
            className="hidden md:block absolute -right-36 -top-32 "
            style={{
              translateY,
            }}
          />

          <motion.img
            src={tube.src}
            alt="tube"
            height={248}
            width={248}
            className="hidden md:block absolute bottom-24 -left-36"
            style={{
              translateY,
            }}
          />
        </div>
      </div>
    </div>
  );
};
