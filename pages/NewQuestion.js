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

export function NewQuestion({ route, navigation}) {
    const params = route.params;
    return (
        <View style={styles.container}>
            <View styles={styles.languagechoice}>
                <Text styles={styles.text}> This question is about: </Text>
            </View>
            <View styles={styles.textbox}>
                <Text>{params.prompt}</Text>
            </View>
            <View>
                <Text>Add tags</Text>
            </View>
        </View>
    );
}

export default NewQuestion;

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.background,
        display: "flex",
        flex: 1,
    },
    textbox: {
        display: "flex",
        flex: 1,
        margin: 10,
        padding: 10,
    }
});