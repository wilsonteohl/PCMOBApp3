import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from "./Screens/HomeScreen";
import SettingsScreen from "./Screens/SettingsScreen";
//import EventsScreen from './Screens/EventsScreen';
import ContactsScreen from './Screens/ContactsScreen';
import EventsStack from './Screens/EventsScreen';
import HomeStack from './Screens/HomeScreen';
import { FontAwesome } from '@expo/vector-icons';





const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
              screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                  let iconName;
                  
                  //Set the icon based on which route it is (name of the tab)
                  if (route.name === 'Home') {
                    iconName = 'home';
                  } else if (route.name === 'Events') {
                    iconName = 'play';
                  } else if (route.name === 'Settings') {
                    iconName = 'th-list';
                  }else if (route.name === 'Contacts') {
                    iconName = 'user-o';
                  }
      
                  // You can return any component that you like here!
                  return <FontAwesome name={iconName} size={size} color={color} />;
                },
               tabBarActiveTintColor: "red",
               tabBarInactiveTintColor: "gray",
              })}
       >
        <Tab.Screen name="Home" options={{headerShown:false}} component={HomeStack} />
        <Tab.Screen name="Events" options={{headerShown:false}} component={EventsStack} />
        <Tab.Screen name="Contacts" component={ContactsScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
        

      </Tab.Navigator>
    </NavigationContainer>
  );
}