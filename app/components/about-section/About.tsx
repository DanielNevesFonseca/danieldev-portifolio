import { siteContent } from "@/content/siteContent";
import React from "react";

export default function About() {
  const { about } = siteContent;

  return (
    <section className="pt-24 md:pt-[150px]" id="about">
      <div className="uppercase antialiased text-4xl md:text-5xl xl:text-6xl font-bold opacity-80">
        {about.mainTitle}
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-[8.5fr_3.5fr] gap-8 mt-6">
        <div className="grid grid-cols-1 antialiased gap-6 text-white/80 text-xl md:text-2xl">
          <div className="leading-[34px] md:leading-[39px]">
            {about.descriptionParagraph1}
          </div>
          <div className="leading-[34px] md:leading-[39px]">
            {about.descriptionParagraph2}
          </div>
          <div className="inline leading-[34px] md:leading-[39px]">
            {about.descriptionParagraph3}
            Here&apos;s <br className="hidden md:block" />
            <a className="underline" href="/resume_en.pdf">
              my résumè
            </a>
            .
          </div>
        </div>
        <ul className="grid grid-cols-1 gap-4">
          {about.stackContainer.map((item) => (
            <li key={item.title}>
              <div className="font-bold antialiased text-xl md:text-2xl mb-2">
                {item.title}
              </div>
              <div className="text-white/60 text-base md:text-xl leading-8">
                {item.stacks}
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-10 sm:mt-20 lg:mt-10 mx-auto w-fit">
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
      </div>
    </section>
  );
}
