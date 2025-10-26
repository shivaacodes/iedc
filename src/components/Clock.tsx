import { useState, useEffect } from 'react';

const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timerId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timerId);
    };
  }, []);

  const day = time.toLocaleDateString([], { weekday: 'long' }).toUpperCase();
  const timeString = time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true }).toUpperCase();

  return (
    <div className="text-lg font-medium">
      {timeString} &middot; {day}
    </div>
  );
};

export default Clock;
