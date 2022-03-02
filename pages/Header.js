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
import { MaterialCommunityIcons } from '@expo/vector-icons';

import logo from "../assets/Icons/chatty.png";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const HEADER_TEXT = "New Question";
const isHome = true;

export function Header({ name, question, timestamp}) {
    return (
        <SafeAreaView>
            { isHome ? (
                <View style={styles.header_home}>
                    <Image source={logo} style={styles.logo}/>
                    <MaterialCommunityIcons name="square-edit-outline" size={36} color={Colors.chatty} />
                </View>
                ) : (
                <View style={styles.header_page}>
                    <Text style={styles.header_text}>{HEADER_TEXT}</Text>
                </View>
                )
            }
        </SafeAreaView>
    );
}
  
export default Header;

const styles = StyleSheet.create({
    header_home: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        width: windowWidth,
        height: 45,
        borderBottomWidth: 1,
        borderColor: Colors.lavender,
        paddingHorizontal: 20,
    },
    header_page: {
        alignItems: 'center',
        width: windowWidth,
        height: 45,
        borderBottomWidth: 1,
        borderColor: Colors.lavender,
    },
    header_text: {
        fontSize: 24,
        color: Colors.chatty,
    },
    logo: {
        height: 36,
        width: undefined,
        aspectRatio: 364/98,
    }
});