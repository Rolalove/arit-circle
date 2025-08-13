import Image from "next/image";
import { Button } from "./Button";

export const HeroSection = () => {
  return (
    <section className="relative flex flex-col items-center text-center w-full  md:w-[90%] gap-y-4 md:gap-y-8 px-6 md:px-0">
      <Image
        src="/Capsule.png"
        width={389}
        height={44}
        alt=" Live every week, real feedback, real results"
      />
      {/* <div className="capsule-effect flex items-center border-[#f6f6ff] bg-[#f6f6ff] border gap-2 md:gap-2.5 py-2 md:py-2.5 px-3 md:px-3.5 rounded-full z-10">
        <span className="w-3 h-3 md:w-[15px] md:h-[15px] bg-[#FF4F77] rounded-full flex-shrink-0"></span>
        <p className="text-xs md:text-sm font-medium text-[#000000] whitespace-nowrap">
          Live every week, real feedback, real results
        </p>
      </div> */}
      <h1 className="text-4xl  md:text-5xl font-bold text-center text-[#202040] leading-[1.2] z-10 ">
        Go from <span className="text-[#FF4F77] herosubstext">Learning </span>
        to <span className="text-[#FF4F77] herosubstext">EARNING!</span>
      </h1>
      <p className="text-base sm:text-lg md:text-xl text-center font-medium text-[#000000] z-10 md:px-8 ">
        That leap from learning to earning isn't always smooth. The Arit Circle
        makes it easier by focusing on the skills that truly grow your career
        interviewing, teamwork, leadership, storytelling, and more in a
        community for beginners, mid-level pros, and everyone in between.
      </p>
      <div className="mt-4 md:mt-6 z-10">
        <Button
          text="Join the Circle Today"
          href="https://proxy.nas.io/queenaritcircle"
          className="shadow-[0px_0px_35px_0px_#20204066] text-sm md:text-base"
        />
      </div>
      <div className="absolute inset-0  bg-[url('/TheCircle.png')]  bg-no-repeat bg-center bg-cover w-full lg:bg-cover h-full min-h-[55rem]  -z-10"></div>
    </section>
  );
};
