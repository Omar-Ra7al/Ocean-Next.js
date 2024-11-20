"use client";
// Next.Js Imports >>
import Link from "next/link";
// React Hooks >>
import { useState } from "react";
// Static Data >>
import { navLinks } from "@/constants/nav-links";
// Icons >>
import { Menu, X } from "lucide-react";
const MobileNav = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  // << Start Links Jsx
  const LinksJsx = navLinks.map((link, index) => {
    return (
      <Link
        key={index}
        href={`#${link}`}
        className="text-md tracking-wide text-slate-200 py-1 px-2 rounded-md w-full
         hover:bg-slate-800 hover:text-sky-400"
        onClick={toggleMenu}>
        {link}
      </Link>
    );
  });
  // End Links Jsx //>>

  return (
    <div
      className="flex md:hidden cursor-pointer relative"
      onClick={toggleMenu}>
      {/* Change Icons Deppend on state */}
      {isOpen ? <X /> : <Menu />}
      <nav
        className={`
        ${isOpen ? "flex" : "hidden"} flex-col 
         gap-y-3 absolute top-7 -left-28 w-auto origin-top rounded-md p-4
       bg-slate-800 capitalize hover:bg-slate-700 transition-all`}>
        {LinksJsx}
      </nav>
    </div>
  );
};

export default MobileNav;
