import { motion } from 'framer-motion';
import React from 'react';
import { Category } from '../../App';
import InvestIntro from '../InvestIntro/InvestIntro';
import MaxWidthContainer from '../MaxWidthContainer/MaxWidthContainer';
import Stats from '../Stats/Stats';
import Button from '../UI/Button/Button';
import { scrollToSectionById } from '../../assets/helpers/scrollToSectionById';

interface Props {
  category: Category;
}

const BonusesSection: React.FC<Props> = ({ category }) => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div id='bonuses' className='w-full bg-black py-12'>
      <MaxWidthContainer>
        <div className='lg:scale-75 lg:-my-32'>
          <motion.div
            className='w-full flex flex-col items-center gap-8 md:gap-10 lg:gap-12'
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ staggerChildren: 0.2 }}
          >
            <motion.div className='w-full' variants={fadeInUp}>
              <Stats />
            </motion.div>
            <motion.div variants={fadeInUp}>
              <InvestIntro category={category} />
            </motion.div>
          </motion.div>

          <motion.div
            className='mt-4 flex flex-col items-center gap-4'
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ staggerChildren: 0.2 }}
          >
            <motion.p
              className='text-white text-lg text-center leading-[130%]'
              variants={fadeInUp}
            >
              Join the last window to invest at 2024 stock price
            </motion.p>
            <motion.div className='-mt-4' variants={fadeInUp}>
              <Button className='my-4 px-14 text-3xl uppercase font-extrabold'>Invest now</Button>
            </motion.div>
            <ul className='ml-8 mr-8 lg:ml-0 mt-4 w-full'>
              <li className='text-primary-text-200 list-disc'>Existing Investors/ repeating investors will receive 10% bonus shares.</li>
              <li className='text-primary-text-200 list-disc'>New investors subscribed to, or has shown interest in our previous round will receive 5% bonus shares.</li>
              <li className='text-primary-text-200 list-disc'>Investors will also receive 10 bonus shares for investing within first 48 hours of this round.</li>
              <li className='text-primary-text-200 list-disc'>Investors will also receive bonus shares based on their total investment amount.</li>
            </ul>
            <p className='-mt-3.5 lg:-ml-3.5 text-primary-text-200'>*Bonus amount will NOT be calculated on your investment page, it will be applied AFTER your investment is completed, and reflected in the number of shares issued and average cost per share, these info will be found in your Transfer Agent account. </p>
            <ul className='mt-1 flex justify-center items-center gap-8'>
              <li className='text-white underline text-lg text-center'>
                <a href="https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001819702&owner=include&count=40" target='_blank'>SEC Filings</a>
              </li>
              <li className='text-white underline text-lg text-center'>
                <a href="">Offering Circular</a>
              </li>
              <li onClick={() => scrollToSectionById("faqs")} className='text-white underline text-lg text-center'>
                Investor Education
              </li>
            </ul>
          </motion.div>
        </div>
      </MaxWidthContainer>
    </div>
  );
};

export default BonusesSection;
