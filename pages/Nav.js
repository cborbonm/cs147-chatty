import {
    StyleSheet,
    Text,
    View,
    Pressable,
} from 'react-native';
import Colors from "../Themes/colors";
import { MaterialCommunityIcons, Ionicons, FontAwesome } from '@expo/vector-icons';

export function Nav({ }) {
    return (
        <View style={styles.bottom_action}>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Ionicons name="home" size={30} color="white" />
            <Text style={styles.icon_name}>
                Home
            </Text>
            </View>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <MaterialCommunityIcons name="account-search" size={30} color="white" />
            <Text style={styles.icon_name}>
                Match
            </Text>
            </View>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <MaterialCommunityIcons name="message-text" size={30} color="white" />
            <Text style={styles.icon_name}>
                Chat
            </Text>
            </View>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <FontAwesome name="user-circle" size={30} color="white" />
            <Text style={styles.icon_name}>
                Me
            </Text>
            </View>
        </View>
    );
  }
  
export default Nav;

const styles = StyleSheet.create({
    bottom_action: {
        backgroundColor: Colors.chatty,
        width:'100%',
        height: 60,
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingVertical: 10,
      },
    icon_name: {
        fontSize: 12,
        color: 'white',
    },
});