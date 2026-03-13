"use client";
import Image from "next/image";
import { useState, useTransition } from "react";
import { TabButton } from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <div className="flex gap-8 w-full items-center">
        <ul className="list-disc list-inside flex flex-col">
          <li>Angular</li>
          <li>React</li>
          <li>Next.js</li>
          <li>Node.js</li>
        </ul>
        <ul className="list-disc list-inside flex flex-col">
          <li>TypeScript</li>
          <li>Tailwind CSS</li>
          <li>Bootstrap</li>
          <li>Material UI</li>
        </ul>
      </div>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc p-2">
        <li>Computer Science - Centro Universitário Ritter dos Reis</li>
        <li>Full Stack Development - Awari Bootcamp</li>
        <li>Web Development - Alura</li>
      </ul>
    ),
  },
  {
    title: "Experience",
    id: "experience",
    content: (
      <ul className="list-disc p-2">
        <li>Full Stack Developer - NBC Bank</li>
        <li>Full Stack Developer - Dell</li>
        <li>Software Engineer - Banrisul</li>
        <li>Senior Front-end Developer - Domy</li>
      </ul>
    ),
  },
];

export const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section id="about" className="text-[#EDE6D3] bg-[#121212] rounded-xl">
      <div className="md:grid grid-cols-2 gap-8 items-center py-8 px-4 lg:gap-16 sm:py-16 xl:px-16">
        <Image
          src={"/images/about-image.png"}
          alt="2D Image"
          width={500}
          height={500}
          className="mb-5"
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-[#EDE6D3] mb-4">About Me</h2>
          <p className="text-[#C2A48C] lg:text-lg text-base">
            I am a Full Stack Developer with strong specialization in Front-End,
            working since 2019 at large companies such as NBC Bank, Dell,
            Banrisul, and Domy. Throughout my career, I have gained experience
            in strategic and global projects, developing robust, scalable
            systems with a strong focus on user experience.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
              text="Skills"
            />
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
              text="Education"
            />
            <TabButton
              selectTab={() => handleTabChange("experience")}
              active={tab === "experience"}
              text="Experience"
            />
          </div>
          <div className="mt-8">
            {TAB_DATA.find((item) => item.id === tab)?.content}
          </div>
        </div>
      </div>
    </section>
  );
};
