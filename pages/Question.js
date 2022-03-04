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

export function Question({ route, navigation}) {
    const params = route.params;
    const question = params.question;
    return (
        <View style={styles.container}>
            <Text>{question.question}</Text>
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
});