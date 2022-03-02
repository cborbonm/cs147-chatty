import {
    StyleSheet,
    Text,
    View,
    Image,
    Dimensions,
    Pressable,
    SafeAreaView,
} from 'react-native';
import Colors from "../Themes/colors";
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export function Header({ name, question, timestamp}) {
    return (
        <SafeAreaView>
            <View style={styles.header_container}>
                <Text style={styles.header_text}>Home</Text>
            </View>
        </SafeAreaView>
    );
}
  
export default Header;

const styles = StyleSheet.create({
    header_container: {
        alignItems: 'center',
        width: windowWidth,
        height: 45,
        borderBottomWidth: 1,
        borderBottomColor: Colors.lavender,
    },
    header_text: {
        fontSize: 24,
        color: Colors.chatty,
    },
});