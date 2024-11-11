import React from 'react';
import { motion } from 'framer-motion';
import { Category } from '../../App';
import InvestIntro from '../InvestIntro/InvestIntro';
import MaxWidthContainer from '../MaxWidthContainer/MaxWidthContainer';
import Stats from '../Stats/Stats';
import Button from '../UI/Button/Button';

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
            <motion.span
              className='text-[#A4A4A4] text-sm sm:text-lg leading-[120%] text-center'
              variants={fadeInUp}
            >
              “By regulation, bonus amount will NOT
              be calculated on your investment page. It will be applied
              AFTER your investment iscompleted and reflected int he number of shares issued and average cost per share, these info will be found in your Transfer Agent account.”
            </motion.span>
          </motion.div>
        </div>
      </MaxWidthContainer>
    </div>
  );
};

export default BonusesSection;
