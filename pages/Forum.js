import {
    StyleSheet,
    Text,
    View,
    Dimensions,
    Pressable,
    FlatList,
} from 'react-native';
// import ForumQuestion from './ForumQuestion';
import Colors from "../Themes/colors";
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';

import getLanguageName from "../utils/getLanguageName";

import { questions } from '../data/questions';
import { db } from "../firebase";
import { doc, getDoc } from "firebase/firestore";

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
                <FontAwesome name="user-circle" size={24} color={Colors.chatty} />
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

export function Forum({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.sort_by}>
                <Text style={{fontSize: 14}}>Newest</Text>
                    <MaterialCommunityIcons name="menu-down" size={24} color={Colors.chatty} />
            </View>
            <FlatList
                data={questions}
                renderItem={({item}) => 
                    <ForumQuestion 
                        question={item}
                        navigation={navigation}
                    />
                }
                keyExtractor={(item) => item.key}
            />
        </View>
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