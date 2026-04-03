"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { useLanguage } from "../../context/languageContext";

export const HeroSection = () => {
  const { t, language } = useLanguage();

  // Movido para dentro do componente para acessar o 'language'
  const handleDownloadCV = () => {
    const link = document.createElement("a");
    
    // Lógica para selecionar o arquivo correto
    const cvFile = language === "en" ? "cvEN.pdf" : "cvPT.pdf";
    
    link.href = `/assets/${cvFile}`;
    link.download = cvFile;
    link.click();
  };

  const hireMe = () => {
    window.location.href = "https://wa.link/769rm9";
  };

  return (
    <section className="lg:py-16 bg-[#18120F]">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start z-10"
        >
          <h1 className="text-[#EDE6D3] mb-4 lg:text-8xl lg:leading-normal sm:text-4xl text-4xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9A6F56] to-[#C2A48C]">
              {t.hero.greeting}{" "}
            </span>
            <br />
            <TypeAnimation
              key={language}
              sequence={[
                t.hero.name,
                2000,
                t.hero.webDev,
                2000,
                t.hero.mobileDev,
                2000,
                t.hero.mentor,
                2000,
              ]}
              wrapper="span"
              speed={60}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#C2A48C] lg:text-xl sm:text-lg md:mr-5 mb-6 text-base">
            {t.hero.description}
          </p>
          <div>
            <button
              onClick={hireMe}
              className="cursor-pointer px-6 py-3 rounded-full mr-4 bg-gradient-to-br from-[#735B4B] via-[#9A6F56] to-[#C2A48C] hover:brightness-110 text-white sm:w-fit w-full"
            >
              {t.hero.hireMe}
            </button>
            <button 
              onClick={handleDownloadCV} // Clique agora no botão pai ou no span
              className="cursor-pointer px-1 py-1 rounded-full bg-gradient-to-br from-[#735B4B] via-[#9A6F56] to-[#C2A48C] hover:brightness-110 text-white mt-3 sm:w-fit w-full"
            >
              <span className="block bg-[#121212] hover:bg-[#1E1E1E] rounded-full px-5 py-2">
                {t.hero.downloadCv}
              </span>
            </button>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0 overflow-hidden"
        >
          <div className="flex m-auto items-center justify-center rounded-full bg-[#181818] lg:w-[400px] lg:h-[400px] w-[300px] h-[300px] relative">
            <Image
              className="rounded-full transform absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              src={"/images/avatar.png"}
              alt={"avatar"}
              width={300}
              height={300}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};