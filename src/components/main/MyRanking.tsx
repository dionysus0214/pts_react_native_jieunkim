import React from 'react';
import { View, Text } from 'react-native';
import { formatTime } from '../../utils/timeUtils';
import styles from './MyRanking.styles';

const MyRanking = () => {
  return (
    <View style={styles.myRank}>
      <View style={styles.leftContainer}>
        <Text style={styles.titleText}>나의 랭킹: </Text>
        <Text style={styles.contentText}>6등</Text>
        <Text style={styles.changeTag}>+2 상승</Text>
      </View>
      <Text style={styles.contentText}>{formatTime(745)}</Text>
    </View>
  );
};

export default MyRanking;
