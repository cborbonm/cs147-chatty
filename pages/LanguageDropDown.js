import {
    StyleSheet,
    Text,
    TextInput,
    View,
    Image,
    Dimensions,
    Pressable,
} from 'react-native';

import Colors from "../Themes/colors";
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';

export default function LanguageDropDown({ route, navigation }) {
    let language = route.params.language;
    return (
        <View style={styles.container}>
        <View style={styles.languagesDiv}>
        <Pressable onPress={ () => {
                navigation.navigate("NewQuestion", {language: "Arabic", prompt: route.params.prompt});
            }}>
                <Text style={styles.language}> Arabic </Text>
            </Pressable>
            <View style={styles.divider}/>
            <Pressable onPress={ () => {
                navigation.navigate("NewQuestion", {language: "Chinese (Simplified)", prompt: route.params.prompt});
            }}>
                <Text style={styles.language}> Chinese (Simplified) </Text>
            </Pressable>
            <View style={styles.divider}/>
            <Pressable onPress={ () => {
                navigation.navigate("NewQuestion", {language: "Chinese (Traditional)", prompt: route.params.prompt});
            }}>
                <Text style={styles.language}> Chinese (Traditional) </Text>
            </Pressable>
            <View style={styles.divider}/>
            <Pressable onPress={ () => {
                navigation.navigate("NewQuestion", {language: "Dutch", prompt: route.params.prompt});
            }}>
                <Text style={styles.language}> Dutch </Text>
            </Pressable>
            <View style={styles.divider}/>
            <Pressable onPress={ () => {
                navigation.navigate("NewQuestion", {language: "English", prompt: route.params.prompt});
            }}>
                <Text style={styles.language}> English </Text>
            </Pressable>
            <View style={styles.divider}/>
            <Pressable onPress={ () => {
                navigation.navigate("NewQuestion", {language: "French", prompt: route.params.prompt});
            }}>
                <Text style={styles.language}> French </Text>
            </Pressable>
            <View style={styles.divider}/>
            <Pressable onPress={ () => {
                navigation.navigate("NewQuestion", {language: "German", prompt: route.params.prompt});
            }}>
                <Text style={styles.language}> German </Text>
            </Pressable>
            <View style={styles.divider}/>
            <Pressable onPress={ () => {
                navigation.navigate("NewQuestion", {language: "Italian", prompt: route.params.prompt});
            }}>
                <Text style={styles.language}> Italian </Text>
            </Pressable>
            <View style={styles.divider}/>
            <Pressable onPress={ () => {
                navigation.navigate("NewQuestion", {language: "Japanese", prompt: route.params.prompt});
            }}>
                <Text style={styles.language}> Japanese </Text>
            </Pressable>
            <View style={styles.divider}/>
            <Pressable onPress={ () => {
                navigation.navigate("NewQuestion", {language: "Norwegian", prompt: route.params.prompt});
            }}>
                <Text style={styles.language}> Norwegian </Text>
            </Pressable>
            <View style={styles.divider}/>
            <Pressable onPress={ () => {
                navigation.navigate("NewQuestion", {language: "Portuguese", prompt: route.params.prompt});
            }}>
                <Text style={styles.language}> Portuguese </Text>
            </Pressable>
            <View style={styles.divider}/>
            <Pressable onPress={ () => {
                navigation.navigate("NewQuestion", {language: "Russian", prompt: route.params.prompt});
            }}>
                <Text style={styles.language}> Russian </Text>
            </Pressable>
            <View style={styles.divider}/>
            <Pressable onPress={ () => {
                navigation.navigate("NewQuestion", {language: "Spanish", prompt: route.params.prompt});
            }}>
                <Text style={styles.language}> Spanish </Text>
            </Pressable>
            <View style={styles.divider}/>
            <Pressable onPress={ () => {
                navigation.navigate("NewQuestion", {language: "Turkish", prompt: route.params.prompt});
            }}>
                <Text style={styles.language}> Turkish </Text>
            </Pressable>
        </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: Colors.background,
      display: "flex",
      flex: 1,
    },
    languagesDiv: {
      backgroundColor: 'white',
      borderColor: Colors.lavender,
      borderTopWidth: 1,
      borderBottomWidth: 1,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    language: {
        padding: 15,
        fontSize: 16,
        display: "flex",
        justifyContent: "flex-start",
    },
    divider: {
      width: "95%",
      height: 1,
      backgroundColor: Colors.lavender,
    },
  });
  