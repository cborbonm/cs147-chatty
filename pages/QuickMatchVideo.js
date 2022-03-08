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
import { Camera } from 'expo-camera';

import { questions } from '../data/questions';
import { db } from "../firebase";
import { doc, getDoc } from "firebase/firestore";

export function QuickMatchVideo({ navigation }) {
    const [hasPermission, setHasPermission] = useState(null);
    const [type, setType] = useState(Camera.Constants.Type.front);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    <View style={styles.container}>
      <View style={styles.twoButtons}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            >
            <Text style={styles.text}> Add Time </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            >
            <Text style={styles.text}> End Call </Text>
          </TouchableOpacity>
        </View>
      </View>
      <Camera style={styles.camera} type={type}>
      </Camera>
    </View>
  );
}
  
export default QuickMatchVideo;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      height: '100%',
    },
    camera: {
      position: "absolute",
      width: '40%',
      height: '25%',
      margin: 20,
    },
    twoButtons: {
      flex: 1,
      flexDirection: 'row',
      position: "relative",
      backgroundColor: Colors.lavender,
    },
    buttonContainer: {
      flex: 1,
      flexDirection: 'row',
      margin: 10,
    },
    button: {
      flex: 1,
      alignSelf: 'flex-end',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: Colors.lighter_purple,
      marginBottom: 20,
      borderRadius: 40,
      height: 50,
    },
    text: {
      fontSize: 25,
      color: 'white',
    },
  });