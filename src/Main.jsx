import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigatorScreen } from './screens/NavigatorScreen';
import NoteScreen from './screens/NoteScreen';
import { createStackNavigator } from '@react-navigation/stack';

const st = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  h1: { color: '#0077cc', fontSize: 48, alignItems: 'center' },
  p: { marginTop: 24, marginBottom: 24, fontSize: 18 },
});

const Stack = createStackNavigator();

const Main = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="NavigatorScreen"
          component={NavigatorScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="NoteScreen" component={NoteScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Main;
