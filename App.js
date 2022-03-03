import { StyleSheet, Text, SafeAreaView, Pressable, Image, View, FlatList } from "react-native";
import { useState, useEffect } from "react";
import { ResponseType, useAuthRequest } from "expo-auth-session";
import { myTopTracks, albumTracks } from "./utils/apiOptions";
import { REDIRECT_URI, SCOPES, CLIENT_ID, ALBUM_ID } from "./utils/constants";
import Colors from "./Themes/colors";
import Forum from "./pages/Forum";
import NewQuestion from "./pages/NewQuestion";
import Question from "./pages/Question";

import Header from "./pages/Header";
import Nav from "./pages/Nav";

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function Home({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
        <Header page="Home" navigation={navigation} />
        <Forum />
        <Nav />
    </SafeAreaView>
  );
}

export default function App() {
  return (

    <NavigationContainer>
    {/* change header: https://stackoverflow.com/questions/45329620/change-navigation-header-background-color */}
      <Stack.Navigator initialRouteName="Forum">
        <Stack.Group screenOptions={{ 
          headerBackTitle: null, 
        }}>
          {/* pass props: https://stackoverflow.com/questions/60439210/how-to-pass-props-to-screen-component-with-a-tab-navigator */}
          <Stack.Screen name="Home" component={Home} options={{headerShown: false}} />
          <Stack.Screen name="NewQuestion" component={NewQuestion} options={{ title: 'New Question' }}/>
          <Stack.Screen name="Question" component={Question} options={{ title: 'Question' }}/>
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.background,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
});
