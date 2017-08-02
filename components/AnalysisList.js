import React from 'react'
import { FlatList, StyleSheet } from 'react-native'
import { List } from 'react-native-elements'
import AnalysisListItem from './AnalysisListItem'
import { FacebookAds } from 'expo';

const AnalysisList = props => {
  return <List style={styles.container}>
    <FacebookAds.BannerView
      placementId="251662172008220_251740742000363"
      type="standard"
      onPress={() => console.log('click')}
      onError={(err) => console.log('error', err)}
    />
    <FlatList
      data={props.data}
      renderItem={({item}) => <AnalysisListItem {...item} />}
    />
  </List>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA',
    alignSelf: 'stretch'
  }
})

export default AnalysisList
