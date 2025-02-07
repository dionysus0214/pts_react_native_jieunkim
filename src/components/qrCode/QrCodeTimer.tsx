import React from 'react';
import { Text } from 'react-native';
import styles from './QrCodeTimer.styles';

interface QrCodeTimerProps {
  timeLeft: number;
  isExpired: boolean;
}

const QrCodeTimer = ({ timeLeft, isExpired }: QrCodeTimerProps) => {
  return (
    <Text style={styles.timerText}>
      {isExpired
        ? '인증시간이 만료되었어요.\n다시 시도해주세요.'
        : `인증시간 ${Math.floor(timeLeft / 60)}:${(timeLeft % 60)
            .toString()
            .padStart(2, '0')}`}
    </Text>
  );
};

export default QrCodeTimer;
