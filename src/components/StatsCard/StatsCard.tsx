import React, { useEffect, useState, useRef } from 'react';

interface Props {
  value: number;
  textBeforeValue?: string;
  textAfterValue?: string;
  description: string;
  iconPath: string;
  iconAlt?: string;
}

const StatsCard: React.FC<Props> = ({ 
  value: targetValue, 
  textBeforeValue = '', 
  textAfterValue = '', 
  description, 
  iconPath, 
  iconAlt = '' 
}) => {
  const [displayValue, setDisplayValue] = useState<number>(0);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const cardRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    });

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      const increment = Math.ceil(targetValue / 100);
      const interval = setInterval(() => {
        setDisplayValue((prev) => {
          const nextValue = prev + increment;
          if (nextValue >= targetValue) {
            clearInterval(interval);
            return targetValue;
          }
          return nextValue;
        });
      }, 30);

      return () => clearInterval(interval);
    }
  }, [isVisible, targetValue]);

  return (
    <div ref={cardRef} className='p-4 border border-solid border-white rounded-xl flex flex-col'>
      <img src={iconPath} alt={iconAlt} draggable={false} className='size-12' />
      <span className='text-white text-3xl font-bold'>{textBeforeValue}{displayValue}{textAfterValue}</span>
      <p className='text-white'>{description}</p>
    </div>
  );
};

export default StatsCard;
