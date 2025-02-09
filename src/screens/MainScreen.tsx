import React, { useState } from 'react';
import { View, NativeModules } from 'react-native';

import { rankingData } from '../data/dummyData';
import QrCodePopup from './QrCodePopup';
import RankingList from '../components/main/RankingList';
import FloatingButtons from '../components/main/FloatingButtons';

import { globalStyles } from '../styles/globalStyles';
import styles from './MainScreen.styles';

const MainScreen = () => {
  const { AndroidNavigation } = NativeModules;

  const [isQrVisible, setIsQrVisible] = useState(false);

  const sortedRankingData = [...rankingData].sort(
    (a, b) => b.totalTime - a.totalTime,
  );

  const handleOpenAndroidScreen = () => {
    AndroidNavigation.openAndroidScreen();
  };

  return (
    <View style={globalStyles.container}>
      <View style={styles.rankingContainer}>
        <RankingList data={sortedRankingData} />
      </View>

      <View style={styles.floatingContainer}>
        <FloatingButtons
          onQrPress={() => setIsQrVisible(true)}
          onAndroidPress={handleOpenAndroidScreen}
        />
      </View>

      <QrCodePopup
        visible={isQrVisible}
        onClose={() => setIsQrVisible(false)}
      />
    </View>
  );
};

export default MainScreen;
