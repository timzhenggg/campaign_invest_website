import React from 'react';
import TechStackCard from '../TechStackCard/TechStackCard';
import SectionHeading from '../UI/SectionHeading/SectionHeading';

const TechStackSection: React.FC = () => {
  return (
    <section className='py-14 px-4 md:px-6 bg-gray-300 w-full flex flex-col items-center'>
      <div>
        <div className='w-full flex flex-col items-center'>
          <div className='flex flex-col items-center gap-2'>
            <SectionHeading className='font-bold Most Advanced Micro-EV Platform Architecture' color='text-primary-green'>Tech Stack </SectionHeading>
            <p className='text-primary-green text-2xl md:text-3xl lg:text-4xl text-center'>Most Advanced Micro-EV Platform Architecture</p>
          </div>

          <p className='max-w-[1140px] mt-6 text-white text-base md:text-lg leading-[130%] text-center'>Consumer Vehicle(Eli ZERO) is only part of our R&D-- Besides the commercially available Eli ZERO, 
            we are developing a comprehensive portfolio of functions and features of the most advanced micro-EV platform, 
            for a wide range of micro-EV models and applications in the future.</p>
        </div>  
      </div>

      <div className='max-w-[1360px] mt-8 w-full flex flex-col sm:flex-row justify-around lg:justify-start items-center gap-6'>
        <div className='w-full sm:w-auto lg:-mr-44 flex flex-col gap-6'>
          <TechStackCard
            title='Cabin Experience'
            listOfStack={['Audio Interaction', 'Steering Wheel', 'Infotainment Interfacing', '360 CAMERA', 'Dashboard UX', 'Vehicle Control']}
          />
          <TechStackCard
            title='Cabin Experience'
            listOfStack={['Audio Interaction', 'Steering Wheel', 'Infotainment Interfacing', '360 CAMERA', 'Dashboard UX', 'Vehicle Control']}
          />
          <TechStackCard
            title='Cabin Experience'
            listOfStack={['Audio Interaction', 'Steering Wheel', 'Infotainment Interfacing', '360 CAMERA', 'Dashboard UX', 'Vehicle Control']}
          />
        </div>

        <img src="/tech-stack.png" alt="tech stack" draggable={false} className='hidden lg:block w-[70%] xl:w-auto' />

        <div className='w-full sm:w-auto lg:-ml-44 flex flex-col gap-6'>
          <TechStackCard
            title='Cabin Experience'
            listOfStack={['Audio Interaction', 'Steering Wheel', 'Infotainment Interfacing', '360 CAMERA', 'Dashboard UX', 'Vehicle Control']}
          />
          <TechStackCard
            title='Cabin Experience'
            listOfStack={['Audio Interaction', 'Steering Wheel', 'Infotainment Interfacing', '360 CAMERA', 'Dashboard UX', 'Vehicle Control']}
          />
          <TechStackCard
            title='Cabin Experience'
            listOfStack={['Audio Interaction', 'Steering Wheel', 'Infotainment Interfacing', '360 CAMERA', 'Dashboard UX', 'Vehicle Control']}
          />
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;