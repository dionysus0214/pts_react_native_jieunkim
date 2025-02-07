import React from 'react';
import { View } from 'react-native';
import styles from './FloatingButtons.styles';
import FloatingButton from './FloatingButton';

const qrIcon = require('../../assets/icons/icon_qr.png');

interface FloatingButtonsProps {
  onQrPress: () => void;
}

const FloatingButtons = ({ onQrPress }: FloatingButtonsProps) => {
  return (
    <View style={styles.floatingButtonContainer}>
      <FloatingButton title="AOS" />
      <FloatingButton title="입장 QR 코드" onPress={onQrPress} icon={qrIcon} />
      <FloatingButton title="iOS" />
    </View>
  );
};

export default FloatingButtons;
