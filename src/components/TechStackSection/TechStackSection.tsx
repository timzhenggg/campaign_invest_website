import React from 'react';
import TechStackCard from '../TechStackCard/TechStackCard';
import SectionHeading from '../UI/SectionHeading/SectionHeading';
import { techStack } from '../../assets/data/techStack';

const TechStackSection: React.FC = () => {
  return (
    <section className='py-14 px-4 md:px-6 bg-gray-300 w-full flex flex-col items-center'>
      <div>
        <div className='w-full flex flex-col items-center'>
          <div className='flex flex-col items-center gap-2'>
            <SectionHeading className='font-bold Most Advanced Micro-EV Platform Architecture' color='text-primary-green'>Tech Stack </SectionHeading>
            <p className='text-primary-green text-2xl md:text-3xl lg:text-4xl text-center'>Most Advanced Micro-EV Platform Architecture</p>
          </div>

          <p className='max-w-[1140px] mt-6 text-white text-base md:text-lg leading-[130%] text-center'>The consumer vehicle, Eli ZERO, is only part of our
R&D. In addition to the commercially available Eli
ZERO, we are developing a comprehensive portfolio of
advanced features and capabilities for our micro-EV
platform, designed to support a wide range of micro-EV
models and applications in the future.</p>
        </div>  
      </div>

      <div className='max-w-[1360px] mt-8 w-full flex flex-col sm:flex-row justify-around lg:justify-start items-center gap-6'>
        <div className='w-full sm:w-auto lg:-mr-44 flex flex-col gap-6'>
          <TechStackCard
            title={techStack[0].title}
            listOfStack={techStack[0].listOfStack}
          />
          <TechStackCard
            title={techStack[1].title}
            listOfStack={techStack[1].listOfStack}
          />
          <TechStackCard
            title={techStack[2].title}
            listOfStack={techStack[2].listOfStack}
          />
        </div>

        <img src="/tech-stack.png" alt="tech stack" draggable={false} className='hidden lg:block w-[70%] xl:w-auto' />

        <div className='w-full sm:w-auto lg:-ml-44 flex flex-col gap-6'>
          <TechStackCard
            title={techStack[3].title}
            listOfStack={techStack[3].listOfStack}
          />
          <TechStackCard
            title={techStack[4].title}
            listOfStack={techStack[4].listOfStack}
          />
          <TechStackCard
            title={techStack[5].title}
            listOfStack={techStack[5].listOfStack}
          />
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;