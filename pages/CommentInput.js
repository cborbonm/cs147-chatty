/* 
 * This is for the comment input used at the bottom of Question.js
 */

import React from "react";
import { 
    StyleSheet, 
    Text, 
    TextInput,
    SafeAreaView, 
    Button,
    View, 
} 
from "react-native";

import Colors from "../Themes/colors";
import { FontAwesome } from '@expo/vector-icons';

const CommentInput = () => {
    const [text, onChangeText] = React.useState("");
  
    return (
      <SafeAreaView>
        <View style={styles.bottom_action}>
          <View alignItems='baseline' flexDirection='row' flex={1}>
            <View style={styles.comment_bar}>
              <FontAwesome name="user-circle" size={36} color={Colors.chatty} />
              <TextInput
                onChangeText={onChangeText}
                value={text}
                placeholder="Type a comment"
                placeholderTextColor={Colors.lighter_purplegrey}
                multiline={true}
                style={styles.input}
              />
            </View>
            <View style={styles.button_container}>
              <Button
                title="Post"
                onPress={console.log('Pressed')}
                disabled={text.length==0}
              />
            </View>
          </View>
        </View>
      </SafeAreaView>
    );
}

export default CommentInput;

const styles = StyleSheet.create({
  bottom_action: {
    backgroundColor: Colors.background,
    width:'100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: 15,
    paddingBottom: 5,
    shadowColor: Colors.purplegrey,
    shadowOpacity: 0.3,
    shadowRadius: 3,
    shadowOffset: { height: -5 },
  },
  comment_bar: {
    justifyContent: 'center', 
    alignItems: 'baseline',
    flexDirection: "row",
    paddingLeft: 15,
    flex: 4,
  },
  input: {
    width: '85%',
    marginLeft: 10,
    padding: 10,
    paddingTop: 10,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: Colors.lavender,
    backgroundColor: 'white',
    fontSize: 16,
  },
  button_container: {
    marginRight: 10,
  },
});