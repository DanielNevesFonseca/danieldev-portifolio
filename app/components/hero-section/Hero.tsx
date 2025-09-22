"use client";
import {
  easeInOut,
  easeOut,
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import Image from "next/image";
import { useEffect, useRef } from "react";
// @ts-ignore
import { useView } from "@/contexts/ViewContext";
import "intersection-observer";
import { useInView } from "react-intersection-observer";
import ContraButton from "../about-section/ContraButton";
import Link from "next/link";

export default function Hero() {
  const handWaveAnimation = {
    rotate: [0, 15, -10, 15, -10, 15, -10, 15, -10, 15, 0],
    transition: {
      duration: 1.5,
      ease: easeInOut,
    },
  };

  const animateIn1 = {
    opacity: [0, 1],
    y: ["1rem", "0px"],
    transition: {
      delay: 1.5,
      duration: 0.7,
      ease: easeOut,
    },
  };

  const animateIn2 = {
    ...animateIn1,
    transition: {
      ...animateIn1.transition,
      delay: 2,
    },
  };

  const animateIn3 = {
    ...animateIn1,
    transition: {
      ...animateIn1.transition,
      delay: 2.4,
    },
  };

  const { setSectionInView } = useView();

  const imgRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: imgRef,
  });

  const { ref, inView } = useInView({
    threshold: 0.4,
    rootMargin: "-100px 0px",
  });

  useEffect(() => {
    if (inView) setSectionInView("home");
  }, [inView, setSectionInView]);

  const rotate = useTransform(scrollYProgress, [0, 1], ["0deg", "-15deg"]);

  return (
    <section
      ref={ref}
      className="pt-36 lg:pt-0 flex flex-col lg:flex-row h-dvh items-center lg:justify-between mb-12 lg:mb-0"
      id="home"
    >
      <div className="text sm:w-4/5 text-center lg:text-start lg:w-[60%] flex flex-col gap-6 lg:gap-11 mb-6 lg:mb-0">
        <div className="flex flex-col gap-4 lg:gap-0">
          <motion.div
            className="grid grid-cols-9 w-fit smm:flex gap-2 mx-auto lg:mx-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.1, ease: "easeOut" }}
          >
            <p className="text-white/60 text-xl smm:text-2xl lg:text-3xl col-span-6">
              Hey, there
            </p>
            <motion.div
              animate={handWaveAnimation}
              style={{ transformOrigin: "bottom right" }}
              className="col-span-3"
            >
              <Image
                src="/hand-wave.svg"
                width={30}
                height={30}
                alt="hand-waving"
              />
            </motion.div>
          </motion.div>
          <motion.h1
            className="text-[32px] smm:text-[40px] md:text-5xl lg:text-6xl xl:text-7xl leading-tight font-bold"
            initial={{ opacity: 0 }}
            animate={animateIn1}
          >
            <p className="text-white/60 inline">I&apos;m </p>
            <span className="bg-linear-to-br bg-clip-text text-transparent from-[#7CC0C4] via-[#548FBA] to-[#3C84C7]">
              Daniel Neves
            </span>
            <p>a Software Engineer</p>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={animateIn2}
            className="text-white/40  text-xl smm:text-2xl lg:text-3xl my-3"
          >
            who works for +2 years building solutions for consolidated companies
            and startups.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={animateIn3}
          className="w-full mx-auto lg:mx-0 flex flex-col gap-5 md:flex-row"
        >
          <a
            href="https://wa.link/qpabi8"
            target="_blank"
            referrerPolicy="no-referrer"
            className="w-full lg:w-fit"
          >
            <button className="w-full bg-white text-[#08233b] text-2xl uppercase font-semibold px-6 py-3 rounded ">
              Hire me
            </button>
          </a>

          <Link
            href="/resume_en.pdf"
            target="_blank"
            referrerPolicy="no-referrer"
            className="w-full lg:w-fit"
          >
            <button className="w-full bg-white text-[#08233b] text-2xl uppercase font-semibold px-6 py-3 rounded ">
              Download CV
            </button>
          </Link>
        </motion.div>
      </div>

      {/* IMAGE */}
      <div data-blobity-tooltip="Software Engineer">
        <motion.div
          ref={imgRef}
          style={{
            rotate: rotate,
          }}
          className="h-image flex items-center w-[310px] h-[380px] xl:w-[390px] xl:h-[470px] justify-center relative"
          initial={{ opacity: 0 }}
          animate={animateIn1}
        >
          <Image
            src="/daniel_fundo_azul.png"
            priority
            fill
            alt="Daniel's picture"
            className="bg-image-radial object-contain"
            quality={100}
          />
        </motion.div>
      </div>
    </section>
  );
}
