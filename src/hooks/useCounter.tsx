import { useEffect, useState } from 'react';

const useCounter = (target: number, duration: number = 2000, timerInMs = 50) => {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    if (count < target) {
      const increment = Math.ceil(target / (duration / 50)); 
      const timer = setInterval(() => {
        setCount((prev) => Math.min(prev + increment, target));
      }, timerInMs);
      
      return () => clearInterval(timer);
    }
  }, [count, target, duration, timerInMs]);

  return count;
};

export default useCounter;
