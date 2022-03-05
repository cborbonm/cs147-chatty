import {
    StyleSheet,
    Text,
    View,
    Pressable,
} from 'react-native';

import Colors from "../Themes/colors";

function LanguageOption( {navigation, language, prompt} ) {
    return (
        <Pressable // press whole row
            onPress={ () => navigation.navigate("NewQuestion", {language: language, prompt: prompt}) } 
            style={({ pressed }) => [
            {
                backgroundColor: pressed ? Colors.pressed_background : "white",
            },
            styles.language_container
        ]}>
            <Text style={styles.language}>{language}</Text>
        </Pressable>
    );
}

export default function LanguageDropDown({ route, navigation }) {
    let language = route.params.language;
    const prompt = route.params.prompt;

    return (
        <View style={styles.container}>
        <View style={styles.languagesDiv}>
            <LanguageOption navigation={navigation} language={"Arabic"} prompt={prompt}/>
            <View style={styles.divider}/>
            <LanguageOption navigation={navigation} language={"Chinese (Simplified)"} prompt={prompt}/>
            <View style={styles.divider}/>
            <LanguageOption navigation={navigation} language={"Chinese (Traditional)"} prompt={prompt}/>
            <View style={styles.divider}/>
            <LanguageOption navigation={navigation} language={"Dutch"} prompt={prompt}/>
            <View style={styles.divider}/>
            <LanguageOption navigation={navigation} language={"English"} prompt={prompt}/>
            <View style={styles.divider}/>
            <LanguageOption navigation={navigation} language={"French"} prompt={prompt}/>
            <View style={styles.divider}/>
            <LanguageOption navigation={navigation} language={"German"} prompt={prompt}/>
            <View style={styles.divider}/>
            <LanguageOption navigation={navigation} language={"Italian"} prompt={prompt}/>
            <View style={styles.divider}/>
            <LanguageOption navigation={navigation} language={"Japanese"} prompt={prompt}/>
            <View style={styles.divider}/>
            <LanguageOption navigation={navigation} language={"Norwegian"} prompt={prompt}/>
            <View style={styles.divider}/>
            <LanguageOption navigation={navigation} language={"Portuguese"} prompt={prompt}/>
            <View style={styles.divider}/>
            <LanguageOption navigation={navigation} language={"Russian"} prompt={prompt}/>
            <View style={styles.divider}/>
            <LanguageOption navigation={navigation} language={"Spanish"} prompt={prompt}/>
            <View style={styles.divider}/>
            <LanguageOption navigation={navigation} language={"Turkish"} prompt={prompt}/>
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
      //backgroundColor: 'white',
      borderColor: Colors.lavender,
      borderTopWidth: 1,
      borderBottomWidth: 1,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    divider: {
      width: "95%",
      height: 1,
      backgroundColor: Colors.lavender,
    },
    // individual language prompt styling
    language_container: {
        display: "flex",
        flexDirection: "row",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
    },
    language: {
        padding: 15,
        fontSize: 16,
        display: "flex",
    },
  });
  