import React from 'react';

const InvestmentInfo: React.FC = () => {
  const investment = [
    {
      investment: 2500,
      bonus: 5,
    },
    {
      investment: 5000,
      bonus: 10,
    },
    {
      investment: 10000,
      bonus: 15,
    },
    {
      investment: 20000,
      bonus: 20,
    },
  ]

  return (
    <div
      style={{ 
        boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
        background: 'linear-gradient(90deg, rgba(217, 217, 217, 0.2) 0%, rgba(115, 115, 115, 0.2) 100%)',
      }}
      className='px-4 py-8 rounded-3xl flex flex-1 flex-col justify-between gap-4'
    >
      <span className='text-xl md:text-2xl text-white leading-[140%]'>
        In addition, you will receive bonus shares based on investment amount
      </span>

      <div className="w-full flex flex-col items-center gap-3">
        {investment.map(({investment, bonus}, index) => 
          <div
            key={index}
            style={{
              background: 'linear-gradient(90deg, rgba(217, 217, 217, 0.2) 0%, rgba(115, 115, 115, 0.2) 100%)',
            }}
            className='px-4 sm:px-8 py-1.5 w-full rounded-2xl flex items-center justify-between gap-4 border border-solid border-white'
          >
            <p className='text-white text-xl sm:text-2xl font-thin'>Invest <span className='font-medium'>${investment}+</span> for</p>
            <span className='text-primary-green text-xl sm:text-[28px] text-center font-extrabold'>{bonus}% Bonus</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default InvestmentInfo;
