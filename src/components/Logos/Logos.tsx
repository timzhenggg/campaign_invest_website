import Marquee from "react-fast-marquee";
import MaxWidthContainer from "../MaxWidthContainer/MaxWidthContainer";

const Logos = () => {
  return (
    <div className="pt-4 pb-6 bg-gray-200 w-full flex flex-col items-center gap-3">
      <p className="text-white/70 text-xl">Featured In</p>

      <MaxWidthContainer>
        <Marquee direction="right">
          {Array.from({ length: 10 }).map((_, index) =>
            <div key={index} className='mr-12 w-56 h-6 bg-primary-green'></div>)}
        </Marquee>
      </MaxWidthContainer>
    </div>
  );
};

export default Logos;