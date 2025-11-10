import { useState, useEffect } from 'react';

interface CountdownProps {
  targetDate: string;
}

export function Countdown({ targetDate }: CountdownProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +new Date(targetDate) - +new Date();
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const timeUnits = [
    { value: timeLeft.days, label: 'DÍAS' },
    { value: timeLeft.hours, label: 'HORAS' },
    { value: timeLeft.minutes, label: 'MINS' },
    { value: timeLeft.seconds, label: 'SEGS', hideOnMobile: true },
  ];

  return (
    <div className="flex items-center justify-center gap-3 md:gap-4">
      {timeUnits.map((unit, index) => (
        <div key={unit.label} className="flex items-center gap-3 md:gap-4">
          <div className={`bg-white/20 backdrop-blur-md border-2 border-white/30 rounded-xl p-3 md:p-4 min-w-[70px] md:min-w-[90px] shadow-lg ${unit.hideOnMobile ? 'hidden md:block' : ''}`}>
            <div className="text-3xl md:text-4xl font-bold text-white drop-shadow-lg">
              {String(unit.value).padStart(2, '0')}
            </div>
            <div className="text-xs text-white/90 font-medium mt-1">
              {unit.label}
            </div>
          </div>
          {index < timeUnits.length - 1 && !unit.hideOnMobile && (
            <span className={`text-2xl md:text-3xl text-white font-bold ${index === timeUnits.length - 2 ? 'hidden md:inline' : ''}`}>:</span>
          )}
          {index < timeUnits.length - 1 && unit.hideOnMobile && (
            <span className="text-2xl md:text-3xl text-white font-bold hidden md:inline">:</span>
          )}
        </div>
      ))}
    </div>
  );
}