import { useEffect, useState } from 'react';
import { FieldErrors, FieldValues, Path, UseFormRegister } from "react-hook-form";
import { motion } from 'framer-motion';
import AutotechAward from '../AutotechAward/AutotechAward';
import MaxWidthContainer from '../MaxWidthContainer/MaxWidthContainer';
import SeriesPrivateExtension from '../SeriesPrivateExtension/SeriesPrivateExtension';
import Button from '../UI/Button/Button';
import InputField from '../UI/InputField/InputField';

interface Props<T extends FieldValues> {
  name: Path<T>;
  register: UseFormRegister<T>;
  errors: FieldErrors<T>;
  handleSubmit: () => void;
}

const HeroSection = <T extends FieldValues>({
  register,
  errors,
  handleSubmit
}: Props<T>) => {
  const [bgImageIndex, setBgImageIndex] = useState(0);
  const [fade, setFade] = useState(false);

  const backgroundImages = [
    '/hero-section-bg.png',
    '/hero-section-bg-2.png',
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setFade(true);

      setTimeout(() => {
        setBgImageIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
        setFade(false); // Start fading in
      }, 500); // Match this timeout with the CSS transition duration
    }, 10000); // Change image every 10 seconds

    return () => clearInterval(intervalId); 
  }, []);

  return (
    <motion.section
      id='hero-section'
      className='relative overflow-hidden w-full h-full min-h-[900px] flex flex-col items-center justify-center'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.img
        src={backgroundImages[bgImageIndex]}
        alt="hero section background"
        draggable={false}
        className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ${fade ? 'opacity-50' : 'opacity-100'}`}
        key={bgImageIndex}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      />
      
      <motion.div
        className='z-10 hidden xl:block mb-3 py-1 px-8 w-fit rounded-full text-primary-green text-2xl font-bold gradient-bg'
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        10 Days Only
      </motion.div>

      <motion.img 
        src="/logo.svg" 
        alt="logo" 
        draggable={false} 
        className="absolute w-24 top-4 lg:top-6 left-4 md:left-6 lg:left-14" 
        initial={{ x: -50, opacity: 0 }} 
        animate={{ x: 0, opacity: 1 }} 
        transition={{ duration: 0.6 }} 
      />

      <div className='w-full z-10'>
        <MaxWidthContainer>
          <div className='py-20 sm:py-16 w-full flex flex-col-reverse items-center xl:items-start justify-center gap-2'>
            <motion.div 
              className='w-full max-w-[800px] self-center flex flex-col items-center justify-center gap-6'
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7 }}
            >
              <motion.h1 
                className='sm:max-w-[90%] text-center text-white leading-[120%] text-3xl md:text-4xl font-bold flex flex-col'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                Exclusive Private Extension Round
                <span className='font-normal'>Last Chance to Invest in 2024 Terms</span>
              </motion.h1>
              <motion.p 
                className='text-white text-center text-xl md:text-2xl leading-[140%]'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                We received overwhelming interests from investors who missed our 2024 round or want to increase their existing stake at the same terms. For 10 days only, we are offering a <span className='font-bold'>limited-timed private extension round</span>
              </motion.p>
              <motion.p 
                className='text-white text-center text-xl md:text-2xl leading-[140%]'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
              >
                As an extension to our prior round, we are offering the same price per share. <span className='font-bold'>These terms won’t be available in the future.</span>
              </motion.p>
            
              <motion.form 
                className='flex flex-col items-center gap-4' 
                onSubmit={handleSubmit}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                <label className='mt-8 flex flex-col items-center gap-4 text-base md:text-lg text-white'>
                  Enter your email to access the investment page
                  <InputField
                    register={register}
                    errors={errors}
                    name={"email" as Path<T>}
                    placeholder='Enter your Email address here'
                    className='min-w-[375px] text-center border-b border-solid border-white/50'
                  />
                </label>
              
                <Button type='submit' className='uppercase'>Access Investment Page</Button>
              </motion.form>
            </motion.div>

            <motion.div 
              className='xl:hidden mb-3 py-1 px-8 w-fit rounded-full text-primary-green text-xl md:text-2xl font-bold gradient-bg'
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              10 Days Only
            </motion.div>

            <motion.div 
              className='w-full sm:w-auto my-8 xl:m-0 xl:absolute top-14 -right-16 flex flex-col sm:flex-row items-center xl:items-stretch xl:flex-col gap-6'
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <SeriesPrivateExtension />
              <AutotechAward />
            </motion.div>
          </div>
        </MaxWidthContainer>
      </div>
    </motion.section>
  );
};

export default HeroSection;
