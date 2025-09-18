"use client";
import { Syne } from "next/font/google";
import Title from "../ui/Title";
import TimelineItem from "./TimelineItem";

const syne = Syne({ subsets: ["latin"] });

const TimelineData = [
  {
    companyImg: "/rspblue.svg",
    jobTitle: "Full Stack Software Engineer",
    company: "RSP Blue",
    jobType: "Indirect Contract",
    duration: "Jun 2024 - Current",
    stuffIDid: [
      "Engineered and delivered full-stack software solutions, including web and mobile interface prototypes, for a diverse portfolio of high-profile clients.",
      "iG Corp: Led the development of responsive landing pages, new features for the iG Mail Premium product, and the UI for the 'My Account' portal. Engineered a unified platform to centralize all iG products and payment processing. Spearheaded email marketing campaigns that successfully recovered 33.1% of lapsed subscribers. Tech Stack/Skills: JQuery, JavaScript/TypeScript, HTML, CSS, Wordpress, React.js, Next.js, C#, .NET, Entity Framework, SQL, AI, GTM, Email Marketing, Git/GitHub, Figma",
      "Copastur: Developed key frontend features, new modules, and delivered significant performance upgrades using React.js. Built a spreadsheet import tool for the event management system, automating calculations to save client time and costs. Took ownership of resolving critical bugs in high-value features. Tech Stack/Skills: React.js, Vite.js, TailwindCss JavaScript/TypeScript, HTML, CSS, Node.js, REST APIs, C#, .NET, Azure, Micro Services, Figma",
      "Mundial Logistics: Built the primary media carousel for the supply chain portal, implementing features like image zoom, minimaps, and fullscreen mode to improve supplier interaction. Tech Stack: JavaScript/TypeScript, ASP.NET Core, HTML, CSS/Sass, jQuery, Git/GitHub",
      "KWI: Architected an AI-powered n8n automation to generate comprehensive import dossiers for health products. The system analyzes taxes and regulations to provide a 'Go/No-Go' evaluation and delivers reports in Portuguese, English, and Korean. Tech Stack: n8n, Gemini AI, JavaScript, Node.js",
      "SemParar: Developed new features for the company's mobile app using React Native and implemented best practices to optimize data handling and overall performance. Tech Stack: React Native, React.js, JavaScript/TypeScript, Redux, REST APIs, Git/GitHub",
    ],
  },
  {
    companyImg: "/kenzie.svg",
    jobTitle: "Full Stack Monitor",
    company: "Kenzie Academy",
    jobType: "Indirect Contract",
    duration: "Nov. 2023 - May. 2024",
    stuffIDid: [
      "Provided assistance to students in backend and frontend modules.",
      "Debugged and reviewed student’s projects",
      "I also helped interns grasp the basics of design enabling them to make meaningful contributions.",
      "Tech Stack: React.js, Next.js, JavaScript/TypeScript, HTML, CSS, REST APIs, Python, Django, Nest.js, PostegreSQL, Figma.",
    ],
  },
];

export default function Timeline() {
  return (
    <div className="mt-10 md:mt-[110px]">
      <Title> Work experience</Title>

      {/* THE THING, AFTER WHICH I WOULD DETERMINE THE HEIGHT */}
      <div className="flex mt-6 gap-4 pl-3">
        <div className="w-3 h-auto bg-linear-to-b from-white to-transparent" />

        <div className="flex flex-col gap-10">
          {TimelineData.map((item, index) => (
            <TimelineItem
              key={index}
              companyImg={item.companyImg}
              jobTitle={item.jobTitle}
              company={item.company}
              jobType={item.jobType}
              duration={item.duration}
              stuffIDid={item.stuffIDid}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
