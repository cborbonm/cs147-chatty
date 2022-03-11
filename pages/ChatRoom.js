import React, { useState, useCallback, useEffect } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Pressable,
    FlatList,
} from 'react-native';
import Colors from "../Themes/colors";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { GiftedChat } from 'react-native-gifted-chat'
 
export function ChatRoom({ route, navigation }) {

  // hide bottom nav
  useEffect(() => {
    navigation.getParent()?.setOptions({ tabBarStyle: { display: "none" }});
    return () => navigation.getParent()?.setOptions({ tabBarStyle: styles.bottom_action_goback });
  }, [navigation]);

  const [messages, setMessages] = useState([]);
  const { chat, chatWith, addMessages, index } = route.params;

  navigation.setOptions({ headerTitle: chatWith });

  useEffect(() => {
    setMessages(chat);
  }, [])
 
  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
    addMessages(messages[0], index);
  }, [])
 
  return (
    <GiftedChat
      messages={messages}
      onSend={messages => onSend(messages)}
      user={{
        _id: 1,
      }}
      inverted={false}
    />
  )
}

export default ChatRoom;

const styles = StyleSheet.create({
  container: {
      backgroundColor: Colors.background,
      justifyContent: 'center',
      flex: 1,
      overflow: 'hidden',
  },
  // to bring back the bottom nav bar on the previous page
  bottom_action_goback: {
    backgroundColor: Colors.background,
    // height: 90,
    // paddingTop: 10,
    borderTopColor: Colors.lavender,
    borderTopWidth: 1,
    // shadowColor: Colors.purplegrey,
    // shadowOpacity: 0.3,
    // shadowRadius: 3,
    // shadowOffset: { height: -5 },
  },
});