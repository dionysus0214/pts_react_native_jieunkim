import React from 'react';
import { FlatList } from 'react-native';
import RankingItemComponent from './RankingItem';
import { RankingItem } from '../../types/rankingDTO';

interface RankingListProps {
  data: RankingItem[];
}

const RankingList = ({ data }: RankingListProps) => {
  return (
    <FlatList
      data={data}
      keyExtractor={item => item.id.toString()}
      renderItem={({ item, index }) => (
        <RankingItemComponent item={item} index={index} />
      )}
      nestedScrollEnabled={true}
    />
  );
};

export default RankingList;
