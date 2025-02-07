import { useState, useEffect } from 'react';

const useCountdownTimer = (initialTime = 180) => {
  const [timeLeft, setTimeLeft] = useState(initialTime);
  const [isExpired, setIsExpired] = useState(false);

  useEffect(() => {
    if (timeLeft <= 0) {
      setIsExpired(true);
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft(prev => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  const restartTimer = () => {
    setTimeLeft(initialTime);
    setIsExpired(false);
  };

  return { timeLeft, isExpired, restartTimer };
};

export default useCountdownTimer;
