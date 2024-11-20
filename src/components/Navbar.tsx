// Next.Js Imports >>
import Link from "next/link";
// Images >>
import Logo from "./Logo";
// Static Data >>
import { navLinks } from "@/constants/nav-links";
// Components >>
import MobileNav from "./MobileNav";

const Navbar = () => {
  // << Start Links Jsx
  const LinksJsx = navLinks.map((link, index) => {
    return (
      <Link
        key={index}
        href={`#${link}`}
        className="text-sm font-semibold tracking-wide text-slate-200">
        {link}
      </Link>
    );
  });
  // End Links Jsx //>>

  return (
    <header className="fixed top-0 left-0 w-full bg-slate-900/50 backdrop-blur-md z-30">
      <div className="relative container py-6 flex justify-between align-middle transition-all">
        <Logo />
        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 capitalize">{LinksJsx}</nav>
        {/* Moblie Nav */}
        {/* React بتاعه  hooks ونقدر نستخدك  ال  csr ليه هنعمله في كومبونن منفصل عشان نخليه  */}
        <MobileNav />
      </div>
    </header>
  );
};

export default Navbar;
