import {
    StyleSheet,
    Text,
    View,
    Pressable,
    FlatList,
    Dimensions,
} from 'react-native';
import Colors from "../Themes/colors";
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { db } from "../firebase";
import { doc, getDoc } from "firebase/firestore";


// import logo from "../assets/Icons/chatty.png";
import { FontAwesome } from '@expo/vector-icons';

const windowWidth = Dimensions.get('window').width;

export function Profile({ navigation }) {
    function Header() {
        return (
            <View style={styles.header_style}>
                {/* working on adding settings icon */}
                <Image source = {require("../assets/Icons/chatty.png")} style={styles.logo}/>
            </View>
        );
    }
    return (
        <>
            <View style={styles.left}>
                    <FontAwesome name="user-circle" size={24} color={Colors.chatty} />
            </View>
            <View style={styles.container}>
                <Text style={styles.name}>Jane</Text>
                <Text style={styles.username}>@jane10239842</Text>
                <Text style={styles.fillins}>Introduction</Text>
                <Text style={styles.fillins}>Talking Points</Text>
                <Text style={styles.fillins}>Activity</Text>
            </View>
        </>
    );
}
  
export default Profile;

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.background,
        justifyContent: 'center',
        flex: 1,
        overflow: 'hidden',
    },

    header_style: {
        flexDirection: 'row',
        alignItems: 'baseline',
        justifyContent: 'space-between',
        width: windowWidth,
        height: 45,
        borderBottomWidth: 1,
        borderColor: Colors.lavender,
        backgroundColor: Colors.background,
        paddingHorizontal: 10,
        paddingTop: 4,
    },

    name: {
        color: 'black',
        fontSize: 25,
    },

    username: {
        color: Colors.purplegrey,
        fontSize: 13,
    },

    fillins: {
        color: 'black',
        fontSize: 14,
    },

    logo: {
        height: 36,
        width: undefined,
        aspectRatio: 364/98,
    },
});