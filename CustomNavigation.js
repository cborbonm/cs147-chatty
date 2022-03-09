/*
 * All edits to Headers goes in this file
 */

import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  Pressable,
  SafeAreaView,
  Button,
} from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons';

import { createStackNavigator } from "@react-navigation/stack";

import Chat from "./pages/Chat";

import Match from "./pages/Match";
import QuickMatchScreen from "./pages/QuickMatchScreen";
import QuickMatchVideo from "./pages/QuickMatchVideo";

import Forum from "./pages/Forum";
import NewQuestionPromptList from "./pages/NewQuestionPromptList";
import NewQuestion from "./pages/NewQuestion";
import LanguageDropDown from "./pages/LanguageDropDown";
import Question from "./pages/Question";
import QuestionPosted from "./pages/QuestionPosted";

import Profile from "./pages/Profile";
import Colors from "./Themes/colors"

import logo from "./assets/Icons/chatty.png";

const Stack = createStackNavigator();  // creates object for Stack Navigator

const ChatNavigator = () => {
  return (
    // contains all child component screens within a stack.
    <Stack.Navigator initialRouteName="Chat">
      <Stack.Group screenOptions={{ 
        headerBackTitle: null, headerStyle: {
          backgroundColor: Colors.background,
          borderBottomColor: Colors.lavender,
          borderBottomWidth: 1,
        }, 
        headerTintColor: Colors.accent, 
        headerTitleStyle: {
          fontWeight: '400', 
          color: Colors.chatty, 
        },
      }}>
        <Stack.Screen name="Chat" 
          component={Chat} 
          options= {({ navigation }) => ({
            title: '',
            headerLeft: () => <Image source={logo} style={styles.logo}/>,
            headerLeftContainerStyle: {
              paddingLeft: 10,
            },
          })
        } 
        />
      </Stack.Group>
    </Stack.Navigator>
  );
}

export {ChatNavigator}; // Stack-Navigator for Chat Tab

const MatchNavigator = () => {
    return (
      <Stack.Navigator initialRouteName="Match">
        <Stack.Group screenOptions={{ 
          headerBackTitle: null, headerStyle: {
            backgroundColor: Colors.background,
            borderBottomColor: Colors.lavender,
            borderBottomWidth: 1,
          }, 
          headerTintColor: Colors.accent, 
          headerTitleStyle: {
            fontWeight: '400', 
            color: Colors.chatty, 
          },
        }}>
          <Stack.Screen name="Match" 
            component={Match} 
            options= {({ navigation }) => ({
              title: '',
              headerLeft: () => <Image source={logo} style={styles.logo}/>,
              headerLeftContainerStyle: {
                paddingLeft: 10,
              },
            })
          } 
          />
          <Stack.Screen name="QuickMatchScreen" 
            component={QuickMatchScreen} 
            options= {({ navigation }) => ({
              title: 'Quick Match',
            })
          } 
          />
          <Stack.Screen name="QuickMatchVideo" 
            component={QuickMatchVideo} 
            options= {({ navigation }) => ({
              title: '',
              headerLeft: () => <Image source={logo} style={styles.logo}/>,
              headerLeftContainerStyle: {
                paddingLeft: 10,
              },
            })
          } 
          />
        </Stack.Group>
      </Stack.Navigator>
    );
  }
  
export {MatchNavigator}; // Stack-Navigator for Match Tab

  const ForumNavigator = () => {
    return (
      /* change header: https://stackoverflow.com/questions/45329620/change-navigation-header-background-color */
      <Stack.Navigator initialRouteName="Forum">
        <Stack.Group screenOptions={{ 
          headerBackTitle: null, headerStyle: {
            backgroundColor: Colors.background,
            borderBottomColor: Colors.lavender,
            borderBottomWidth: 1,
          }, 
          headerTintColor: Colors.accent, 
          headerTitleStyle: {
            fontWeight: '400', 
            color: Colors.chatty, 
          },
        }}>
          {/* pass props: https://stackoverflow.com/questions/60439210/how-to-pass-props-to-screen-component-with-a-tab-navigator */}
          <Stack.Screen name="Forum" 
            component={Forum} 
            options= {({ navigation }) => ({
              title: '',
              headerLeft: () => <Image source={logo} style={styles.logo}/>,
              headerRight: () =>
                <Pressable
                  onPress={ () => {
                    navigation.navigate("NewQuestionPromptList");
                    }
                  }
                  style={({ pressed }) => [
                    { opacity: pressed ? 0.5 : 1.0 }
                  ]}
                >
                  <MaterialCommunityIcons name="square-edit-outline" size={36} color={Colors.accent}/>
                </Pressable>
              ,
              headerLeftContainerStyle: {
                paddingLeft: 10,
              },
              headerRightContainerStyle: {
                paddingRight: 10,
              },
            })
          } 
          />
          <Stack.Screen name="NewQuestionPromptList" component={NewQuestionPromptList} options={{ title: 'New Question' }}/>
          <Stack.Screen name="NewQuestion" 
            component={NewQuestion} 
            options={
              ({ navigation }) => ({
                title: 'New Question',
                headerRight: () =>
                  <Button
                    color="#028ca8"
                    title="Cancel"
                    onPress={ () => {
                      navigation.navigate("Forum");
                      }
                    }
                  />
                ,
              })
            }
          />
          <Stack.Screen name="LanguageDropDown" component={LanguageDropDown} options={{ title: 'Choose Language' }}/>
          <Stack.Screen name="Question" component={Question} options={{ title: 'Question' }}/>
          <Stack.Screen name="QuestionPosted" 
            component={QuestionPosted} 
            options={
              ({ navigation }) => ({
                title: 'Question',
                headerRight: () =>
                  <Button
                    title="Done"
                    onPress={ () => {
                      navigation.navigate("Forum");
                      }
                    }
                  />
                ,
                headerLeft: ()=> null,
              })
            }
          />
        </Stack.Group>
      </Stack.Navigator>
    );
  }
  
export {ForumNavigator};  // Stack-Navigator for Forum Tab

  const ProfileNavigator = () => {
    return (
      <Stack.Navigator initialRouteName="Profile">
        <Stack.Group screenOptions={{ 
          headerBackTitle: null, headerStyle: {
            backgroundColor: Colors.background,
            borderBottomColor: Colors.lavender,
            borderBottomWidth: 1,
          }, 
          headerTintColor: Colors.accent, 
          headerTitleStyle: {
            fontWeight: '400', 
            color: Colors.chatty, 
          },
        }}>
          <Stack.Screen name="Profile" 
            component={Profile} 
            options= {({ navigation }) => ({
              title: '',
              headerLeft: () => <Image source={logo} style={styles.logo}/>,
              headerLeftContainerStyle: {
                paddingLeft: 10,
              },
            })
          } 
          />
        </Stack.Group>
      </Stack.Navigator>
    );
  }
  
export {ProfileNavigator};  // Stack-Navigator for Profile Tab



const styles = StyleSheet.create({
  logo: {
      height: 36,
      width: undefined,
      aspectRatio: 364/98,
  },
});