"use client";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/16/solid";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useLanguage } from "../../context/languageContext";
import { MenuOverlay } from "./MenuOverlay";
import { NavLink } from "./NavLink";

export const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const navlinks = [
    {
      title: t.navbar.about,
      href: "#about",
    },
    {
      title: t.navbar.projects,
      href: "#projects",
    },
    {
      title: t.navbar.contact,
      href: "#contact",
    },
  ];

  return (
    <nav className="fixed top-0 border border-[#33353F] left-0 right-0 z-20 bg-[#121212] bg-opacity-90 backdrop-blur-sm px-5">
      <div className="flex container flex-wrap items-center justify-between mx-auto px-4 py-2">
        <Link
          className="text-2xl md:text-5xl text-white font-semibold"
          href={"/"}
        >
          <Image
            width={80}
            height={80}
            alt="logo"
            src={"/images/logo.png"}
            className="hover:opacity-80 transition-opacity"
          />
        </Link>

        {/* Menu Mobile e Botão de Idioma Mobile */}
        <div className="flex items-center gap-4 md:hidden">
            {/* Botão de Idioma (Mobile) */}
            <button
                onClick={() => setLanguage(language === "en" ? "pt" : "en")}
                className="text-xs font-bold border border-slate-500 px-2 py-1 rounded text-slate-200 hover:bg-white hover:text-black transition-all"
            >
                {language.toUpperCase()}
            </button>

          <div className="mobile-menu block">
            {navbarOpen ? (
              <button
                onClick={() => setNavbarOpen(false)}
                className="cursor-pointer flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
              >
                <XMarkIcon className="h-5 w-5"></XMarkIcon>
              </button>
            ) : (
              <button
                onClick={() => setNavbarOpen(true)}
                className="cursor-pointer flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
              >
                <Bars3Icon className="h-5 w-5"></Bars3Icon>
              </button>
            )}
          </div>
        </div>

        {/* Menu Desktop */}
        <div className="menu hidden md:flex md:items-center md:gap-8" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {navlinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.href} title={link.title}></NavLink>
              </li>
            ))}
          </ul>
          
          {/* Botão de Troca de Idioma (Desktop) */}
          <button
            onClick={() => setLanguage(language === "en" ? "pt" : "en")}
            className="flex items-center gap-2 border border-[#33353F] hover:border-white px-4 py-1.5 rounded-full text-sm font-medium text-slate-200 hover:text-white transition-all group"
          >
            <span className={language === 'pt' ? 'text-white' : 'text-slate-500 group-hover:text-slate-300'}>PT</span>
            <span className="text-[#33353F]">|</span>
            <span className={language === 'en' ? 'text-white' : 'text-slate-500 group-hover:text-slate-300'}>EN</span>
          </button>
        </div>
      </div>

      {navbarOpen ? <MenuOverlay links={navlinks}></MenuOverlay> : null}
    </nav>
  );
};