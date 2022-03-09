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
              "tabBarActiveTintColor": Colors.accent,
              "tabBarInactiveTintColor": Colors.lighter_purplegrey,
              "tabBarLabelStyle": {
                "fontSize": 12
              },
              "tabBarStyle": styles.bottom_action,
              "headerShown": false,
            }
          }
        >
          <Tab.Screen
            name="ChatNav"
            component={ChatNavigator}
            options={{
              tabBarIcon: ({ color }) => (
                <Ionicons name="chatbubble-ellipses" size={20} color={color} />
              ),
              title: 'Chat',
            }}
          />
          <Tab.Screen
            name="MatchNav"
            component={MatchNavigator}
            options={{
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="account-search" size={20} color={color} />
              ),
              title: 'Match',
            }}
          />
          <Tab.Screen
            name="LearnNav"
            component={ForumNavigator}
            options={{
              tabBarIcon: ({ color }) => (
                <MaterialIcons name="people-alt" size={20} color={color} />
              ),
              title: 'Learn',
            }}
          />
          <Tab.Screen
            name="ProfileNav"
            component={ProfileNavigator}
            options={{
              tabBarIcon: ({ color }) => (
                <FontAwesome name="user-circle" size={20} color={color} />
              ),
              title: 'Profile',
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
    //height: 90,
    //paddingTop: 10,
    borderTopColor: Colors.lavender,
    borderTopWidth: 1,
    // shadowColor: Colors.purplegrey,
    // shadowOpacity: 0.3,
    // shadowRadius: 3,
    // shadowOffset: { height: -5 },
  },
});
