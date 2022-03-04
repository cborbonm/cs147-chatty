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
import colors from "../Themes/colors";
import Colors from "../Themes/colors";

const TextboxInput = () => {
    const [text, onChangeText] = React.useState("");
  
    return (
        <SafeAreaView>
            <TextInput
                style={styles.input}
                onChangeText={onChangeText}
                value={text}
                placeholder="Type your question here"
                placeholderTextColor={Colors.lighter_purplegrey}
                multiline='true'
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    input: {
      height: 150,
      margin: 25,
      padding: 10,
      paddingTop: 10,
      borderRadius: 10,
      borderWidth: 1,
      borderColor: Colors.lavender,
      backgroundColor: 'white',
      fontSize: 16,
    },
  });
  

export default TextboxInput;