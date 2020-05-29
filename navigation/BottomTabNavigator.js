import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import MoodScreen from '../screens/MoodScreen'
import HappeningsScreen from '../screens/HappeningsScreen'
import ProfileScreen from '../screens/ProfileScreen'

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'Home';

export default function BottomTabNavigator({ navigation, route }) {
  // Set the header title on the parent stack navigator depending on the
  // currently active tab. Learn more in the documentation:
  // https://reactnavigation.org/docs/en/screen-options-resolution.html
  navigation.setOptions({ headerTitle: getHeaderTitle(route) });

  return (
    <BottomTab.Navigator initialRouteName={INITIAL_ROUTE_NAME}>
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Home',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-home" />,
        }}
      />
      <BottomTab.Screen
        name="Mood"
        component={MoodScreen}
        options={{
          title: 'Mood',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-happy" />,
        }}
      />
       <BottomTab.Screen
        name="Happenings"
        component={HappeningsScreen}
        options={{
          title: 'Happenings',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-wine" />,
        }}
      />
       <BottomTab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          title: 'Profile',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-person" />,
        }}
      />
    </BottomTab.Navigator>
  );
}

function getHeaderTitle(route) {
  const routeName = route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

  switch (routeName) {
    case 'Home':
      return 'Home';
    case 'Mood':
      return 'Mood';
    case 'Happenings':
      return 'Happenings';
    case 'Profile':
      return 'Your Profile';
  }
}
