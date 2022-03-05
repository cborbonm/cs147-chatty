import React from "react";
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
import { MaterialCommunityIcons } from '@expo/vector-icons';

import getLanguageName from "../utils/getLanguageName";

const windowWidth = Dimensions.get('window').width;

export default function NewQuestion({ route, navigation }) {
    const params = route.params;
    let prompt = params.prompt;
    let language = params.language;

    const [text, setText] = React.useState("");
    var tags = [];

    var disabled = !language || !text;

    function Tag( {tag} ) {
        const [selected, setSelected] = React.useState(false);
        return (
            <Pressable 
                style={[
                    {backgroundColor: selected ? Colors.lighter_purple : "white"},
                    styles.tag
                ]}
                onPress={ () => {
                    setSelected(!selected);
                    if (!selected) { // unsure why it has to be !selected, but it works
                        tags.push(tag);
                    } else {
                        const index = tags.indexOf(tag);
                        tags.splice(index, 1); // remove one tag in the array
                    }
                    console.log(tags);
                }} 
            >
                <Text 
                    style={[
                        {color: selected ? "white" : Colors.purplegrey},
                        styles.tagText
                    ]}
                >
                        {tag}
                </Text>
            </Pressable>
        );
    }

    return (
        <View style={styles.container}>
            <View style={styles.languageChoice}>
                <Text style={styles.text}> This question is about: </Text>
                <Pressable 
                    onPress={ () => navigation.navigate("LanguageDropDown", {
                        prompt: prompt } ) } 
                    style={({ pressed }) => [
                        {
                            backgroundColor: pressed ? Colors.pressed_background : "white",
                        },
                        styles.languageDropDown
                    ]}>
                    <Text>{language? getLanguageName(language) : "Select Language"}</Text>
                </Pressable>
            </View>
            
            {/* textbox input */}
            <View style={styles.textbox}>
                <Text style={styles.prompt}>{prompt}</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={setText}
                    value={text}
                    placeholder="Type your question here"
                    placeholderTextColor={Colors.lighter_purplegrey}
                    multiline={true}
                />
            </View>

            {/* tag list */}
            <View style={styles.addTagsDiv}>
                <MaterialCommunityIcons name="tag" size={20} color={Colors.lighter_purple}/>
                <Text style={styles.addTags}>Add tags (optional)</Text>
            </View>
            <View style={styles.tagDiv}>
                <Tag tag="#casual" />
                <Tag tag="#stranger" />
                <Tag tag="#friends" />
                <Tag tag="#slang" />
                <Tag tag="#online" />
                <Tag tag="#acquaintances" />
                <Tag tag="#business" />
                <Tag tag="#formal" />
                <Tag tag="#school" />
            </View>

            {/* submit button */}
            <Pressable 
                onPress={ () => navigation.navigate("Question", { 
                    question: {
                        user: { 
                            name:'me',
                            native: {
                                language:'en',
                                location: 'US',
                            },
                            learning: {
                                language: language,
                                location: '',
                                level: 1,
                            },
                        },
                        timestamp: 'Just now',
                        question: text,
                        tags: tags,
                        comments: [
                        ],
                    } 
                }) } 
                disabled={disabled} // can only submit after filling out both language and text fields
                style={({ pressed }) => [
                    { opacity: pressed ? 0.5 : (disabled ? 0.5 : 1.0) }, styles.submitButton
                ]}
            >
            <Text style={styles.submitButtonText}>Submit question</Text>
            </Pressable>
            
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
        marginLeft: 7,
    },
    text: {
       fontSize: 17,
    },
    prompt: {
        fontSize: 17,
        marginLeft: 25,
    },
    input: {
        height: 150,
        margin: 25,
        padding: 10,
        paddingTop: 10,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: Colors.lavender,
        backgroundColor: 'white',
        fontSize: 16,
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
    },
    submitButton: {
        display: "flex",
        alignSelf: 'center',
        backgroundColor: Colors.lighter_purple,
        margin: 20,
        borderRadius: 50,
    },
    submitButtonText: {
        color: 'white',
        padding: 10,
        fontSize: 16,
        fontWeight: '500',
    },
});