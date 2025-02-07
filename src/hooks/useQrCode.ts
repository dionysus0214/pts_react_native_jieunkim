import { useState, useEffect } from 'react';
import useCountdownTimer from './useCountdownTimer';

const generateQrData = () => {
  const randomNum = Math.floor(Math.random() * 90 + 10);
  return `김지은_${randomNum}`;
};

const useQRCode = (initialDuration = 180) => {
  const [qrData, setQrData] = useState(generateQrData());
  const { timeLeft, isExpired, restartTimer } =
    useCountdownTimer(initialDuration);

  useEffect(() => {
    if (isExpired) {
      setQrData(generateQrData());
    }
  }, [isExpired]);

  const refreshQrCode = () => {
    setQrData(generateQrData());
    restartTimer();
  };

  return { qrData, timeLeft, isExpired, refreshQrCode };
};

export default useQRCode;
