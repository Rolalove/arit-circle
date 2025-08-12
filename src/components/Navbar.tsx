import Image from "next/image";
import { Button } from "./Button";

export const Navbar = () => {
  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[90%] md:w-[85%]">
      <nav className="bg-[#202040] text-white rounded-full flex justify-between items-center py-2.5 px-6">
        <div>
          <Image
            src="/QueenAritCircle.svg"
            alt="Queen arit circle logo"
            width={60}
            height={60}
            quality={100}
          />
        </div>

        <ul className="hidden md:flex text-base gap-10 cursor-pointer">
          <li>Home</li>
          <li>Community</li>
          <li>Mentorship</li>
          <li>Live Sessions</li>
          <li>FAQ</li>
        </ul>

        <div className="hidden md:block">
          <Button text="Contact" href="https://proxy.nas.io/queenaritcircle" />
        </div>
      </nav>
    </header>
  );
};
