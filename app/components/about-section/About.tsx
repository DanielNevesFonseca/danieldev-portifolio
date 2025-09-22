import React from "react";

export default function About() {
  return (
    <section className="pt-24 md:pt-[150px]" id="about">
      <div className="uppercase antialiased text-4xl md:text-5xl xl:text-6xl font-bold opacity-80">
        I help companies to thrive with software.
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-[8.5fr_3.5fr] gap-8 mt-6">
        <div className="grid grid-cols-1 antialiased gap-6 text-white/80 text-xl md:text-2xl">
          <div className="leading-[34px] md:leading-[39px]">
            My lifelong passion for technology began with hardware and networks,
            understanding how systems work from the ground up. To build upon
            that foundation, I pursued a degree in Systems Analysis and
            Development, which gave me the structured knowledge to architect and
            manage complex IT systems effectively. This blend of formal
            education and practical experience is the core of my problem-solving
            approach.
          </div>
          <div className="leading-[34px] md:leading-[39px]">
            Today, as a software engineer, I apply this complete perspective to
            everything I build. Whether I&apos;m freelancing on a new MVP for a
            client or debugging a challenging issue, I am dedicated to creating
            solutions that are well-engineered from concept to deployment. I
            love making technology work seamlessly, and I have the full-stack
            skills to make it happen.
          </div>
          <div className="inline leading-[34px] md:leading-[39px]">
            Each challenge is unique so I ensure that I learn and grow through
            each one ensuring that I not only put in my best but also deliver
            solutions that businesses are proud to call their own. Wanna learn
            more? Here&apos;s <br className="hidden md:block" />
            <a className="underline" href="/resume_en.pdf">
              my résumè
            </a>
            .
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4">
          <div>
            <div className="font-bold antialiased text-xl md:text-2xl mb-2">
              Frontend Tools
            </div>
            <div className="text-white/60 text-base md:text-xl leading-8">
              JavaScript(ES6+), React, Next.js, TypeScript, Jotai, React Query,
              HTML5, Git/GitHub, React Hook Form.
            </div>
          </div>
          <div>
            <div className="font-bold antialiased text-xl md:text-2xl mb-2">
              UI Libraries
            </div>
            <div className="text-white/60 text-base md:text-xl leading-8">
              CSS3/SCSS/SASS, Tailwind CSS, Styled Components, Bootstrap,
              Shadcn/ui
            </div>
          </div>
          <div>
            <div className="font-bold antialiased text-xl md:text-2xl mb-2">
              Backend Tools
            </div>
            <div className="text-white/60 text-base md:text-xl leading-8">
              JavaScript(ES6+), TypeScript, Node.js, Nest.js, Express.js,
              Prisma, Typeorm, Python, Django, C#, .NET, SQL, REST API
            </div>
          </div>
          <div>
            <div className="font-bold antialiased text-xl md:text-2xl mb-2">
              DevOps Tools
            </div>
            <div className="text-white/60 text-base md:text-xl leading-8">
              Docker, Azure, AWS, Vercel, Render
            </div>
          </div>
          <div>
            <div className="font-bold antialiased text-xl md:text-2xl mb-2">
              Design Tools
            </div>
            <div className="text-white/60 text-base md:text-xl leading-8">
              Figma, FigJam, UI Design, Prototyping
            </div>
          </div>
        </div>
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
