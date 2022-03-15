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

export function QuickMatchNoVideo({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>
      No video, just audio call
      </Text>
    </View>
  );
}
  
export default QuickMatchNoVideo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    height: '100%',
    justifyContent: 'center',
  },
});