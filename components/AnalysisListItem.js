import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'
import { ListItem } from 'react-native-elements'

const AnalysisListItem = props => {
  return <ListItem
    containerStyle={styles.container}
    titleStyle={styles.title}
    title={props.name}
    subtitle={props.description}
    onPress={props.onSelect}
  />
}

const styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
    backgroundColor: '#FAFAFA'
  },
  title: {
    fontWeight: 'bold'
  }
})

export default AnalysisListItem
