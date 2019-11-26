import React from 'react'

import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'

import Icon from 'react-native-vector-icons/FontAwesome'

import HomeScreen from './pages/Home'
import AboutScreen from './pages/About'

import APD from './pages/APD'
import EPIC from './pages/EPIC'

const HomeStack = createStackNavigator(
  {
    Home: {
        screen: HomeScreen,
    },
    APD: {
      screen: APD
    },
    EPIC: {
      screen: EPIC
    }
  },
  {
    headerMode: "none"
  }
)

const AboutStack = createStackNavigator(
  {
    About: AboutScreen
  },
  {
    headerMode: "none"
  }
)

const AppNavigator = createBottomTabNavigator(
  {
    Home: HomeStack,
    About: AboutStack
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state
        let iconName
        if (routeName === 'Home') {
          iconName = 'home'
        } else if (routeName === 'About') {
          iconName = 'info-circle'
        }
        return <Icon name={iconName} size={25} color={tintColor} />
      }
    }),
    tabBarOptions: {
      activeTintColor: 'steelblue'
    }
  }
)

export default createAppContainer(AppNavigator)