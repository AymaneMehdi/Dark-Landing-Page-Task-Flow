"use client";
import ArrowWIcon from "../assets/icons/arrow-w.svg";
import cursorImage from "../assets/images/cursor.png";
import messageImage from "../assets/images/message.png";
import Image from "next/image";
import { motion } from "framer-motion";
export const Hero = () => {
  return (
    <div className="bg-black text-white bg-[linear-gradient(to_bottom,#000,#200D42_34%,#4F21A1_65%,#A46EDB_82%)] py-[72px] sm:py-24 relative overflow-hidden">
      <div className="absolute h-[420px] w-[750px] sm:w-[1536px] sm:h-[690px] lg:w-[2300px] lg:h-[500px] rounded-[100%] bg-black left-1/2 -translate-x-1/2 border border-[#B48CDE] bg-[radial-gradient(closest-side,#000_82%,#9560EB)] top-[calc(100%-96px)] sm:top-[calc(80%--20px)]"></div>
      <div className="container relative">
        <div className="flex items-center justify-center">
          <a
            href="#"
            className="inline-flex gap-3 border py-1 px-2 rounded-lg border-white/30"
          >
            <span className="text-white/30">Version 1.0 is here</span>
            <span className="inline-flex items-center gap-1">
              <span>Read More</span>
              <ArrowWIcon />
            </span>
          </a>
        </div>
        <div className="flex justify-center mt-8">
          <div className="inline-flex relative">
            <h1 className="text-7xl sm:text-9xl font-bold tracking-tighter text-center">
              All in One
              <br />
              Dashboard
            </h1>
            <motion.div
              className="absolute right-[540px] top-[-30px] hidden sm:inline lg:inline lg:top-[140px] lg:right-[570px]"
              drag
              dragSnapToOrigin
            >
              <Image
                src={cursorImage}
                width={200}
                height={200}
                className="max-w-none"
                alt="cursor"
                draggable="false"
              />
            </motion.div>
            <motion.div
              className="absolute top-[5px] left-[540px] hidden sm:inline lg:inline lg:top-[50px] lg:left-[610px]"
              drag
              dragSnapToOrigin
            >
              <Image
                src={messageImage}
                width={200}
                height={200}
                alt="message"
                className="max-w-none"
                draggable="false"
              />
            </motion.div>
          </div>
        </div>
        <div className="flex justify-center">
          <p className="text-center text-xl mt-8 max-w-md">
            Manage projects, assign tasks, and monitor progress from a single
            powerful workspace designed for modern teams.
          </p>
        </div>
        <div className="flex justify-center mt-8">
          <button className="bg-white text-black px-6 py-3 rounded-lg font-medium">
            Get started for free
          </button>
        </div>
      </div>
    </div>
  );
};
