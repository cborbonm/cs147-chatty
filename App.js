/*
 * All edits to BottomTabNavigators goes in this file
 */

import { 
  StyleSheet, 
  Text, 
  SafeAreaView, 
  Pressable, 
  Image, 
  View, 
  FlatList 
} from "react-native";
import { useState, useEffect } from "react";
import Colors from "./Themes/colors";

import {ChatNavigator, MatchNavigator, ForumNavigator, ProfileNavigator } from './CustomNavigation'
import { MaterialCommunityIcons, MaterialIcons, Ionicons, FontAwesome } from '@expo/vector-icons';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={
            {
              "tabBarActiveTintColor": Colors.lighter_purple,
              "tabBarInactiveTintColor": Colors.lighter_purplegrey,
              "tabBarLabelStyle": {
                "fontSize": 16
              },
              "tabBarStyle": styles.bottom_action,
              "headerShown": false,
            }
          }
        >
          <Tab.Screen
            name="Chat"
            component={ChatNavigator}
            options={{
              tabBarIcon: ({ color }) => (
                <Ionicons name="chatbubble-ellipses" size={24} color={color} />
              ),
            }}
          />
          <Tab.Screen
            name="Match"
            component={MatchNavigator}
            options={{
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="account-search" size={24} color={color} />
              ),
            }}
          />
          <Tab.Screen
            name="Learn"
            component={ForumNavigator}
            options={{
              tabBarIcon: ({ color }) => (
                <MaterialIcons name="people-alt" size={24} color={color} />
              ),
            }}
          />
          <Tab.Screen
            name="Profile"
            component={ProfileNavigator}
            options={{
              tabBarIcon: ({ color }) => (
                <FontAwesome name="user-circle" size={24} color={color} />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.background,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  bottom_action: {
    backgroundColor: Colors.background,
    height: 90,
    paddingTop: 10,
    shadowColor: Colors.purplegrey,
    shadowOpacity: 0.3,
    shadowRadius: 3,
    shadowOffset: { height: -5 },
  },
});
