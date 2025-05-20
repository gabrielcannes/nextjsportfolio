"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ProjectCard } from "./ProjectCard";
import { ProjectTag } from "./ProjectTag";

const projectsData = [
  {
    id: 1,
    title: "StreetSales",
    description:
      "Plataforma de gestão comercial focada em operações de vendas externas.",
    image: "/images/projects/streetsales.png",
    tag: ["All", "Tech"],
    previewUrl: "https://streetsales.com.br",
  },
  {
    id: 2,
    title: "NBC Bank",
    description:
      "Sistema financeiro interno com recursos de auditoria e automação de processos.",
    image: "/images/projects/nbcbank.png",
    tag: ["All", "Finance"],
    previewUrl: "https://nbcbank.com.br",
  },
  {
    id: 3,
    title: "PROCER",
    description:
      "Soluções digitais para agronegócio com foco em escalabilidade e performance.",
    image: "/images/projects/domy.png",
    tag: ["All", "Agro"],
    previewUrl: "https://www.procer.com.br",
  },
  {
    id: 4,
    title: "Banrisul (Vero)",
    description: "App mobile-first para onboarding de novos clientes PJ.",
    image: "/images/projects/banrisul.png",
    tag: ["All", "Finance"],
    previewUrl: "https://sejavero.com.br/bod/link/home.html",
  },
  {
    id: 5,
    title: "Domy Tech",
    description:
      "Soluções digitais para qualquer negócio com foco em escalabilidade e performance.",
    image: "/images/projects/domytech.png",
    tag: ["All", "Tech"],
    previewUrl: "https://domy.tec.br",
  },
];

export const ProjectSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  const [tag, setTag] = useState("All");

  const handleTagChange = (newTag: string) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-[#F3EFE7] mt-4 mb-10">
        Projetos nos quais trabalhei
      </h2>
      <div className="text-[#F3EFE7] grid grid-cols-2 sm:flex sm:flex-row justify-center gap-2 py-6">
        <ProjectTag
          name="Todos"
          onClick={() => handleTagChange("All")}
          isSelected={tag === "All"}
        />
        <ProjectTag
          name="Financeiro"
          onClick={() => handleTagChange("Finance")}
          isSelected={tag === "Finance"}
        />
        <ProjectTag
          name="Agro"
          onClick={() => handleTagChange("Agro")}
          isSelected={tag === "Agro"}
        />
        <ProjectTag
          name="Tech"
          onClick={() => handleTagChange("Tech")}
          isSelected={tag === "Tech"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((projectData, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={projectData.id}
              imgUrl={projectData.image}
              title={projectData.title}
              description={projectData.description}
              previewUrl={projectData.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};
