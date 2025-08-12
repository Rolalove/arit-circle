import { IoArrowForward } from "react-icons/io5";
type Buttonprops = {
  text: string;
  href: string;
  className?: string;
};
export const Button = ({ text, href, className }: Buttonprops) => {
  return (
    <a
      href={href}
      target="_blank"
      className={`text-white inline-flex items-center cursor-pointer bg-[#FF4F77] rounded-full py-3 px-3.5 text-base gap-2.5 ${
        className ?? ""
      }`}
    >
      {text}
      <span className="bg-[#FFFFFF] rounded-full w-[30px] h-[30px] inline-flex items-center justify-center ">
        <IoArrowForward
          size={15}
          className=" text-[#FF4F77] w-[15px] h-[15px]"
        />
      </span>
    </a>
  );
};
