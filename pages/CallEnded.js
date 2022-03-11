import React, { useState, useEffect } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Pressable,
    FlatList,
    TouchableOpacity,
} from 'react-native';
import Colors from "../Themes/colors";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { db } from "../firebase";
import { doc, getDoc } from "firebase/firestore";

export function CallEnded({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
      Call has ended! Did you have fun?
      </Text>
      <TouchableOpacity style={styles.friendmatch_button} onPress={() => navigation.navigate("Match")}>
        <Text style={styles.button_text}>GO BACK HOME</Text>
      </TouchableOpacity>
    </View>
  );
}
  
export default CallEnded;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.background,
    display: "flex",
    flex: 1,
    flexDirection: 'column',
    alignContent: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 15,
    margin: 22,
    color: Colors.purplegrey,
    alignSelf: 'center',
  },
  friendmatch_button: {
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: Colors.lighter_purple,
    borderRadius: 40,
    height: 38,
    margin: 25,
  },
  button_text: {
    color: 'white',
    paddingVertical: 10,
    paddingHorizontal: 30,
    fontSize: 16,
    fontWeight: '500',
  },
});