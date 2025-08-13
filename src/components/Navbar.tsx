"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useRef } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { Button } from "./Button";

const navigationItems = [
  { label: "Home", href: "/" },
  { label: "Community", href: "#" },
  { label: "Mentorship", href: "#" },
  { label: "Live Sessions", href: "#" },
];

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("/");
  const menuButtonRef = useRef(null);
  const mobileMenuRef = useRef(null);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const handleLinkClick = (href: string) => {
    setActiveLink(href);
    // Only close mobile menu for non-home links
    if (href !== "/") {
      closeMobileMenu();
    }
  };

  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[90%] md:w-[85%]">
      <nav className="bg-[#202040] text-white rounded-full flex justify-between items-center py-2.5 px-6">
        {/* Logo */}
        <Link
          href="/"
          className="relative w-[50px] h-[50px] md:w-[60px] md:h-[60px] rounded-full"
        >
          <Image
            src="/QueenAritCircle.svg"
            alt="Queen Arit Circle - Home"
            fill
            quality={100}
            className="object-contain transition-transform hover:scale-105"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex text-base gap-8">
          {navigationItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`
                  relative px-3 py-2 rounded-full transition-all duration-200 
                  hover:bg-white/10 hover:scale-105 
                  ${activeLink === item.href ? "bg-white/20 font-semibold" : ""}
                `}
                onClick={() => handleLinkClick(item.href)}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop Contact Button */}
        <div className="hidden lg:block">
          <Button text="Contact" href="https://proxy.nas.io/queenaritcircle" />
        </div>

        {/* Mobile Menu Button */}
        <button
          ref={menuButtonRef}
          className="lg:hidden text-white text-3xl p-2 rounded-full transition-all duration-200 hover:bg-white/10"
          onClick={toggleMobileMenu}
          aria-label={mobileMenuOpen ? "Close mobile menu" : "Open mobile menu"}
        >
          <span className="block transition-transform duration-200">
            {mobileMenuOpen ? <HiX /> : <HiMenu />}
          </span>
        </button>
      </nav>

      {/* Mobile Menu Dropdown */}
      <div
        className={`
          lg:hidden absolute top-full left-0 right-0 mt-2 
          bg-[#202040] text-[#f6f6ff] rounded-2xl py-6 px-6 
          transition-all duration-300 transform origin-top
          ${
            mobileMenuOpen
              ? "opacity-100 scale-y-100 translate-y-0 pointer-events-auto"
              : "opacity-0 scale-y-95 -translate-y-2 pointer-events-none"
          }
        `}
        id="mobile-menu"
        ref={mobileMenuRef}
      >
        <ul className="flex flex-col gap-3 text-base text-center py-4">
          {navigationItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`
                  block px-4 py-3 rounded-xl text-center transition-all duration-200 
                  hover:bg-white/10 hover:scale-[1.02]
                  ${activeLink === item.href ? "bg-white/20 font-semibold" : ""}
                `}
                onClick={() => handleLinkClick(item.href)}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="pt-4 border-t border-white/20 text-center">
          <Button text="Contact" href="https://proxy.nas.io/queenaritcircle" />
        </div>
      </div>
    </header>
  );
};
