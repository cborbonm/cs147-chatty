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
      <Text>
      Call has ended!
      </Text>
      <TouchableOpacity onPress={() => navigation.navigate("Match")}><Text>Go back home!</Text></TouchableOpacity>
    </View>
  );
}
  
export default CallEnded;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    height: '100%',
    justifyContent: 'center',
  },
});