import Marquee from "react-fast-marquee";

const Logos = () => {
  return (
    <Marquee direction="right">
      {Array.from({ length: 10 }).map((_, index) =>
        <div key={index} className='mr-12 w-56 h-6 bg-primary-green'></div>)}
    </Marquee>
  );
};

export default Logos;