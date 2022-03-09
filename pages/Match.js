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

import { questions } from '../data/questions';
import { db } from "../firebase";
import { doc, getDoc } from "firebase/firestore";

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
            <Pressable style={styles.friendmatch_icon_container}>
                <MaterialIcons name="people-outline" size={90} color="white" />
            </Pressable>
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
        backgroundColor: '#FBBC05',
        borderRadius: 30,
        padding: 20,
        marginBottom: 20,
    },
    friendmatch_icon_container: {
        backgroundColor: '#1D9BF0',
        borderRadius: 30,
        padding: 20,
        marginBottom: 20,
    },
    text: {
        color: Colors.purplegrey,
        fontSize: 19,
    },
});