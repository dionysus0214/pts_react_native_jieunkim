import { useState, useEffect } from 'react';
import { AppState } from 'react-native';
import { getCurrentTime } from '../utils/timeUtils';

const useCurrentTime = () => {
  const [currentTime, setCurrentTime] = useState(getCurrentTime());

  useEffect(() => {
    const handleAppStateChange = (nextAppState: string) => {
      if (nextAppState === 'active') {
        setCurrentTime(getCurrentTime());
      }
    };

    const subscription = AppState.addEventListener(
      'change',
      handleAppStateChange,
    );

    return () => {
      subscription.remove();
    };
  }, []);

  return currentTime;
};

export default useCurrentTime;
