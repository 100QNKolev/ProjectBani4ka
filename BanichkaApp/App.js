import React from 'react';
import EventList from './EventList';
import EventForm from './EventForm';
import ThankYou from './ThankYou';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='EventList'>
      <Stack.Screen name='EventList' component={EventList} options={{title: 'Events'}} />
      <Stack.Screen name='EventForm' component={EventForm} options={{title: 'Add Event'}} />
      <Stack.Screen name='ThankYou' component={ThankYou} options={{title: 'Thank You'}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

