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

const windowWidth = Dimensions.get('window').width;

export default function NewQuestion({ route, navigation}) {
    const params = route.params;
    let prompt = params.prompt.substring(0, params.prompt.length - 1);
    return (
        <View style={styles.container}>
            <View style={styles.languageChoice}>
                <Text style={styles.text}> This question is about: </Text>
            </View>
            <View style={styles.textbox}>
                <Text style={styles.prompt}>{prompt}</Text>
                <TextboxInput></TextboxInput>
                <Text style={styles.prompt}>?</Text>
            </View>
            <View>
                <Text>Add tags</Text>
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
    text: {
       fontSize: 17,
       margin: 20,
    },
    prompt: {
        fontSize: 17,
        marginLeft: 20,
    }
});