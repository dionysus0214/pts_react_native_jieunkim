import React, { useState } from 'react';
import { View, ScrollView } from 'react-native';

import { globalStyles } from '../styles/globalStyles';
import QrCodePopup from './QrCodePopup';
import { rankingData } from '../data/dummyData';
import useCurrentTime from '../hooks/useCurrentTime';
import RankingList from '../components/main/RankingList';
import FloatingButtons from '../components/main/FloatingButtons';
import BranchRanking from '../components/main/BranchRanking';
import MyRanking from '../components/main/MyRanking';

import styles from './MainScreen.styles';

const MainScreen = () => {
  const currentTime = useCurrentTime();

  const [isQrVisible, setIsQrVisible] = useState(false);

  const sortedRankingData = [...rankingData].sort(
    (a, b) => b.totalTime - a.totalTime,
  );

  return (
    <View style={globalStyles.container}>
      <ScrollView
        contentContainerStyle={styles.rankingContainer}
        showsVerticalScrollIndicator={false}>
        <BranchRanking currentTime={currentTime} />
        <MyRanking />
        <RankingList data={sortedRankingData} />
      </ScrollView>

      <View style={styles.floatingContainer}>
        <FloatingButtons onQrPress={() => setIsQrVisible(true)} />
      </View>
      <QrCodePopup
        visible={isQrVisible}
        onClose={() => setIsQrVisible(false)}
      />
    </View>
  );
};

export default MainScreen;
