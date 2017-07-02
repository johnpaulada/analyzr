import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

const AnalysisListItem = props => {
  return <TouchableOpacity onPress={props.onSelect}>
    <Text>{props.text}</Text>
  </TouchableOpacity>
};

export default AnalysisListItem;
