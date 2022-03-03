/* Should use the Stack Navigator header for headers on all other pages, but hide Stack Navigator header on pages
 *
 * "Home"
 * "Match"
 * "Chat"
 * "Me"
 * 
 * and use Header.js instead.
 */

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
import colors from '../Themes/colors';

const windowWidth = Dimensions.get('window').width;

export function Header({ page, navigation }) {

    return (
        <SafeAreaView>
            { page == "Home" ? (
                <View style={styles.header_home}>
                    <Image source={logo} style={styles.logo}/>
                    <Pressable
                        onPress={ () => {
                            navigation.navigate("NewQuestion");
                            }
                        }
                        style={({ pressed }) => [
                            { opacity: pressed ? 0.5 : 1.0 }
                        ]}
                    >
                        <MaterialCommunityIcons name="square-edit-outline" size={36} color={Colors.chatty}/>
                    </Pressable>
                </View>
            ) : (
                <View style={styles.header_home}>
                    <Image source={logo} style={styles.logo}/>
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
    },
});