import {
    StyleSheet,
    Text,
    View,
    Image,
    Dimensions,
    Pressable,
} from 'react-native';
import Colors from "../Themes/colors";
import { Ionicons } from '@expo/vector-icons';

export function Forum({ name, question, timestamp}) {
    return (
        <View style={styles.container}>
            <Text>Forum</Text>
        </View>
    );
}
  
export default Forum;

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.background,
        justifyContent: 'center',
        flex: 1,
    },
});