import { Button } from "./Button";

export const HeroSection = () => {
  return (
    <section className="relative flex flex-col items-center text-center w-full md:w-[80%] gap-y-8">
      <div className="flex md:items-center  border-white border gap-2.5 py-2.5 md:px-3.5 rounded-full z-10">
        <span className="w-[15px] h-[15px] bg-[#FF4F77] rounded-full"></span>
        <p className="text-sm font-medium text-[#000000]">
          Live every week, real feedback, real results
        </p>
      </div>
      <h1 className="text-5xl font-bold text-center text-[#202040] leading-[1.2] z-10">
        Start strong in tech <br className="hidden md:block" />{" "}
        <span className="text-[#FF4F77] herosubstext">build</span>,{" "}
        <span className="text-[#FF4F77] herosubstext">practice</span>, get{" "}
        <span className="text-[#FF4F77] herosubstext">hired</span>.
      </h1>
      <p className="text-xl font-medium text-[#000000] z-10">
        The Arit Circle is a supportive, no-fluff space for techies of all
        experience levels to push forward and stand out. Spicy-honest mentorship
        from your tech aunty and other professionals in the field.
      </p>
      <div className="mt-6 z-10">
        <Button
          text="Join the Circle"
          href="https://proxy.nas.io/queenaritcircle"
          className="shadow-[0px_0px_35px_0px_#20204066]"
        />
      </div>
      <div className="absolute inset-1 bottom-0 bg-[url('/TheCircle.png')] bg-no-repeat bg-center bg-cover h-[895px]  -z-10"></div>
    </section>
  );
};
