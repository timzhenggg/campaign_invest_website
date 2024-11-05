import React, { useEffect, useState } from 'react';

interface Props {
  targetDate: string; // ISO string
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownTimer: React.FC<Props> = ({ targetDate }) => {
  const calculateTimeLeft = (): TimeLeft => {
    const difference = new Date(targetDate).getTime() - new Date().getTime();
    let timeLeft: TimeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer); 
  }, [targetDate]);

  return (
    <div className='px-3 py-1 rounded-md bg-black flex items-center'>
      <div className='pr-1.5 flex items-center gap-1 text-white text-xs border-r border-solid border-white/30'>
        <span className='font-bold text-lg'>{timeLeft.days}</span> days
      </div>
      <div className='px-1.5 flex items-center gap-1 text-white text-xs border-r border-solid border-white/30'>
        <span className='font-bold text-lg'>{timeLeft.hours}</span> hrs
      </div>
      <div className='px-1.5 flex items-center gap-1 text-white text-xs border-r border-solid border-white/30'>
        <span className='font-bold text-lg'>{timeLeft.minutes}</span> mins
      </div>
      <div className='pl-1.5 flex items-center gap-1 text-white text-xs'>
        <span className='font-bold text-lg'>{timeLeft.seconds}</span> sec
      </div>
    </div>
  );
};

export default CountdownTimer;