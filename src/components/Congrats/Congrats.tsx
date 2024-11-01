import React from 'react';
import { Category } from '../../App';


interface Props {
  category: Category;
}

const Congrats: React.FC<Props> = ({ category }) => {
  let congratsMessage;
  let mainDescription;
  let bonusesPercent;
  let bonusesLabel;

  switch (category) {
    case "A":
      congratsMessage = "Congrats! 🎉";
      mainDescription = "As an existing shareholder,  you qualify for 10% Bonus shares if you increase your investment. "
      bonusesPercent = "10% Bonus";
      bonusesLabel = "For All Current Shareholders";
      break;
    case "B":
      congratsMessage = "Congrats, ";
      mainDescription = "Because you’ve expressed interest, or have signed up to our wait list - You quality for 5% Bonus shares if you invest in this extension round."
      bonusesPercent = "5% Bonus";
      bonusesLabel = "Community Bonus";
      break;
    case "C":
      congratsMessage = "Welcome, ";
      mainDescription = "Join Eli’s Private Extension Round, last opportunity to take advantage of 2024 terms."
      break;
  }

  return (
    <div
      style={{ 
        boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
        background: 'linear-gradient(90deg, rgba(217, 217, 217, 0.2) 0%, rgba(115, 115, 115, 0.2) 100%)',
      }}
      className='max-w-[430px] min-h-[350px] sm:min-h-[400px] px-4 md:px-6 py-8 md:py-14 rounded-3xl flex flex-col justify-between'
    >
      <p className='text-2xl md:text-3xl text-white font-extrabold'>{congratsMessage}</p>
      <span className='text-xl md:text-2xl text-white leading-[140%]'>{mainDescription}</span>

      {(bonusesLabel && bonusesPercent) && <div
        style={{ 
          background: 'linear-gradient(90deg, rgba(217, 217, 217, 0.2) 0%, rgba(115, 115, 115, 0.2) 100%)' 
        }} 
        className='py-4 px-6 rounded-2xl border border-solid border-white flex items-center justify-between gap-2'
      >
        <span className='text-2xl md:text-3xl text-center font-extrabold text-primary-green'>{bonusesPercent}</span>
        <span className='max-w-[150px] text-lg md:text-xl text-white'>{bonusesLabel}</span>
      </div>}
      {(!bonusesLabel && !bonusesPercent) &&
        <span className='text-xl md:text-2xl text-white leading-[140%]'>Be a part of the mobility revolution and become an Eli shareholder.</span>}
    </div>
  );
};

export default Congrats;