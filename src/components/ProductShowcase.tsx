"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import appScreen from "../assets/images/app-screen.png";
import Image from "next/image";
import { useEffect, useRef } from "react";
export const ProductShowcase = () => {
  const appImage = useRef<HTMLImageElement>(null);
  const { scrollYProgress } = useScroll({
    target: appImage,
    offset: ["start end", "end end"],
  });
  useEffect(() => {
    scrollYProgress.on("change", (latestValue) => {
      console.log(latestValue);
    });
  }, [scrollYProgress]);
  const rotateX = useTransform(scrollYProgress, [0, 1], [15, 0]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.5, 1]);
  return (
    <div className="bg-black text-white bg-gradient-to-b from-black to-[#5D2CAB] py-[72px]">
      <div className="container">
        <h2 className="text-center text-5xl font-bold tracking-tighter sm:text-6xl">
          Built for focus and clarity
        </h2>
        <div className="max-w-xl mx-auto">
          <p className="text-xl text-center mt-5 text-white/70">
            Our intuitive dashboard gives your team full visibility into
            projects, deadlines, and responsibilities.
          </p>
        </div>
        <motion.div
          style={{
            opacity: opacity,
            rotateX: rotateX,
            transformPerspective: "800px",
          }}
        >
          <Image
            src={appScreen}
            alt="App Screen"
            className="mt-14 max-w-full w-full"
            ref={appImage}
          />
        </motion.div>
      </div>
    </div>
  );
};
