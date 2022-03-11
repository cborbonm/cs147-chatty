import React, { useState } from "react";
import {
    StyleSheet,
    Text,
    View,
    Dimensions,
    Pressable,
    FlatList,
    Image,
    SafeAreaView,
} from 'react-native';

import Colors from "../Themes/colors";
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';

// import { SafeAreaView } from "react-native-safe-area-context";

import getLanguageName from "../utils/getLanguageName";

import { QUESTIONS } from '../data/questions';

import logo from "../assets/Icons/chatty.png";

const windowWidth = Dimensions.get('window').width;

export function Forum({ navigation }) {

    const [questions, setQuestions] = useState(QUESTIONS);
    
    const addQuestion = (newQuestion) => {
        setQuestions([newQuestion, ...questions]);
        console.log("questions.indexOf(newQuestion)", questions.indexOf(newQuestion));
    }

    const addComment = (newComment, index) => {
        let questionsCopy = questions;
        let qAtIndex = questionsCopy[index];
        let commentsCopy = qAtIndex.comments;
        commentsCopy.push(newComment);
        qAtIndex.comments = commentsCopy;
        questionsCopy.splice(index, 1, qAtIndex)
        setQuestions([...questionsCopy]);
    }

    function Header() {
        return (
            <View style={styles.header_style}>
                <Image source={logo} style={styles.logo}/>
                <Pressable
                    onPress={ () => {
                        navigation.navigate("NewQuestionPromptList", {addQuestion: addQuestion, addComment: addComment});
                        }
                    }
                    style={({ pressed }) => [
                        { opacity: pressed ? 0.5 : 1.0 }
                    ]}
                >
                    <MaterialCommunityIcons name="square-edit-outline" size={36} color={Colors.accent}/>
                </Pressable>
            </View>
        );
    }

    function ForumQuestion({ question, index, navigation}) {
        return (
            <Pressable // press whole row
                onPress={ () => navigation.navigate("Question", { question: question, index: index, addComment: addComment, }) } 
                style={({ pressed }) => [
                {
                backgroundColor: pressed ? Colors.pressed_background : Colors.background,
                },
                styles.post
                ]}
            >
                <View style={styles.left}>
                    <Image source={question.user.avatar} style={styles.avatar} />
                    {/* <FontAwesome name="user-circle" size={24} color={Colors.chatty} /> */}
                </View>
                <View style={styles.right}>
                    <View style={styles.name_timestamp_container}>
                        <View flexDirection="row" alignItems="baseline">
                            <Text style={styles.name}>{question.user.name} · </Text>
                            <Text style={{color: Colors.lighter_purplegrey}}>
                                {getLanguageName(question.user.native.language)}
                                {question.user.native.location.length > 0 ? " ("+question.user.native.location+")" : ''}
                            </Text>
                        </View>
                        <Text style={{color: Colors.purplegrey}}>{question.timestamp}</Text>
                    </View>
                    
                    <View marginBottom={10}> 
                        <Text style={{color: Colors.lighter_purplegrey}}>
                            Question about: {getLanguageName(question.user.learning.language)}
                            {question.user.learning.location.length > 0 ? " ("+question.user.learning.location+")" : ''}
                        </Text>
                    </View>

                    <Text style={{fontSize: 16}} numberOfLines={3}>{question.question}</Text>
                    <View style={styles.comments_container}>
                        <MaterialCommunityIcons name="comment" size={16} color={question.comments.length == 0 ? Colors.accent : Colors.lavender} />
                        <Text style={styles.num_comments}>{question.comments.length}</Text>
                    </View>
                </View>
            </Pressable>
        );
    }
    
    return (
        <SafeAreaView style={styles.container}>
            <Header />
            <View style={styles.container}>
                <View style={styles.sort_by}>
                    <Text style={{fontSize: 14}}>Newest</Text>
                        <MaterialCommunityIcons name="menu-down" size={24} color={Colors.chatty} />
                </View>
                <FlatList
                    data={questions}
                    renderItem={({item, index}) => 
                        <ForumQuestion 
                            question={item}
                            index={index}
                            navigation={navigation}
                        />
                    }
                    keyExtractor={(item) => item.user.name + item.question}
                />
            </View>
        </SafeAreaView>
    );
}
  
export default Forum;

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.background,
        justifyContent: 'center',
        flex: 1,
        overflow: 'hidden',
    },
    sort_by: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
        paddingLeft: 10,
        borderBottomWidth: 1,
        borderColor: Colors.lavender,
    },
    post: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderColor: Colors.lavender,
        borderBottomWidth: 1,
        width: windowWidth,
    },
    left: {
        flex: 1,
    },
    right: {
        flex: 9,
        paddingLeft: 10,
    },
    name: {
        fontSize: 16,
        fontFamily: 'Lato-Bold',
    },
    name_timestamp_container: {
        marginBottom: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'baseline',
    },
    comments_container: {
        marginTop: 10,
        flexDirection: "row",
        alignItems: "center",
    },
    num_comments: {
        paddingLeft: 5,
        fontSize: 16,
    },
    avatar: {
        width: 40,
        height: 40,
        borderRadius: 99999,
    },

    //header
    header_style: {
        flexDirection: 'row',
        alignItems: 'baseline',
        justifyContent: 'space-between',
        width: windowWidth,
        height: 54,
        borderBottomWidth: 1,
        borderColor: Colors.lavender,
        backgroundColor: Colors.background,
        paddingHorizontal: 10,
        paddingTop: 9,
    },
    logo: {
        height: 36,
        width: undefined,
        aspectRatio: 364/98,
    },
});