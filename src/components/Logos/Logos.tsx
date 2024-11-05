import Marquee from "react-fast-marquee";
import MaxWidthContainer from "../MaxWidthContainer/MaxWidthContainer";

const Logos = () => {
  const logos = [
    "/tc-logo.svg",
    "/wired-logo.svg",
    "/automotive-news-logo.svg",
    "/ars-technica-logo.svg",
    "/the-guardian-logo.svg",
    "/electrek-logo.svg",
    "/design-boom-logo.svg",
    "/clean-technica-logo.svg",
  ];

  return (
    <div className="pt-4 pb-6 bg-gray-200 w-full flex flex-col items-center gap-3">
      <p className="text-white/70 text-xl">Featured In</p>

      <div className="max-w-[95vw] relative overflow-hidden">
        <MaxWidthContainer>
          <div className="absolute inset-0 bg-gradient-to-r from-gray-200/90 via-transparent to-gray-200/90 z-10" />

          <Marquee direction="right" speed={25}>
            {logos.map((logoSrc, index) =>
              <img key={index} src={logoSrc} alt="logo" draggable={false} className="mr-8 md:mr-12" />)}
          </Marquee>
        </MaxWidthContainer>
      </div>
    </div>
  );
};

export default Logos;