"use client";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import helixImage from "../assets/images/helix2.png";
import emojiStartImage from "../assets/images/emojistar.png";

export const CallToAction = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const helixY = useTransform(scrollYProgress, [0, 1], [150, -150]);
  const emojiY = useTransform(scrollYProgress, [0, 1], [-150, 150]);

  return (
    <div
      ref={ref}
      className="bg-black text-white py-[72px] sm:py-24 text-center"
    >
      <div className="container max-w-xl relative">
        <motion.div style={{ y: helixY }}>
          <Image
            src={helixImage}
            alt="helix"
            className="absolute top-6 left-[calc(100%+36px)] hidden md:block"
          />
        </motion.div>
        <motion.div style={{ y: emojiY }}>
          <Image
            src={emojiStartImage}
            alt="emoji start"
            className="absolute -top-[120px] right-[calc(100%+24px)] hidden md:block"
          />
        </motion.div>
        <h2 className="font-bold text-5xl tracking-tighter sm:text-6xl">
          Get your team in sync today
        </h2>
        <p className="text-xl text-white/70 mt-5">
          Start organizing tasks, tracking launches, and delivering projects
          faster with one powerful dashboard.
        </p>
        <form className="mt-10 flex flex-col gap-2.5 w-full max-w-sm sm:max-w-2xl md:max-w-3xl mx-auto sm:flex-row">
          <input
            type="email"
            placeholder="contact@AymaneMehdi.com"
            className="h-12 bg-white/20 rounded-lg px-5 font-medium placeholder:text-[#9CA3AF] text-white sm:flex-1 focus:outline-none focus:ring-2 focus:ring-white/50 transition"
          />
          <button
            type="submit"
            className="bg-white text-black h-12 rounded-lg px-6 font-medium hover:bg-white/90 transition whitespace-nowrap flex items-center justify-center"
          >
            Get instant access
          </button>
        </form>
      </div>
    </div>
  );
};
