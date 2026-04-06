"use client";
import { useLanguage } from "@/context/languageContext";
import { FaWhatsapp } from "react-icons/fa"; // Certifique-se de ter o react-icons instalado

export const MentorshipSection = () => {

  const { t } = useLanguage();

  return (
    <section id="mentorship" className="py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-[#EDE6D3] mb-8">
        {t.mentorship.title}
        </h2>
        
        <div className="space-y-6 text-[#C2A48C] text-lg lg:text-xl leading-relaxed">
          <p>
            {t.mentorship.p1}
          </p>
          
          <p>
          {t.mentorship.p2}
          </p>
          
          <p>
          {t.mentorship.p3}
          </p>
        </div>

        <div className="mt-12 flex justify-center">
          <a 
            href="https://wa.link/wipd5v" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-8 py-4 bg-[#25D366] hover:bg-[#128C7E] text-white font-bold rounded-full transition-all transform hover:scale-105 shadow-lg"
          >
            <FaWhatsapp size={24} />
            Me chama no WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};