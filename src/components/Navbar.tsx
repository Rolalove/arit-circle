"use client";
import Image from "next/image";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { Button } from "./Button";

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[90%] md:w-[85%]">
      <nav className="bg-[#202040] text-white rounded-full flex justify-between items-center py-2.5 px-6">
        <div className="relative w-[50px] h-[50px] md:w-[60px] md:h-[60px]">
          <Image
            src="/QueenAritCircle.svg"
            alt="Queen arit circle logo"
            fill
            quality={100}
            className="object-contain"
          />
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex text-base gap-10 cursor-pointer">
          <li>Home</li>
          <li>Community</li>
          <li>Mentorship</li>
          <li>Live Sessions</li>
          <li>FAQ</li>
        </ul>

        {/* Desktop Contact Button */}
        <div className="hidden md:block">
          <Button text="Contact" href="https://proxy.nas.io/queenaritcircle" />
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          {mobileMenuOpen ? <HiX /> : <HiMenu />}
        </button>
      </nav>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 mt-2 bg-[#202040] text-white rounded-2xl py-4 px-6">
          <ul className="flex flex-col gap-4 text-base">
            <li className="cursor-pointer hover:text-gray-300">Home</li>
            <li className="cursor-pointer hover:text-gray-300">Community</li>
            <li className="cursor-pointer hover:text-gray-300">Mentorship</li>
            <li className="cursor-pointer hover:text-gray-300">
              Live Sessions
            </li>
            <li className="cursor-pointer hover:text-gray-300">FAQ</li>
          </ul>
          <div className="mt-4 pt-4 border-t border-gray-600">
            <Button
              text="Contact"
              href="https://proxy.nas.io/queenaritcircle"
            />
          </div>
        </div>
      )}
    </header>
  );
};
