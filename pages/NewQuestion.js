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
import TextboxInput from './TextboxInput';

import LanguageDropDown from './LanguageDropDown';

const windowWidth = Dimensions.get('window').width;

export default function NewQuestion({ route, navigation}) {
    const params = route.params;
    let prompt = params.prompt;
    let language = "Select Language ↓";
    return (
        <View style={styles.container}>
            <View style={styles.languageChoice}>
                <Text style={styles.text}> This question is about: </Text>
                <Pressable 
                onPress={ () => navigation.navigate("LanguageDropDown") } 
                style={({ pressed }) => [
                    {
                        backgroundColor: pressed ? Colors.pressed_background : "white",
                    },
                    styles.languageDropDown
                ]}
                ><Text>{language}</Text></Pressable>
            </View>
            <View style={styles.textbox}>
                <Text style={styles.prompt}>{prompt}</Text>
                <TextboxInput></TextboxInput>
            </View>
            <View style={styles.addTagsDiv}>
                <MaterialCommunityIcons name="tag" size={20} color={Colors.chatty}/>
                <Text style={styles.addTags}>Add tags</Text>
            </View>
            <View style={styles.tagDiv}>
                <Pressable style={styles.tag}>
                    <Text style={styles.tagText}># casual</Text>
                </Pressable>
                <Pressable style={styles.tag}>
                    <Text style={styles.tagText}># stranger</Text>
                </Pressable>
                <Pressable style={styles.tag}>
                    <Text style={styles.tagText}># friends</Text>
                </Pressable>
                <Pressable style={styles.tag}>
                    <Text style={styles.tagText}># slang</Text>
                </Pressable>
                <Pressable style={styles.tag}>
                    <Text style={styles.tagText}># online</Text>
                </Pressable>
                <Pressable style={styles.tag}>
                    <Text style={styles.tagText}># acquaintances</Text>
                </Pressable>
                <Pressable style={styles.tag}>
                    <Text style={styles.tagText}># business</Text>
                </Pressable>
                <Pressable style={styles.tag}>
                    <Text style={styles.tagText}># formal</Text>
                </Pressable>
                <Pressable style={styles.tag}>
                    <Text style={styles.tagText}># school</Text>
                </Pressable>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.background,
        display: "flex",
        flex: 1,
    },
    languageChoice: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        margin: 20,
    },
    languageDropDown: {
        padding: 7,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: Colors.lavender,
        shadowOpacity: 0.2,
        shadowOffset: {width: 1,height: 1},
    },
    text: {
       fontSize: 17,
    },
    prompt: {
        fontSize: 17,
        marginLeft: 25,
    },
    addTagsDiv: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        marginLeft: 25,
    },
    addTags: {
        margin: 10,
        fontSize: 17,
    },
    tagDiv: {
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        margin: 20,
        marginTop: 5,
    },
    tag: {
        display: "flex",
        alignItems: "center",
        backgroundColor: "white",
        margin: 5,
        borderWidth: 1,
        borderColor: Colors.lavender,
        borderRadius: 15,
        shadowOpacity: 0.2,
        shadowOffset: {width: 1,height: 1},
        padding: 3,
        paddingLeft: 7,
        paddingRight: 7,
    },
    tagText: {
        fontSize: 15,
        color: Colors.purplegrey
    }
});