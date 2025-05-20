import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent bg-[#121212] text-white">
      <div className="container p-12 flex justify-between items-center">
        <Image
          width={100}
          height={100}
          alt="logo"
          src={"/images/logo.png"}
        ></Image>
        <p className="text-slate-600">Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};
