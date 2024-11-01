import React, { useEffect, useState } from 'react';
// import { joiResolver } from "@hookform/resolvers/joi";
import { useForm } from "react-hook-form";
import AutotechAward from '../AutotechAward/AutotechAward';
import MaxWidthContainer from '../MaxWidthContainer/MaxWidthContainer';
import Button from '../UI/Button/Button';
import InputField from '../UI/InputField/InputField';
import SeriesPrivateExtension from '../SeriesPrivateExtension/SeriesPrivateExtension';

const HeroSection: React.FC = () => {
  const {
    register,
    formState: { errors },
  } = useForm<{ email: string }>({
    mode: "all",
  });

  const [bgImageIndex, setBgImageIndex] = useState(0);

  const backgroundImages = [
    '/hero-section-bg.png',
    '/hero-section-bg-2.png',
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setBgImageIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
    }, 10000);

    return () => clearInterval(intervalId); 
  }, []);

  return (
    <section
      style={{
        background: `url(${backgroundImages[bgImageIndex]}) no-repeat`,
        backgroundSize: "cover",
      }}
      className='relative overflow-hidden w-full h-full min-h-[900px] flex flex-col items-center justify-center transition-all duration-1000'
    >
      <div className='hidden xl:block mb-3 py-1 px-8 w-fit bg-black rounded-[100px] text-primary-green text-2xl font-bold'>10 Days Only</div>

      <img src="/logo.svg" alt="logo" draggable={false} className="absolute w-24 top-4 lg:top-6 left-4 md:left-6 lg:left-14" />

      <div className='w-full'>
        <MaxWidthContainer>
          <div className='py-20 sm:py-16 w-full flex flex-col-reverse items-center xl:items-start justify-center gap-2'>
            <div className='w-full max-w-[800px] self-center flex flex-col items-center justify-center gap-6'>
              <h1 className='sm:max-w-[90%] text-center text-white leading-[120%] text-3xl md:text-[40px] font-bold flex flex-col'>
                Exclusive Private Extension Round
                <span className='font-normal'>Last Chance to Invest in 2024 Terms</span>
              </h1>
              <p className='text-white text-center text-xl md:text-2xl leading-[140%]'>We received overwhelming interests from investors who missed our 2024 round or want to increase their existing stake at the same terms. For 10 days only, we are offering a <span className='font-bold'>limited-timed private extension round</span></p>
              <p className='text-white text-center text-xl md:text-2xl leading-[140%]'>As an extension to our prior round, we are offering the same price per share. <span className='font-bold'>These terms won’t be available in the future.</span></p>
            
              <div className='flex flex-col items-center gap-4'>
                <label htmlFor="" className='mt-8 flex flex-col items-center gap-4 text-base md:text-lg text-white'>
                Enter your email to access the investment page
                <InputField
                  register={register}
                  errors={errors}
                  name="email"
                  placeholder='Enter your Email address here'
                  className='min-w-[375px] text-center border-b border-solid border-white/50'
                />
                </label>
              
                <Button className=' uppercase'>Access Investment Page</Button>
              </div>
            </div>

            <div className='xl:hidden mb-3 py-1 px-8 w-fit bg-black rounded-[100px] text-primary-green text-xl md:text-2xl font-bold'>10 Days Only</div>

            <div className='w-full sm:w-auto my-8 xl:m-0 xl:absolute top-14 -right-16 flex flex-col sm:flex-row items-center xl:items-stretch xl:flex-col gap-6'>
              <SeriesPrivateExtension />
              <AutotechAward />
            </div>
          </div>
        </MaxWidthContainer>
      </div>
    </section>
  );
};

export default HeroSection;
