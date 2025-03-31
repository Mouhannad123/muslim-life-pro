import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SurahList from './SurahList';
import PrayerTimes from './PrayerTimes';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Quran" 
          component={SurahList} 
          options={{ title: 'Muslim Life Pro' }} 
        />
        <Stack.Screen 
          name="PrayerTimes" 
          component={PrayerTimes 
          options={{ title: 'Prayer Times' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
