import React from 'react';
import MaxWidthContainer from '../MaxWidthContainer/MaxWidthContainer';
import RevenueGrowth from '../RevenueGrowth/RevenueGrowth';
import RevenueStatsCard from '../RevenueStatsCard/RevenueStatsCard';
import SectionHeading from '../UI/SectionHeading/SectionHeading';
import LineChart from '../LineChart/LineChart';

const SteadyGrowth: React.FC = () => {
  return (
    <section className='py-8 md:py-10 bg-white-200 w-full'>
      <MaxWidthContainer>
        <div className='flex flex-col gap-10'>
          <div className='flex flex-col gap-8'>
            <div className='flex flex-col items-center gap-4 md:gap-8'>
              <SectionHeading className='text-primary-text font-bold text-center'>
                Steady growth 3 years in a row
              </SectionHeading>
              <p className='text-primary-text text-lg md:text-xl text-center leading-[130%]'>True growth ahead - consistent progress, building momentum year after year.</p>
            </div>

            <img className='w-full sm:rounded-b-[100px]' src="/steady-growth-bg.png" alt="steady growth" draggable={false} />
          </div>

          <div className='flex flex-col gap-4'>
            <div className='flex flex-col sm:flex-row sm:grid grid-cols-2 xl:flex items-center gap-6'>
              <div className='col-span-2 w-full flex flex-col gap-4'>
                <div className='col-span-2 w-[90vw] sm:w-full bg-white h-full min-h-[360px] p-4 sm:p-6 rounded-2xl flex justify-center items-center' style={{ boxShadow: '0px 4px 8px 0px #0000001A' }}>
                  <LineChart />
                </div>
                <p className='xl:hidden text-primary-text text-lg text-center leading-[130%]'>*Eli’s Gross Margin and Year-over-Year Revenue growth data are from Company’s Audited Financials. </p>
              </div>

              <RevenueGrowth />

              <div className='xl:max-w-[280px] w-full h-full flex flex-col gap-6'>
                <RevenueStatsCard title={['Sales Revenue in 2023']}value={2.7}>
                  <span className='text-primary-green text-5xl font-bold'>$</span>
                  <span className="text-primary-green text-5xl font-bold counter"></span>
                  <span className='text-primary-green text-5xl font-bold'>M</span>
                </RevenueStatsCard>

                <RevenueStatsCard title={['Reduction in BOM costs', 'over the last 24 months']} value={18}>
                  <img src="/arrow-down-icon.svg" alt="arrow down" draggable={false} />
                  <span className="text-primary-green text-5xl font-bold counter"></span>
                  <span className='text-primary-green text-5xl font-bold'>+%</span>
                </RevenueStatsCard>
              </div>
            </div>
            
            <p className='hidden xl:block text-primary-text text-lg leading-[130%]'>*Eli’s Gross Margin and Year-over-Year Revenue growth data are from Company’s Audited Financials. </p>
          </div>
        </div>
      </MaxWidthContainer>
    </section>
  );
};

export default SteadyGrowth;