import React from 'react';
import { FlatList } from 'react-native';
import AnalysisListItem from './AnalysisListItem';

const AnalysisList = props => {
  return <FlatList
    data={props.data}
    renderItem={({item}) => <AnalysisListItem text={item.name} onSelect={item.onSelect} />}
  />
};

export default AnalysisList;
