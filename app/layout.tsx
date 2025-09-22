import type { Metadata } from "next";
import { Syne } from "next/font/google";
import { Kumbh_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import Header from "./components/header-section/Header";
import { ViewProvider } from "@/contexts/ViewContext";
import emailjs from "@emailjs/browser";

const kumbhSans = Kumbh_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  // General Metadata
  title: "Dan - Software Engineer",
  description:
    "Full Stack Software Engineer specializing in building efficient systems and intuitive interfaces with modern technologies. Explore my portfolio, projects, and experience.",
  authors: [{ name: "Daniel Neves Fonseca" }],
  keywords: [
    "Full Stack Engineer",
    "Software Developer",
    "Mobile Development",
    "Web Development",
    "Frontend",
    "Backend",
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Nest.js",
    ".NET",
    "SQL",
    "C#",
    "Microsoft",
    "React Native",
    "Portfolio",
    "Daniel Neves Fonseca",
  ],

  // Open Graph (for social media link previews)
  openGraph: {
    title: "Daniel Neves Fonseca - Full Stack Software Engineer",
    description:
      "Explore my portfolio showcasing projects, experience, and skills in modern web development technologies.",
    url: "https://danieldev.net.br", // Your new portfolio URL
    siteName: "Daniel Neves Fonseca's Portfolio",
    images: [
      {
        // TODO: Replace with your public image URL (e.g., 1200x630px)
        url: "/daniel_fundo_azul.png",
        width: 1200,
        height: 630,
        alt: "Daniel Neves Fonseca - Full Stack Software Engineer",
      },
    ],
    locale: "en-US",
    type: "website",
  },

  // Twitter Card
  // twitter: {
  //   card: "summary_large_image",
  //   title: "Daniel Neves Fonseca - Full Stack Software Engineer",
  //   description:
  //     "Specializing in building efficient systems and intuitive interfaces with modern technologies. Let's connect!",
  //   // TODO: Add your Twitter handle if you have one
  //   // creator: "@your_twitter_handle",
  //   // TODO: Replace with your public image URL
  //   images: ["YOUR_PUBLIC_IMAGE_URL.jpg"],
  // },

  // Robots and Indexing
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      "max-image-preview": "large",
    },
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  emailjs.init({
    publicKey: process.env.EMAILJS_PUBLIC_KEY!,
    // Do not allow headless browsers
    blockHeadless: true,
    blockList: {
      // Block the suspended emails
      list: ["foo@emailjs.com", "bar@emailjs.com"],
      // The variable contains the email address
      watchVariable: "userEmail",
    },
    limitRate: {
      // Set the limit rate for the application
      id: "app",
      // Allow 1 request per 10s
      throttle: 10000,
    },
  });

  return (
    <html lang="en">
      <body
        className={`${kumbhSans.className} max-w-[90%] xl:max-w-[1223px] w-full mx-auto overflow-x-hidden`}
      >
        <>
          <ViewProvider>
            <Header />
            {children}
          </ViewProvider>
          <Analytics />
          <SpeedInsights />
        </>
      </body>
    </html>
  );
}
