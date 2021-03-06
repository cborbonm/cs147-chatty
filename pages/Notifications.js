import {
    StyleSheet,
    Text,
    View,
    Pressable,
    FlatList,
} from 'react-native';
import Colors from "../Themes/colors";
import { MaterialCommunityIcons } from '@expo/vector-icons';

export function Notifications({ navigation }) {
    return (
        <View style={styles.container}>
            <Text>Notifications</Text>
        </View>
    );
}
  
export default Notifications;

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.background,
        justifyContent: 'center',
        flex: 1,
        overflow: 'hidden',
    },
});