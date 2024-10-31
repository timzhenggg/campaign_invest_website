import React from 'react';
// import { joiResolver } from "@hookform/resolvers/joi";
import {useForm} from "react-hook-form";
import AutotechAward from '../AutotechAward/AutotechAward';
import InputField from '../UI/InputField/InputField';
import Button from '../UI/Button/Button';
import MaxWidthContainer from '../MaxWidthContainer/MaxWidthContainer';

const HeroSection: React.FC = () => {
   const {
    register,
    // handleSubmit,
    formState: {errors},
  } = useForm<{email: string}>({
    mode: "all",
    // resolver: joiResolver(),
  });

  return (
    <section
      style={{ background: "url(/hero-section-bg.png) no-repeat", backgroundSize: "cover" }}
      className='w-full min-h-full h-[900px] flex flex-col items-center justify-center'
    >
      <div className='mb-3 py-1 px-8 w-fit bg-black rounded-[100px] text-primary-green text-2xl font-bold'>10 Days Only</div>

      <div className='w-full'>
        <MaxWidthContainer>
          <div className='w-full flex items-start justify-end gap-2'>
            <div className='max-w-[800px] self-center flex flex-col items-center justify-center gap-6'>
              <h1 className='max-w-[90%] text-center text-white leading-[120%] text-[40px] font-bold flex flex-col'>
                Exclusive Private Extension Round
                <span className='font-normal'>Last Chance to Invest in 2024 Terms</span>
              </h1>
              <p className='text-white text-center text-2xl leading-[140%]'>We received overwhelming interests from investors who missed our 2024 round or want to increase their existing stake at the same terms. For 10 days only, we are offering a <span className='font-bold'>limited-timed private extension round</span></p>
              <p className='text-white text-center text-2xl leading-[140%]'>As an extension to our prior round, we are offering the same price per share. <span className='font-bold'>These terms won’t be available in the future.</span></p>
            
              <div className='flex flex-col items-center gap-4'>
                <label htmlFor="" className='mt-8 flex flex-col items-center gap-4 text-lg text-white'>
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

            <AutotechAward />
          </div>
        </MaxWidthContainer>
      </div>
    </section>
  );
};

export default HeroSection;