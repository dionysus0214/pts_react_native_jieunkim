import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './BranchRanking.styles';

interface BranchRankingProps {
  currentTime: string;
}

const BranchRanking = ({ currentTime }: BranchRankingProps) => {
  return (
    <View style={styles.branchRank}>
      <View style={styles.topRow}>
        <Text style={styles.titleText}>우리 지점 랭킹</Text>
        <View style={styles.linkContainer}>
          <Text style={styles.linkText}>전체 랭킹 보기</Text>
          <Image
            source={require('../../assets/icons/icon_arrow_right.png')}
            style={styles.arrowIcon}
          />
        </View>
      </View>
      <Text style={styles.currentTimeText}>{currentTime}</Text>
    </View>
  );
};

export default BranchRanking;
