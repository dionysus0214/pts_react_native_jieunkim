import React from 'react';
import { View, Text, Modal, TouchableWithoutFeedback } from 'react-native';
import styles from './QrCodePopup.styles';
import useQrCode from '../hooks/useQrCode';
import QrCode from '../components/qrCode/QrCode';
import QrCodeTimer from '../components/qrCode/QrCodeTimer';

interface QrCodePopupProps {
  visible: boolean;
  onClose: () => void;
}

const QrCodePopup = ({ visible, onClose }: QrCodePopupProps) => {
  const { qrData, timeLeft, isExpired, refreshQrCode } = useQrCode(180);

  return (
    <Modal visible={visible} transparent animationType="fade">
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={styles.overlay}>
          <View style={styles.popup}>
            <Text style={styles.titleText}>QR 로그인</Text>
            <Text style={styles.subText}>
              좌석에 있는 기기에{'\n'}QR코드를 인식시켜주세요!
            </Text>
            <QrCode
              qrData={qrData}
              isExpired={isExpired}
              onRefresh={refreshQrCode}
            />
            <QrCodeTimer timeLeft={timeLeft} isExpired={isExpired} />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default QrCodePopup;
