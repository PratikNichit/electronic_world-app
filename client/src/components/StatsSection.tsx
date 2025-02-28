import { useState, useEffect } from 'react';

interface Stat {
  id: number;
  value: number;
  label: string;
  prefix?: string;
  suffix?: string;
}

const stats: Stat[] = [
  {
    id: 1,
    value: 15,
    label: 'Years of Experience',
    suffix: '+',
  },
  {
    id: 2,
    value: 500,
    label: 'Global Clients',
    suffix: '+',
  },
  {
    id: 3,
    value: 1000,
    label: 'Products',
    suffix: '+',
  },
  {
    id: 4,
    value: 99,
    label: 'Customer Satisfaction',
    suffix: '%',
  },
];

const Counter = ({ stat }: { stat: Stat }) => {
  const [count, setCount] = useState(0);
  const duration = 2000; // 2 seconds animation
  const increment = stat.value / (duration / 50); // Update every 50ms

  useEffect(() => {
    let timer: number;
    let currentCount = 0;

    const updateCounter = () => {
      currentCount += increment;
      if (currentCount >= stat.value) {
        currentCount = stat.value;
        clearInterval(timer);
      }
      setCount(Math.floor(currentCount));
    };

    timer = window.setInterval(updateCounter, 50);
    return () => clearInterval(timer);
  }, [increment, stat.value]);

  return (
    <div className="text-center">
      <div className="text-4xl md:text-5xl font-bold text-white mb-2">
        {stat.prefix || ''}{count}{stat.suffix || ''}
      </div>
      <div className="text-gray-400">{stat.label}</div>
    </div>
  );
};

const StatsSection = () => {
  return (
    <section className="py-16 bg-slate-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <Counter key={stat.id} stat={stat} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;