import {
    StyleSheet,
    Text,
    View,
    Image,
    Dimensions,
    Pressable,
    FlatList,
    TouchableHighlight,
} from 'react-native';
import ForumQuestion from './ForumQuestion';
import Colors from "../Themes/colors";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import colors from '../Themes/colors';

const QUESTIONS = [
    {
        username: 'Xiaofeng',
        key: 1,
        timestamp: '1 min ago',
        question: 'How do you say 看热闹 in English?',
        comments: 1,
    },
    {
        username: 'Delali',
        key: 2,
        timestamp: '5 min ago',
        question: 'How should I order a café at a restaurant?',
        comments: 0,
    },
    {
        username: 'Masahiro',
        key: 3,
        timestamp: '6 min ago',
        question: 'Should I take off my shoes when I go to someone’s house in the US?',
        comments: 5,
    },
    {
        username: 'Fernand',
        key: 4,
        timestamp: '10 min ago',
        question: 'Does this sound natural?',
        comments: 2,
    },
    {
        username: 'Andrea',
        key: 5,
        timestamp: '12 min ago',
        question: 'Do we say “my family is” or “my family are”?',
        comments: 3,
    },{
        username: 'Xiaofeng',
        key: 6,
        timestamp: '1 min ago',
        question: 'How do you say 看热闹 in English?',
        comments: 1,
    },
    {
        username: 'Delali',
        key: 7,
        timestamp: '5 min ago',
        question: 'How should I order a café at a restaurant?',
        comments: 0,
    },
    {
        username: 'Masahiro',
        key: 8,
        timestamp: '6 min ago',
        question: 'Should I take off my shoes when I go to someone’s house in the US?',
        comments: 5,
    },
    {
        username: 'Fernand',
        key: 9,
        timestamp: '10 min ago',
        question: 'Does this sound natural?',
        comments: 2,
    },
    {
        username: 'Andrea',
        key: 10,
        timestamp: '12 min ago',
        question: 'Do we say “my family is” or “my family are”?',
        comments: 3,
    },
];

export function Forum({ }) {
    return (
        <View style={styles.container}>
            <View style={styles.sort_by}>
                <Text style={{fontSize: 14}}>Newest</Text>
                <MaterialCommunityIcons name="menu-down" size={24} color={Colors.chatty} />
            </View>
            <FlatList
                data={QUESTIONS}
                renderItem={({item}) => 
                        <ForumQuestion 
                            username={item.username}
                            timestamp={item.timestamp}
                            question={item.question}
                            comments={item.comments}
                        />
                }
            />
        </View>
    );
}
  
export default Forum;

const styles = StyleSheet.create({
    container: {
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
});