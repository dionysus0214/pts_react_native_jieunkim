import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './RankingList.styles';
import { RankingItem } from '../types/rankingDTO';
import { formatTime } from '../utils/timeUtils';

const rankIcons: { [key: number]: any } = {
  1: require('../../assets/images/img_1st.png'),
  2: require('../../assets/images/img_2nd.png'),
  3: require('../../assets/images/img_3rd.png'),
};

interface RankingItemProps {
  item: RankingItem;
  index: number;
}

const RankingItemComponent = ({ item, index }: RankingItemProps) => {
  return (
    <View style={styles.rankItem}>
      <View style={styles.rankContainer}>
        {rankIcons[index + 1] ? (
          <Image source={rankIcons[index + 1]} style={styles.rankIcon} />
        ) : (
          <Text style={styles.rankText}>{index + 1}</Text>
        )}
      </View>
      <Text style={styles.nameText}>{item.name}</Text>
      <Text style={styles.timeText}>{formatTime(item.totalTime)}</Text>
    </View>
  );
};

export default RankingItemComponent;
