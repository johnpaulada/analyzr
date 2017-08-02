import { TabNavigator, TabView } from 'react-navigation'
import AnalyzeLayout from './AnalyzeLayout'

const NAVIGATOR_OPTIONS = {
  lazy: true,
  animationEnabled: true,
  tabBarComponent: TabView.TabBarBottom,
  tabBarPosition: 'bottom',
  tabBarOptions: {
    activeTintColor: '#e91e63',
    showIcon: true,
    style: {
      backgroundColor: '#FAFAFA'
    },
    tabStyle: {
      backgroundColor: '#FAFAFA'
    },
    indicatorStyle: {
      color: '#e91e63',
      backgroundColor: '#e91e63'
    }
  }
};

const AppLayout = TabNavigator({
  Analyze: { screen: AnalyzeLayout }
}, NAVIGATOR_OPTIONS)

export default AppLayout
