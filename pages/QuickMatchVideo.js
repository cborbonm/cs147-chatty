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
import { Video } from 'expo-av';

export function QuickMatchVideo({ navigation }) {
  //camera vars
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.front);
  // video vars
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});

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
      <Video
        ref={video}
        style={styles.video}
        source={require('../data/videochatVideo.mov')}
        resizeMode="contain"
        shouldPlay
        isLooping
        onPlaybackStatusUpdate={ status => setStatus(() => status) }
      >
      </Video>
      <Camera style={styles.camera} type={type}>
      </Camera>
      <View style={styles.twoButtons}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            >
            <Text style={styles.text}> ADD TIME </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              navigation.navigate("Match");
              navigation.navigate("CallEnded");
            }}
            >
            <Text style={styles.text}> END CALL </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
  
export default QuickMatchVideo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    height: '100%',
    margin: 0,
  },
  camera: {
    position: "absolute",
    width: '35%',
    height: '25%',
    bottom: 100,
    right: 25,
  },
  twoButtons: {
    flex: 1,
    flexDirection: 'row',
    position: "absolute",
    bottom: 0,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    margin: 10,
  },
  button: {
    flex: 1,
    //alignSelf: 'flex-end',
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
  video: {
    flex: 1,
    alignSelf: 'center',
    width: '130%',
    height: '130%',
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