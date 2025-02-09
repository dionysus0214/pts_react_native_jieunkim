import { useState, useEffect, useCallback } from 'react';

const useCountdownTimer = (initialTime = 180) => {
  const [timeLeft, setTimeLeft] = useState(initialTime);
  const [isRunning, setIsRunning] = useState(false);
  const [isExpired, setIsExpired] = useState(false);

  useEffect(() => {
    if (!isRunning || timeLeft <= 0) {
      if (timeLeft <= 0) {
        setIsExpired(true);
      }
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft(prev => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, isRunning]);

  const restartTimer = useCallback(() => {
    setTimeLeft(initialTime);
    setIsExpired(false);
    setIsRunning(true);
  }, [initialTime]);

  return { timeLeft, isExpired, restartTimer };
};

export default useCountdownTimer;
