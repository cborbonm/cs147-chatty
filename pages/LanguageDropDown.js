import {
    StyleSheet,
    Text,
    View,
    Pressable,
} from 'react-native';

import Colors from "../Themes/colors";
import getLanguageName from "../utils/getLanguageName";

export default function LanguageDropDown({ route, navigation }) {

    const { prompt, addQuestion, addComment } = route.params;
    
    function LanguageOption( { language } ) {
        return (
            <Pressable // press whole row
                onPress={ () => navigation.navigate("NewQuestion", {language: language, prompt: prompt, addQuestion: addQuestion, addComment: addComment}) } 
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

    return (
        <View style={styles.container}>
        <View style={styles.languagesDiv}>
            <LanguageOption language={"ar"} />
            <View style={styles.divider}/>
            <LanguageOption language={"zh"} />
            <View style={styles.divider}/>
            <LanguageOption language={"nl"} />
            <View style={styles.divider}/>
            <LanguageOption language={"en"} />
            <View style={styles.divider}/>
            <LanguageOption language={"fr"} />
            <View style={styles.divider}/>
            <LanguageOption language={"de"} />
            <View style={styles.divider}/>
            <LanguageOption language={"it"} />
            <View style={styles.divider}/>
            <LanguageOption language={"ja"} />
            <View style={styles.divider}/>
            <LanguageOption language={"nb"} />
            <View style={styles.divider}/>
            <LanguageOption language={"pt"} />
            <View style={styles.divider}/>
            <LanguageOption language={"ru"} />
            <View style={styles.divider}/>
            <LanguageOption language={"es"} />
            <View style={styles.divider}/>
            <LanguageOption language={"tr"} />
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
  