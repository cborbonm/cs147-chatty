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
import ChatRoom from "./pages/ChatRoom";

import Match from "./pages/Match";
import QuickMatchScreen from "./pages/QuickMatchScreen";
import QuickMatchVideo from "./pages/QuickMatchVideo";
import QuickMatchNoVideo from "./pages/QuickMatchNoVideo";
import QuickMatchedVideo from "./pages/QuickMatchedVideo";
import QuickMatchedNoVideo from "./pages/QuickMatchedNoVideo";
import FriendMatchScreen from "./pages/FriendMatchScreen";
import FriendMatched from "./pages/FriendMatched";
import CallEnded from "./pages/CallEnded";

import Forum from "./pages/Forum";
import NewQuestionPromptList from "./pages/NewQuestionPromptList";
import NewQuestion from "./pages/NewQuestion";
import LanguageDropDown from "./pages/LanguageDropDown";
import Question from "./pages/Question";
import QuestionPosted from "./pages/QuestionPosted";
import Notifications from "./pages/Notifications";
import Profile from "./pages/Profile";
import Colors from "./Themes/colors"

import logo from "./assets/Icons/chatty.png";

const Stack = createStackNavigator();  // creates object for Stack Navigator

const ChatNavigator = () => {
  return (
    // contains all child component screens within a stack.
    <Stack.Navigator initialRouteName="Chat">
      <Stack.Group screenOptions={{ 
        headerBackTitle: null, headerStyle: styles.headerStyle, 
        headerTintColor: Colors.accent, 
        headerTitleStyle: styles.headerTitleStyle,
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
        <Stack.Screen name="ChatRoom" component={ChatRoom} options={{ title: 'Chat' }}/>
      </Stack.Group>
    </Stack.Navigator>
  );
}

export {ChatNavigator}; // Stack-Navigator for Chat Tab

const MatchNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Match">
      <Stack.Group screenOptions={{ 
        headerBackTitle: null, headerStyle: styles.headerStyle, 
        headerTintColor: Colors.accent, 
        headerTitleStyle: styles.headerTitleStyle,
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
            header: () => <View></View>
          })
        } 
        />
        <Stack.Screen name="QuickMatchNoVideo" 
          component={QuickMatchNoVideo} 
          options= {({ navigation }) => ({
            title: '',
            header: () => <View></View>
          })
        } 
        />
        <Stack.Screen name="CallEnded" 
          component={CallEnded} 
          options= {({ navigation }) => ({
            title: '',
            header: () => <View></View>
          })
        } 
        />
        <Stack.Screen name="FriendMatchScreen" 
          component={FriendMatchScreen} 
          options= {({ navigation }) => ({
            title: 'Find Friend',
          })
        } 
        />
      </Stack.Group>
      <Stack.Group screenOptions={{ 
        headerBackTitle: null, headerStyle: styles.headerStyle, 
        headerTintColor: Colors.accent, 
        headerTitleStyle: styles.headerTitleStyle,
        headerStyle: {
          backgroundColor: Colors.lighest_purplegrey,
          opacity: 0.75,
          height: 100,
        },
      }}>
        <Stack.Screen name="QuickMatchedVideo" 
          component={QuickMatchedVideo} 
          options= {({ navigation }) => ({
            title: 'Quick Match',
          })} 
        />
        <Stack.Screen name="QuickMatchedNoVideo" 
          component={QuickMatchedNoVideo} 
          options= {({ navigation }) => ({
            title: 'Quick Match',
          })} 
        />
        <Stack.Screen name="FriendMatched" 
          component={FriendMatched} 
          options= {({ navigation }) => ({
            title: 'Find Friend',
          })} 
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
        headerBackTitle: null, headerStyle: styles.headerStyle, 
        headerTintColor: Colors.accent, 
        headerTitleStyle: styles.headerTitleStyle,
      }}>
        {/* pass props: https://stackoverflow.com/questions/60439210/how-to-pass-props-to-screen-component-with-a-tab-navigator */}
        <Stack.Screen name="Forum" 
          component={Forum} 
          options={{headerShown: false}}
          // options= {({ navigation }) => ({
          //   title: '',
          //   headerLeft: () => <Image source={logo} style={styles.logo}/>,
          //   headerRight: () =>
          //     <Pressable
          //       onPress={ () => {
          //         navigation.navigate("NewQuestionPromptList");
          //         }
          //       }
          //       style={({ pressed }) => [
          //         { opacity: pressed ? 0.5 : 1.0 }
          //       ]}
          //     >
          //       <MaterialCommunityIcons name="square-edit-outline" size={36} color={Colors.accent}/>
          //     </Pressable>
          //   ,
          //   headerLeftContainerStyle: {
          //     paddingLeft: 10,
          //   },
          //   headerRightContainerStyle: {
          //     paddingRight: 10,
          //   },
          // })} 
        />
        <Stack.Screen name="NewQuestionPromptList" component={NewQuestionPromptList} options={{ title: 'New Question' }}/>
        <Stack.Screen name="NewQuestion" 
          component={NewQuestion} 
          options={
            ({ navigation }) => ({
              title: 'New Question',
              headerRight: () =>
                <Button
                  color={Colors.accent}
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
        <Stack.Screen name="LanguageDropDown" component={LanguageDropDown} options={{ title: 'Select Language' }}/>
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
        headerBackTitle: null, headerStyle: styles.headerStyle, 
        headerTintColor: Colors.accent, 
        headerTitleStyle: styles.headerTitleStyle,
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

const NotifNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Notifications">
      <Stack.Group screenOptions={{ 
        headerBackTitle: null, headerStyle: styles.headerStyle, 
        headerTintColor: Colors.accent, 
        headerTitleStyle: styles.headerTitleStyle,
      }}>
        <Stack.Screen name="Notifications" 
          component={Notifications} 
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
  
export {NotifNavigator};  // Stack-Navigator for Profile Tab

const styles = StyleSheet.create({
  logo: {
      height: 36,
      width: undefined,
      aspectRatio: 364/98,
  },
  headerStyle: {
    height: 100,
    backgroundColor: Colors.background,
    borderBottomColor: Colors.lavender,
    borderBottomWidth: 1,
  },
  headerTitleStyle: {
    fontFamily: 'Lato-Bold',
    fontWeight: '400', 
    fontSize: 20,
    color: Colors.chatty, 
  },
});