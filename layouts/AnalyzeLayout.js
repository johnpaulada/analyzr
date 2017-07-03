import React from 'react';
import { StackNavigator } from 'react-navigation';
import AnalyzeScreen from '../screens/AnalyzeScreen';
import { Icon } from 'react-native-elements';

const AnalyzeLayout = StackNavigator({
  AnalyzeScreen: { screen: AnalyzeScreen },
});

AnalyzeLayout.navigationOptions = {
  tabBarLabel: 'Analyze',
  tabBarIcon: ({ tintColor }) => (
    <Icon
      name='ios-flask'
      type='ionicon'
      color={tintColor}
    />
  ),
};

export default AnalyzeLayout;
