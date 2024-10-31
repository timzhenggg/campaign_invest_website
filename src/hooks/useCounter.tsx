import { useEffect, useState } from 'react';

const useCounter = (target: number, duration: number = 2000, timerInMs = 50, isVisible: boolean) => {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    if (!isVisible) return; 
    
    if (count < target) {
      const increment = Math.ceil(target / (duration / timerInMs)); 
      const timer = setInterval(() => {
        setCount((prev) => Math.min(prev + increment, target));
      }, timerInMs);
      
      return () => clearInterval(timer);
    }
  }, [count, target, duration, timerInMs, isVisible]); 

  return count;
};

export default useCounter;
