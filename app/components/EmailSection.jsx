"use client";
import Image from "next/image";
import Link from "next/link";
import GithubIcon from "../../public/github.svg";
import LinkedInIcon from "../../public/linkedin.png";

export const EmailSection = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };

    const mailto = `mailto:gabrielcannes.gc@gmail.com?subject=${encodeURIComponent(data.subject)}&body=${encodeURIComponent(`De: ${data.email}\n\n${data.message}`)}`;
    window.location.href = mailto;
  };

  return (
    <section id="contact" className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative">
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">Vamos Conectar</h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          Estou buscando novas oportunidades, minha caixa de entrada está sempre aberta.
          Seja para tirar dúvidas ou apenas para dizer oi, farei o possível para responder!
        </p>
        <div className="socials flex flex-row gap-2">
          <Link
            className="cursor-pointer"
            href={"https://github.com/gabrielcannes"}
          >
            <Image
              width={30}
              height={30}
              src={GithubIcon}
              alt={"Ícone Github"}
            />
          </Link>
          <Link
            className="cursor-pointer"
            href={
              "https://www.linkedin.com/in/gabriel-coelho-cannes-406a84140/"
            }
          >
            <Image
              width={30}
              height={30}
              src={LinkedInIcon}
              alt={"Ícone LinkedIn"}
            />
          </Link>
        </div>
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        <div className="w-full flex flex-col">
          <label
            htmlFor="email"
            className="text-white block text-sm font-medium mb-2"
          >
            Seu e-mail
          </label>
          <input
            name="email"
            id="email"
            type="email"
            required
            className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block p-2.5"
            placeholder="seuemail@exemplo.com"
          />
        </div>

        <div className="w-full flex flex-col">
          <label
            htmlFor="subject"
            className="text-white block mb-2 text-sm font-medium "
          >
            Assunto
          </label>
          <input
            name="subject"
            id="subject"
            type="text"
            required
            className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block p-2.5"
            placeholder="Apenas dizendo oi!"
          />
        </div>

        <div className="w-full flex flex-col">
          <label
            htmlFor="message"
            className="text-white block text-sm mb-2 font-medium"
          >
            Mensagem
          </label>
          <textarea
            name="message"
            id="message"
            rows={4}
            required
            className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block p-2.5"
            placeholder="Oi, estou interessado em..."
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full text-white bg-[#C2A48C] hover:bg-[#9A6F56] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center cursor-pointer"
        >
          Enviar mensagem
        </button>
      </form>
    </section>
  );
};
