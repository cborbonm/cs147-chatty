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
  const [messages, setMessages] = useState([]);
  const { chat } = route.params;

  useEffect(() => {
    setMessages(chat);
  }, [])
 
  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
  }, [])
 
  return (
    <GiftedChat
      messages={messages}
      onSend={messages => onSend(messages)}
      user={{
        _id: 1,
      }}
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
});