import React from 'react';
import { FlatList } from 'react-native';

import { RankingItem } from '../../types/rankingDTO';
import useCurrentTime from '../../hooks/useCurrentTime';
import BranchRanking from './BranchRanking';
import MyRanking from './MyRanking';
import RankingItemComponent from './RankingItem';

interface RankingListProps {
  data: RankingItem[];
}

const RankingList = ({ data }: RankingListProps) => {
  const currentTime = useCurrentTime();

  return (
    <FlatList
      data={data}
      keyExtractor={item => item.id.toString()}
      renderItem={({ item, index }) => (
        <RankingItemComponent item={item} index={index} />
      )}
      ListHeaderComponent={
        <>
          <BranchRanking currentTime={currentTime} />
          <MyRanking />
        </>
      }
      showsVerticalScrollIndicator={false}
    />
  );
};

export default RankingList;
