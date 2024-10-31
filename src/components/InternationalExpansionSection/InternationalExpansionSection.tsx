import React from 'react';
import MarketShare from '../MarketShare/MarketShare';
import MaxWidthContainer from '../MaxWidthContainer/MaxWidthContainer';
import NewPartnerships from '../NewPartnerships/NewPartnerships';
import SuccessfulProduction from '../SuccessfulProduction/SuccessfulProduction';
import SectionHeading from '../UI/SectionHeading/SectionHeading';
import EliStores from '../EliStores/EliStores';

const InternationalExpansionSection: React.FC = () => {
  return (
    <div className='py-8'>
      <MaxWidthContainer>
        <div className='w-full flex flex-col'>
          <div className='w-full flex flex-col items-center gap-1'>
            <SectionHeading className='text-center font-bold'>Successful International Expansion</SectionHeading>
            <p className='text-primary-text text-center'>In production, selling in Europe, and rapidly entering new markets.</p>
          </div>

          <div className='mt-12 flex flex-col gap-3.5'>
            <SuccessfulProduction />
            <div className='min-h-[370px] grid lg:grid-cols-3 gap-3.5'>
              <NewPartnerships /> 
              <MarketShare /> 
              <EliStores /> 
            </div>
          </div>
        </div>
      </MaxWidthContainer>
    </div>
  );
};

export default InternationalExpansionSection;