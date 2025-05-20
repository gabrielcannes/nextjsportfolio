"use client";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/16/solid";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { MenuOverlay } from "./MenuOverlay";
import { NavLink } from "./NavLink";

const navlinks = [
  {
    title: "Sobre",
    href: "#about",
  },
  {
    title: "Projetos",
    href: "#projects",
  },
  {
    title: "Contato",
    href: "#contact",
  },
];

export const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <nav className="fixed top-0 border border-[#33353F] left-0 right-0 z-20 bg-[#121212] px-5">
      <div className="flex container flex-wrap items-center justify-between mx-auto px-4">
        <Link
          className="text-2xl md:text-5xl text-white font-semibold"
          href={"/"}
        >
          <Image
            width={100}
            height={100}
            alt="logo"
            src={"/images/logo.png"}
          ></Image>
        </Link>
        <div className="mobile-menu block md:hidden">
          {navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(false)}
              className="cursor-pointer flex items-center px-3 py-2 border rounded  border-slate-200Ï text-slate-200 hover:text-white hover:border-white"
            >
              <XMarkIcon className="h-5 w-5"></XMarkIcon>
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(true)}
              className="cursor-pointer flex items-center px-3 py-2 border rounded  border-slate-200Ï text-slate-200 hover:text-white hover:border-white"
            >
              <Bars3Icon className="h-5 w-5"></Bars3Icon>
            </button>
          )}
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-10">
            {navlinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.href} title={link.title}></NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {navbarOpen ? <MenuOverlay links={navlinks}></MenuOverlay> : null}
    </nav>
  );
};
