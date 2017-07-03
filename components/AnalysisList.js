import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { List } from 'react-native-elements';
import AnalysisListItem from './AnalysisListItem';

const AnalysisList = props => {
  return <List style={styles.container}>
    <FlatList
      data={props.data}
      renderItem={({item}) => <AnalysisListItem {...item} />}
    />
  </List>
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA',
    alignSelf: 'stretch'
  },
});

export default AnalysisList;
