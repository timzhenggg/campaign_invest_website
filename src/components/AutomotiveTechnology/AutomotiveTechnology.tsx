import React from 'react';
import { motion } from 'framer-motion';
import { technologies } from '../../assets/data/technologies';
import MaxWidthContainer from '../MaxWidthContainer/MaxWidthContainer';
import PremiumFeatures from '../PremiumFeatures/PremiumFeatures';
import TechnologyCard from '../TechnologyCard/TechnologyCard';
import SectionHeading from '../UI/SectionHeading/SectionHeading';

const AutomotiveTechnology: React.FC = () => {
  // Define animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id='market' className='py-14 w-full'>
      <MaxWidthContainer>
        <div className='flex flex-col gap-10'>
          {/* Section Heading and Description */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            variants={fadeInUp}
            className='flex flex-col items-center gap-1'
          >
            <SectionHeading className='font-bold text-center'>Best Micro-EV on the market</SectionHeading>
            <p className='text-primary-text text-lg md:text-xl text-center'>Eli ZERO is built to be the best micro-EV on the market, in the EU-L6e and US-LSV category</p>
          </motion.div>

          {/* Technology Cards Grid */}
          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <div className="sm:col-span-3">
              <PremiumFeatures />
            </div>

            {/* First Technology Card */}
            <div className="sm:col-span-1">
              <TechnologyCard technology={technologies[0]} />
            </div>

            {/* Filtered Technology Cards with Animation */}
            {technologies.filter((item) => item.title !== "Power-assisted brake").map((technology, index) => (
              <motion.div
                key={index}
                className="col-span-1"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: index * 0.1 }} // Staggered delay
                variants={fadeInUp}
              >
                <TechnologyCard technology={technology} />
              </motion.div>
            ))}
          </div>
        </div>
      </MaxWidthContainer>
    </section>
  );
};

export default AutomotiveTechnology;
