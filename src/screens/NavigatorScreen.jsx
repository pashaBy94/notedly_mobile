import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Favorites from './Favorites';
import Home from './Home';
import MyNotes from './MyNotes';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Feather from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
import { Image, Text, View, StyleSheet, Button } from 'react-native';
import { MyButton } from '../components/MyButton';

const Tab = createBottomTabNavigator();
export function NavigatorScreen() {
  const navigate = useNavigation();
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={() => {
        return {
          tabBarActiveTintColor: '#0077cc',
          tabBarInactiveTintColor: 'gray',
        };
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerTitle: 'Notes',
          headerTitleAlign: 'center',
          headerRight: () => (<AntDesign
              name="right"
              size={32}
              color='#0077cc'
              style={{padding: 6, borderRadius: 50, backgroundColor: '#E9E9E9'}}
              onPress={() => {
                navigate.navigate('My Notes');
              }}
            />
          ),
          tabBarIcon: ({ size, focused, color }) => {
            return <Entypo name="home" color={color} size={size} />;
          },
        }}
      />
      <Tab.Screen
        name="My Notes"
        component={MyNotes}
        options={{
          headerTitle: 'My Notes',
          headerTitleAlign: 'center',
          // headerLeftContainerStyle: {backgroundColor: 'red', borderRadius: 33},
          headerStyle: {},
          headerLeft: () => (<AntDesign
            name="left"
            size={32}
            color='#0077cc'
            style={{padding: 6, borderRadius: 50, backgroundColor: '#E9E9E9'}}
            onPress={() => {
              navigate.navigate('Home');
            }}
          />
        ),
          headerRight: () => (<AntDesign
              name="right"
              size={32}
              color='#0077cc'
              style={{padding: 6, borderRadius: 50, backgroundColor: '#E9E9E9'}}
              onPress={() => {
                navigate.navigate('Favorites');
              }}
            />
          ),
          tabBarIcon: ({ size, focused, color }) => {
            return (
              <FontAwesome5 name="sticky-note" color={color} size={size} />
            );
          },
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={Favorites}
        options={{
          headerTitle: 'Favorites',
          headerTitleAlign: 'center',
          headerLeft: () => (<AntDesign
            name="left"
            size={32}
            color='#0077cc'
            style={{padding: 6, borderRadius: 50, backgroundColor: '#E9E9E9'}}
            onPress={() => {
              navigate.navigate('My Notes');
            }}
          />
        ),
          tabBarIcon: ({ size, focused, color }) => {
            return <Feather name="star" color={color} size={size} />;
          },
        }}
      />
    </Tab.Navigator>
  );
}
