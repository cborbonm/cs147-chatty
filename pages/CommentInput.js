/* 
 * This is for the comment input used at the bottom of Question.js
 */

import React from "react";
import { 
    StyleSheet, 
    Text, 
    TextInput,
    SafeAreaView, 
    Pressable, 
    Image, 
    View, 
    FlatList } 
  from "react-native";

import Colors from "../Themes/colors";
import { FontAwesome } from '@expo/vector-icons';

const CommentInput = () => {
    const [text, onChangeText] = React.useState("");
  
    return (
      <SafeAreaView>
        <View style={styles.bottom_action}>
            <View style={styles.comment_bar}>
              <FontAwesome name="user-circle" size={36} color={Colors.chatty} />
                <TextInput
                  style={styles.input}
                  onChangeText={onChangeText}
                  value={text}
                  placeholder="Type a comment..."
                  placeholderTextColor={Colors.lighter_purplegrey}
                  multiline='true'
                />
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
    height: 60,
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
    alignItems: 'center',
    flexDirection: "row",
  },
  input: {
    width: '80%',
    height: 40,
    marginVertical: 25,
    marginRight: 10,
    marginLeft: 10,
    padding: 10,
    paddingTop: 10,
    borderRadius: 99999,
    borderWidth: 1,
    borderColor: Colors.lavender,
    backgroundColor: 'white',
    fontSize: 16,
  },
});