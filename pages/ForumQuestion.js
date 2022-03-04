import {
    StyleSheet,
    Text,
    View,
    Image,
    Dimensions,
    Pressable,
} from 'react-native';

import Colors from "../Themes/colors";

import getLanguageName from "../utils/getLanguageName";
import getLanguageNativeName from "../utils/getLanguageNativeName";

import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';

const windowWidth = Dimensions.get('window').width;

export function ForumQuestion({ question, navigation}) {
    return (
        <Pressable // press whole row
            onPress={ () => navigation.navigate("Question", { question: question }) } 
            style={({ pressed }) => [
            {
              backgroundColor: pressed ? Colors.pressed_background : Colors.background,
            },
            styles.post
            ]}
        >
            <View style={styles.left}>
                <FontAwesome name="user-circle" size={40} color={Colors.chatty} />
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
                    <MaterialCommunityIcons name="comment" size={16} color={Colors.lavender} />
                    <Text style={styles.num_comments}>{question.comments.length}</Text>
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
    }
});