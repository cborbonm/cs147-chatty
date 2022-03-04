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

export function NewQuestion({ prompt, navigation}) {
    return (
        <Text>{prompt}</Text>
    );
}

export default NewQuestion;

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