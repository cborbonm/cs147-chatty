import {
    StyleSheet,
    Text,
    View,
    Pressable,
    FlatList,
} from 'react-native';
import Colors from "../Themes/colors";
import { MaterialIcons } from '@expo/vector-icons'; 
import { Entypo } from '@expo/vector-icons'; 
import colors from '../Themes/colors';

export function Match({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.match_container}>
            <Pressable style={styles.quickmatch_icon_container} onPress={() => {navigation.navigate("QuickMatchScreen")}}>
                <Entypo name="stopwatch" size={90} color="white" />
            </Pressable>
                <Text style={styles.text}>Quick Match</Text>
            </View>
            <View style={styles.match_container}>
            <Pressable style={styles.friendmatch_icon_container} onPress={() => {navigation.navigate("FriendMatchScreen")}}>
                <MaterialIcons name="people-outline" size={90} color="white" />
            </Pressable >
                <Text style={styles.text}>New Friend</Text>
            </View>
        </View>
    );
}
  
export default Match;

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.background,
        flex: 1,
        overflow: 'hidden',
    },
    match_container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    quickmatch_icon_container: {
        backgroundColor: Colors.yellow,
        borderRadius: 30,
        padding: 20,
        marginBottom: 20,
    },
    friendmatch_icon_container: {
        backgroundColor: Colors.blue,
        borderRadius: 30,
        padding: 20,
        marginBottom: 20,
    },
    text: {
        fontSize: 16,
        fontSize: 16,
        textTransform: 'uppercase',
        color: Colors.purplegrey,
        display: "flex",
        fontFamily: 'Lato-Bold',
    },
});