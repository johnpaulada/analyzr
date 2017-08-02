import { TabNavigator, TabBarBottom } from 'react-navigation'
import AnalyzeLayout from './AnalyzeLayout'

const NAVIGATOR_OPTIONS = {
  animationEnabled: true,
  tabBarComponent: TabBarBottom,
  tabBarPosition: 'bottom',
  tabBarOptions: {
    activeTintColor: '#e91e63',
  }
};

const AppLayout = TabNavigator({
  Analyze: { screen: AnalyzeLayout }
}, NAVIGATOR_OPTIONS)

export default AppLayout
