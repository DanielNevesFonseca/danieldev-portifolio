import React, { useEffect } from "react";
import FolioCard from "./FolioCard";
import Title from "../ui/Title";
import { useView } from "@/contexts/ViewContext";

// @ts-ignore
import "intersection-observer";
import { useInView } from "react-intersection-observer";
import Timeline from "./Timeline";

export default function Works() {
  const { setSectionInView } = useView();

  const works = [
    {
      title: "Event Management System ",
      liveLink: "https://www.copastur.com.br/",
      about:
        "Copastur's event management system is an internal tool that streamlines registrations, from client briefing to proposal. It saves thousands of hours and expenses by automating financial calculations and client access, featuring user permissioning, Keycloak authentication, and a microservices architecture.",
      stack: [
        "react.js",
        "Vite.js",
        "TailwindCSS",
        "typescript",
        "javascript",
        "C#",
        ".NET",
        "MS SQL Server",
        "Azure",
      ],
      videoUrl: "/video/demo_copastur_reduced.mp4",
      imgThumbnailURL: "mockup_copa.svg",
      owner: "Copastur",
      roles: ["Backend", "Frontend"],
    },
    {
      title: "iG My Account ",
      liveLink: "https://www.ig.com.br/",
      about:
        "Web system designed to centralize all iG products and partners, creating a comprehensive marketplace hub for clients.",
      stack: [
        "next.js",
        "typescript",
        "javascript",
        "C#",
        ".NET",
        "MS SQL Server",
        "Azure",
      ],
      videoUrl: "/video/demo_ig_my_account.mp4",
      imgThumbnailURL: "mockup_ig.svg",
      owner: "iG Corp",
      roles: ["Backend", "Frontend"],
    },
    {
      title: "RH Plus",
      liveLink: "https://www.disnibra.com.br/",
      about:
        "System projects to manage employee scheduling and access control.",
      stack: ["react.js", "javascript", "TailwindCSS", "Docker", "Vercel"],
      videoUrl: "/video/demo_rhplus.mp4",
      imgThumbnailURL: "mockup_rhplus.svg",
      gitLink: "https://github.com/DanielNevesFonseca/rh_plus_frontend",
      roles: ["Frontend"],
    },
    {
      title: "Park Well",
      liveLink: "https://aslsoftware.com.br/",
      about:
        "Parking management systems for cars, motorcycles and vallets created to replace desktop systems from ASL Software. I performed the initial web development both on the frontend and the backend.",
      stack: [
        "react.js",
        "typescript",
        "Bootstrap",
        "Docker",
        "Postgre SQL",
        "nest.js",
        "Typeorm",
        "Swagger",
      ],
      videoUrl: "/video/estacionabem_demo.mp4",
      imgThumbnailURL: "mockup_parkwell.svg",
      gitLink: "https://github.com/DanielNevesFonseca/rh_plus_frontend",
      roles: ["Backend", "Frontend"],
    },
    // {
    //   title: "Shortly",
    //   gitLink: "https://github.com/adex-hub/url-shortening-api-landing",
    //   liveLink: "https://lnk-shortener.netlify.app/",
    //   about:
    //     "A link shortener for a fictional company that effectively shortens links and stores them. No matter how many links you shorten, you can revisit the site anytime to view and manage your previously shortened links.",
    //   stack: ["next.js", "typescript", "framer motion", "tailwindcss"],
    //   img: "/shortly.svg",
    // },
    // {
    //   title: "Where in the world",
    //   gitLink: "https://github.com/adex-hub/where-in-the-world",
    //   liveLink: "https://where-in-the-world-ade.netlify.app/",
    //   about:
    //     "A fun tool for checking information about any country in the world such as the country’s native name, currency, population,  border countries etc. It features dynamic routing for each country and theme switch.",
    //   stack: ["react", "react-router", "javascript", "tailwindcss"],
    //   img: "/witw.svg",
    // },
    // {
    //   title: "Yourtodo",
    //   gitLink: "https://github.com/adex-hub/Yourtodo",
    //   liveLink: "https://yourtodo-v1.vercel.app/",
    //   about:
    //     "This task management system lets you customize your name, add, delete, and edit tasks, and celebrates you when tasks are completed. It features built-in notifications and stores data in the browser, allowing you to resume tasks conveniently. Designed and developed by yours truly.",
    //   stack: ["react", "javascript", "figma", "sass"],
    //   img: "/todo.svg",
    // },
    // {
    //   title: "Multi-step form",
    //   gitLink: "https://github.com/adex-hub/multi-step-form-main",
    //   liveLink: "https://ade-loremgaming.netlify.app/",
    //   about:
    //     "This site features a clean, user-friendly multi-step form for subscribing to a gaming service. Users input personal info, select a plan (monthly or yearly), choose add-ons (online service, larger storage, customizable profile), and review the summary before confirming.",
    //   stack: ["html", "sass", "javascript", "ms clarity"],
    //   img: "/multistep.svg",
    // },
  ];

  const { ref, inView } = useInView({
    threshold: 0.1,
    rootMargin: "-100px 0px",
  });

  useEffect(() => {
    if (inView) setSectionInView("work");
  }, [inView, setSectionInView]);

  return (
    <section
      className="flex flex-col gap-6 md:gap-10 pt-[110px]"
      ref={ref}
      id="work"
    >
      <Title>Projects</Title>
      {works.map((work, index) => (
        <FolioCard
          key={index}
          imgThumbnailURL={work.imgThumbnailURL!}
          title={work.title}
          gitLink={work.gitLink}
          liveLink={work.liveLink}
          about={work.about}
          stack={work.stack}
          owner={work.owner}
          videoUrl={work.videoUrl}
          roles={work.roles}
        />
      ))}

      <Timeline />
    </section>
  );
}
