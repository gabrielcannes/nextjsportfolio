"use client"; // Adicionado para permitir o uso do Hook de contexto
import Image from "next/image";
import { useLanguage } from "../../context/languageContext";

export const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent bg-[#121212] text-white">
      <div className="container p-12 flex justify-between items-center">
        <Image
          width={100}
          height={100}
          alt="logo"
          src={"/images/logo.png"}
          className="opacity-50"
        />
        <p className="text-slate-600 text-sm md:text-base">
          {t.footer.rights}
        </p>
      </div>
    </footer>
  );
};