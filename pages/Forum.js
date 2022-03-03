import {
    StyleSheet,
    Text,
    View,
    Pressable,
    FlatList,
} from 'react-native';
import ForumQuestion from './ForumQuestion';
import Colors from "../Themes/colors";
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { questions } from '../data/questions';

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
                        username={item.username}
                        timestamp={item.timestamp}
                        question={item.question}
                        comments={item.comments}
                        //navigation={navigation}
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