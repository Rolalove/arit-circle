import Image from "next/image";
import { Button } from "./Button";

export const HeroSection = () => {
  return (
    <section className="relative mt-32 lg:mt-20 w-full px-6 lg:px-0  ">
      <div className="flex flex-col items-center text-center gap-y-4 md:gap-y-6 md:px-0">
        <Image
          src="/capsule.png"
          width={389}
          height={44}
          alt=" Live every week, real feedback, real results"
          priority
        />
        <h1 className="text-4xl  md:text-5xl font-bold text-center text-[#202040] leading-[1.2] z-10 md:px-8 ">
          Go from <span className="text-[#FF4F77] herosubstext">Learning </span>
          to <span className="text-[#FF4F77] herosubstext">EARNING!</span>
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-center font-medium text-[#000000] z-10  max-w-4xl  ">
          The Arit Circle makes it easier by focusing on the skills that truly
          grow your career interviewing, teamwork, leadership, storytelling, and
          more in a community for beginners, mid-level pros, and everyone in
          between.
        </p>

        <Button
          text="Join the Circle Today"
          href="https://proxy.nas.io/queenaritcircle"
          className="shadow-[0px_0px_35px_0px_#20204066] mb-6 lg:mb-0 "
        />
      </div>
      <div className="absolute inset-0 mt-6 mb-6 lg:mb-0  lg:-mt-12  bg-[url('/TheCircleMobile.png')]  lg:bg-[url('/TheCircle.png')] bg-no-repeat bg-center mx-auto bg-contain w-full lg:bg-cover h-[100vh] min-h-[55rem]  -z-10"></div>
    </section>
  );
};
