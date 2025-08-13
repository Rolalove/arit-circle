import { IoArrowForward } from "react-icons/io5";

type ButtonProps = {
  text: string;
  href: string;
  className?: string;
};

export const Button = ({ text, href, className }: ButtonProps) => {
  return (
    <button className="group bg-[#FF4F77] cursor-pointer rounded-full p-1.5">
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="group-hover:bg-[#F6F6FF] font-medium inline-flex items-center gap-2 pr-2.5  rounded-full text-[#F6F6FF] text-base group-hover:text-[#FF4F77]"
      >
        {/* Icon circle */}
        <span className="rounded-full  flex items-center justify-center bg-[#f6f6ff] transition-colors duration-300 group-hover:bg-[#f6f6ff] p-2">
          <IoArrowForward
            width={15}
            height={15}
            className="text-[#FF4F77] group-hover:text-[#FF4F77]"
          />
        </span>

        {/* Text */}
        <span>{text}</span>
      </a>
    </button>
  );
};
