"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { useLanguage } from "../../context/languageContext";
import { ProjectCard } from "./ProjectCard";
import { ProjectTag } from "./ProjectTag";

export const ProjectSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  const { t } = useLanguage();
  
  // O estado do filtro continua usando a chave em inglês internamente para lógica 
  // ou podemos usar o nome vindo do translation. Vou manter "All" como base.
  const [tag, setTag] = useState("All");

  const handleTagChange = (newTag: string) => {
    setTag(newTag);
  };

  // Usamos os dados que estão no nosso arquivo de tradução
  const filteredProjects = t.projects.data.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-[#F3EFE7] mt-4 mb-10">
        {t.projects.title}
      </h2>

      <div className="text-[#F3EFE7] grid grid-cols-2 sm:flex sm:flex-row justify-center gap-2 py-6">
        <ProjectTag
          name={t.projects.tags.all}
          onClick={() => handleTagChange("All")}
          isSelected={tag === "All"}
        />
        <ProjectTag
          name={t.projects.tags.finance}
          onClick={() => handleTagChange("Finance")}
          isSelected={tag === "Finance"}
        />
        <ProjectTag
          name={t.projects.tags.agro}
          onClick={() => handleTagChange("Agro")}
          isSelected={tag === "Agro"}
        />
        <ProjectTag
          name={t.projects.tags.tech}
          onClick={() => handleTagChange("Tech")}
          isSelected={tag === "Tech"}
        />
      </div>

      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((projectData, index) => (
          <motion.li
            key={projectData.id} // Melhor usar o id do projeto que o index
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