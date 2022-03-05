import {
    StyleSheet,
    Text,
    View,
    Pressable,
} from 'react-native';

import Colors from "../Themes/colors";
import getLanguageName from "../utils/getLanguageName";

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
            <Text style={styles.language}>{getLanguageName(language)}</Text>
        </Pressable>
    );
}

export default function LanguageDropDown({ route, navigation }) {
    let language = route.params.language;
    const prompt = route.params.prompt;

    return (
        <View style={styles.container}>
        <View style={styles.languagesDiv}>
            <LanguageOption navigation={navigation} language={"ar"} prompt={prompt}/>
            <View style={styles.divider}/>
            <LanguageOption navigation={navigation} language={"zh"} prompt={prompt}/>
            <View style={styles.divider}/>
            <LanguageOption navigation={navigation} language={"nl"} prompt={prompt}/>
            <View style={styles.divider}/>
            <LanguageOption navigation={navigation} language={"en"} prompt={prompt}/>
            <View style={styles.divider}/>
            <LanguageOption navigation={navigation} language={"fr"} prompt={prompt}/>
            <View style={styles.divider}/>
            <LanguageOption navigation={navigation} language={"de"} prompt={prompt}/>
            <View style={styles.divider}/>
            <LanguageOption navigation={navigation} language={"it"} prompt={prompt}/>
            <View style={styles.divider}/>
            <LanguageOption navigation={navigation} language={"ja"} prompt={prompt}/>
            <View style={styles.divider}/>
            <LanguageOption navigation={navigation} language={"nb"} prompt={prompt}/>
            <View style={styles.divider}/>
            <LanguageOption navigation={navigation} language={"pt"} prompt={prompt}/>
            <View style={styles.divider}/>
            <LanguageOption navigation={navigation} language={"ru"} prompt={prompt}/>
            <View style={styles.divider}/>
            <LanguageOption navigation={navigation} language={"es"} prompt={prompt}/>
            <View style={styles.divider}/>
            <LanguageOption navigation={navigation} language={"tr"} prompt={prompt}/>
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
  