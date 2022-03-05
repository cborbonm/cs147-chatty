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

import Chat from "./pages/Chat";

import Match from "./pages/Match";

import Forum from "./pages/Forum";
import NewQuestionPromptList from "./pages/NewQuestionPromptList";
import NewQuestion from "./pages/NewQuestion";
import LanguageDropDown from "./pages/LanguageDropDown";
import Question from "./pages/Question";

import Profile from "./pages/Profile";

import Header from "./pages/Header";
import Nav from "./pages/Nav";

import {ChatNavigator, MatchNavigator, ForumNavigator, ProfileNavigator } from './CustomNavigation'
import { MaterialCommunityIcons, MaterialIcons, Ionicons, FontAwesome } from '@expo/vector-icons';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function Home({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
        <Header page="Home" navigation={navigation}/>
        <Forum navigation={navigation}/>
        {/* <Nav /> */}
    </SafeAreaView>
  );
}

export default function App() {
  return (
    <>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={
            {
              "tabBarActiveTintColor": Colors.chatty,
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
