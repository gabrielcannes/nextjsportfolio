"use client";
import Image from "next/image";
import { useState, useTransition } from "react";
import { useLanguage } from "../../context/languageContext";
import { TabButton } from "./TabButton";

export const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();
  const { t } = useLanguage(); // Pegando as traduções

  const TAB_DATA = [
    {
      title: t.about.skills,
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
      title: t.about.education,
      id: "education",
      content: (
        <ul className="list-disc p-2">
          {t.about.eduList.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      ),
    },
    {
      title: t.about.experience,
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
          alt="About Image"
          width={500}
          height={500}
          className="mb-5"
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-[#EDE6D3] mb-4">{t.about.title}</h2>
          <p className="text-[#C2A48C] lg:text-lg text-base">
            {t.about.description}
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
              text={t.about.skills}
            />
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
              text={t.about.education}
            />
            <TabButton
              selectTab={() => handleTabChange("experience")}
              active={tab === "experience"}
              text={t.about.experience}
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