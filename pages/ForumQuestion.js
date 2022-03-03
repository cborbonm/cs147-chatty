import {
    StyleSheet,
    Text,
    View,
    Image,
    Dimensions,
    Pressable,
} from 'react-native';

import Colors from "../Themes/colors";
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';

const windowWidth = Dimensions.get('window').width;

export function ForumQuestion({ username, language, timestamp, question, comments, navigation}) {
    return (
        <Pressable // press whole row
            onPress={ () => console.log("pressed question", timestamp) /*navigation.navigate("SongDetail", { question: question })(/) */ } 
            style={({ pressed }) => [
            {
              backgroundColor: pressed ? Colors.pressed_background : Colors.background,
            },
            styles.post
        ]}>
            <View style={styles.left}>
                <FontAwesome name="user-circle" size={40} color={Colors.chatty} />
            </View>
            <View style={styles.right}>
                <View style={styles.name_timestamp_container}>
                    <Text style={styles.name}>{username}</Text>
                    <Text style={styles.timestamp}>{timestamp}</Text>
                </View>
                
                <Text style={styles.question}>{question}</Text>
                <View style={styles.comments_container}>
                    <MaterialCommunityIcons name="comment" size={16} color={Colors.lavender} />
                    <Text style={styles.num_comments}>{comments}</Text>
                </View>
            </View>
        </Pressable>
    );
  }
  
export default ForumQuestion;

const styles = StyleSheet.create({
    post: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        paddingVertical: 10,
        paddingHorizontal: 30,
        borderColor: Colors.lavender,
        borderTopWidth: 1,
        width: windowWidth,
    },
    left: {
        flex: 15,
    },
    right: {
        flex: 85,
        paddingLeft: 0,
    },
    name: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    timestamp: {
        fontSize: 16,
        color: Colors.purplegrey,
    },
    name_timestamp_container: {
        marginBottom: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    question: {
        fontSize: 16,
    },
    comments_container: {
        marginTop: 10,
        flexDirection: "row",
        alignItems: "center",
    },
    num_comments: {
        paddingLeft: 5,
        fontSize: 16,
    }
});