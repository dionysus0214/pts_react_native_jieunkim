import React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import styles from './QrCode.styles';

interface QrCodeProps {
  qrData: string;
  isExpired: boolean;
  onRefresh: () => void;
}

const QrCode = ({ qrData, isExpired, onRefresh }: QrCodeProps) => {
  return (
    <View style={styles.qrContainer}>
      <View style={[styles.qrImageWrapper, isExpired && styles.qrImageExpired]}>
        <QRCode value={qrData} size={258} />
      </View>
      {isExpired && (
        <TouchableOpacity onPress={onRefresh} style={styles.refreshButton}>
          <Image
            source={require('../../../assets/icons/icon_refresh.png')}
            style={styles.refreshIcon}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default QrCode;
