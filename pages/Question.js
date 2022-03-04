import React from "react";
import {
    StyleSheet,
    Text,
    View,
    Image,
    Dimensions,
    ScrollView,
    KeyboardAvoidingView,
    SafeAreaView,
    TextInput,
    Button,
} from 'react-native';

import Colors from "../Themes/colors";
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';

import { db } from "../firebase";
import { doc, getDoc } from "firebase/firestore";

//import CommentInput from './CommentInput';
import getLanguageName from '../utils/getLanguageName';

const windowWidth = Dimensions.get('window').width;

function translateLevel(level) {
    if (level == 1) {
        return "Beginner";
    } else if (level == 2) {
        return "Intermediate";
    } else if (level == 3) {
        return "Advanced";
    } else if (level == 4) {
        return "Fluent";
    }
}

function pushComment(comments, com, i) {
    comments.push (
        <View key={i} style={[styles.post, {borderBottomWidth: 0}]}>
            <View style={styles.left}>
                <FontAwesome name="user-circle" size={24} color={Colors.chatty} />
            </View>
            <View style={styles.right}>
                <View style={styles.name_timestamp_container}>
                    <View flexDirection="row" alignItems="baseline">
                        <Text style={styles.name}>{com.user.name} · </Text>
                        <Text style={{color: Colors.lighter_purplegrey}}>
                            {getLanguageName(com.user.native.language)}
                            {com.user.native.location.length > 0 ? " ("+com.user.native.location+")" : ''}
                        </Text>
                    </View>
                    <Text style={{color: Colors.purplegrey}}>{com.timestamp}</Text>
                </View>
                
                <Text style={{fontSize: 16, paddingBottom: 10}}>{com.comment}</Text>
            </View>
        </View>
    )
}

export function Question({ route, navigation}) {
    const params = route.params;
    const question = params.question;
    const [text, setText] = React.useState("");
    const [viewComments, setComments] = React.useState([]);

    var tags = [];

	for (let i = 0; i < question.tags.length; i++) {

		tags.push(
			<View key={i} style={styles.tag}>
				<Text style={styles.tag_text}>{question.tags[i]}</Text>
			</View>
		);
	}
    
    var comments = viewComments;
    
    if (comments.length < question.comments.length ) {
        for (let i = 0; i < question.comments.length; i++) {
            
            var com = question.comments[i];

            pushComment(comments, com, i);
        }
    }

    return (
        <View style={styles.container}>
            {/* question and comments */}
            <ScrollView style={{ height: '80%',}}> 
                <View style={styles.post}>
                    <View style={styles.left}>
                        <FontAwesome name="user-circle" size={24} color={Colors.chatty} />
                    </View>
                    <View style={styles.right}>
                        <View style={styles.name_timestamp_container}>
                            <Text style={styles.name}>{question.user.name}</Text>    
                            <Text style={{color: Colors.purplegrey}}>{question.timestamp}</Text>
                        </View>
                        
                        <View> 
                            <Text style={{color: Colors.lighter_purplegrey}}>
                                Native language: {getLanguageName(question.user.native.language)}
                                {question.user.native.location.length > 0 ? " ("+question.user.native.location+")" : ''}
                            </Text>
                            <View margin={5}/>
                            <Text style={{color: Colors.lighter_purplegrey}}>
                                Question about: {getLanguageName(question.user.learning.language)}
                                {question.user.learning.location.length > 0 ? " ("+question.user.learning.location+")" : ''}
                            </Text>
                            <Text style={{color: Colors.lighter_purplegrey}}>
                                Level: {translateLevel(question.user.learning.level)}
                            </Text>
                        </View>
                        
                        <Text style={{fontSize: 16, paddingVertical: 20}}>{question.question}</Text>

                        {question.tags.length > 0 ? (
                                <View style={styles.tags_container}>
                                    <MaterialCommunityIcons name="tag" size={24} color={Colors.chatty}/>
                                    { tags }
                                </View>
                            ):(
                                <></>
                            )
                        }
                        

                        <View style={styles.comments_container}>
                            <MaterialCommunityIcons name="comment" size={16} color={Colors.lavender} />
                            <Text style={styles.num_comments}>{question.comments.length}</Text>
                        </View>
                    </View>
                </View>

                <View padding={5} />
                
                {comments.length == 0 ? (
                        <View padding={15} paddingLeft={30}>
                        <Text style={styles.no_comments_text}>
                            No comments yet. Be the first to comment!
                        </Text>
                        { React.useEffect(() => { setComments([...comments]); }, []) }
                        </View>
                    ):(
                        <View style={styles.comment}>
                            { React.useEffect(() => { setComments([...comments]); }, []) }
                            { viewComments }
                        </View>
                    )
                }
            </ScrollView>

            <KeyboardAvoidingView 
                behavior={Platform.OS == "ios" ? "position" : "height"}
                style={{ flex: 1, justifyContent: 'flex-end', }}
                keyboardVerticalOffset = {95}
            >
            <SafeAreaView>
            
                <View style={styles.bottom_action}>
                <View alignItems='baseline' flexDirection='row' flex={1}>
                    <View style={styles.comment_bar}>
                    <FontAwesome name="user-circle" size={36} color={Colors.chatty} />
                    <TextInput
                        onChangeText={setText}
                        value={text}
                        placeholder="Type a comment"
                        placeholderTextColor={Colors.lighter_purplegrey}
                        multiline={true}
                        style={styles.input}
                    />
                    </View>
                    <View style={styles.button_container}>
                    <Button
                        title="Post"
                        onPress={() => 
                            {
                                pushComment(
                                    comments, 
                                    {
                                        user: { 
                                            name:'me',
                                            native: {
                                                language:'en',
                                                location: 'US',
                                            },
                                        },
                                        timestamp: 'Just now',
                                        comment: text,
                                    }, 
                                    comments.length
                                );
                                console.log(comments.length);
                                setText('');
                                setComments([...comments]);
                            }
                        }
                        disabled={text.length==0}
                    />
                    </View>
                </View>
                </View>
            
            </SafeAreaView>
            </KeyboardAvoidingView>
        </View>
    );
  }
  
export default Question;

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.background,
        display: "flex",
        flex: 1,
    },
    post: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        paddingVertical: 10,
        paddingHorizontal: 30,
        borderColor: Colors.lavender,
        borderBottomWidth: 1,
        width: windowWidth,
    },
    left: {
        flex: 1,
    },
    right: {
        flex: 9,
        paddingLeft: 0,
    },
    name: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    name_timestamp_container: {
        marginBottom: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'baseline',
    },
    tags_container: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    tag: {
        padding: 5,
        borderRadius: 99999,
        backgroundColor: Colors.chatty,
        marginLeft: 5,
    },
    tag_text: {
        color: 'white',
        fontSize: 12,
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
    no_comments_text: {
        color: Colors.purplegrey,
        paddingLeft: 5,
        fontSize: 16,
    },

    bottom_action: {
        backgroundColor: Colors.background,
        width:'100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingTop: 10,
        shadowColor: Colors.purplegrey,
        shadowOpacity: 0.3,
        shadowRadius: 3,
        shadowOffset: { height: -5 },
      },
      comment_bar: {
        justifyContent: 'center', 
        alignItems: 'baseline',
        flexDirection: "row",
        paddingLeft: 15,
        flex: 4,
      },
      input: {
        width: '85%',
        marginLeft: 10,
        padding: 10,
        paddingTop: 10,
        borderRadius: 30,
        borderWidth: 1,
        borderColor: Colors.lavender,
        backgroundColor: 'white',
        fontSize: 16,
      },
      button_container: {
        marginRight: 10,
      },
});