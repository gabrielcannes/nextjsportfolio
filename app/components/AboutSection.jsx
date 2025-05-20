"use client";
import Image from "next/image";
import { useState, useTransition } from "react";
import { TabButton } from "./TabButton";

const TAB_DATA = [
  {
    title: "Habilidades",
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
    title: "Formação",
    id: "education",
    content: (
      <ul className="list-disc p-2">
        <li>Ciência da Computação - Centro Universitário Ritter dos Reis</li>
        <li>Desenvolvimento Full Stack - Bootcamp Awari</li>
        <li>Desenvolvimento Web - Alura</li>
      </ul>
    ),
  },
  {
    title: "Experiência",
    id: "experience",
    content: (
      <ul className="list-disc p-2">
        <li>Desenvolvedor Full Stack - NBC Bank</li>
        <li>Desenvolvedor Full Stack - Dell</li>
        <li>Engenheiro de Software - Banrisul</li>
        <li>Desenvolvedor Front-end Sênior - Domy</li>
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
          alt="Imagem 2D"
          width={500}
          height={500}
          className="mb-5"
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-[#EDE6D3] mb-4">Sobre Mim</h2>
          <p className="text-[#C2A48C] lg:text-lg text-base">
            Sou Desenvolvedor Full Stack com forte especialização em Front-End,
            atuando desde 2019 em empresas de grande porte como NBC Bank, Dell,
            Banrisul e Domy. Ao longo da minha trajetória, acumulei experiência
            em projetos estratégicos e globais, desenvolvendo sistemas robustos,
            escaláveis e com foco na experiência do usuário.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
              text="Habilidades"
            />
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
              text="Formação"
            />
            <TabButton
              selectTab={() => handleTabChange("experience")}
              active={tab === "experience"}
              text="Experiência"
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
