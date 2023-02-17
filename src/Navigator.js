import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Home from './Home.js';

const Navigator = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      headerShown: false,
    }
  },
});

export default createAppContainer(Navigator);
