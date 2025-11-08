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

  const TimeUnit = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center bg-white/15 backdrop-blur-md border-2 border-white/30 rounded-2xl p-4 min-w-[80px] shadow-lg">
      <div className="text-4xl md:text-5xl text-white mb-1 font-bold">
        {value.toString().padStart(2, '0')}
      </div>
      <div className="text-white/80 text-xs uppercase tracking-wider font-medium">
        {label}
      </div>
    </div>
  );

  return (
    <div className="flex items-center justify-center gap-3">
      <TimeUnit value={timeLeft.days} label="Días" />
      <div className="text-white text-3xl font-light mb-6">:</div>
      <TimeUnit value={timeLeft.hours} label="Horas" />
      <div className="text-white text-3xl font-light mb-6">:</div>
      <TimeUnit value={timeLeft.minutes} label="Mins" />
      <div className="text-white text-3xl font-light mb-6">:</div>
      <TimeUnit value={timeLeft.seconds} label="Segs" />
    </div>
  );
}
