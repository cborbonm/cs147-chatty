import {
    StyleSheet,
    Text,
    View,
    Pressable,
    FlatList,
} from 'react-native';
import Colors from "../Themes/colors";
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { questions } from '../data/questions';
import { db } from "../firebase";
import { doc, getDoc } from "firebase/firestore";

export function Match({ navigation }) {
    return (
        <View style={styles.container}>
            <Text>Match</Text>
        </View>
    );
}
  
export default Match;

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.background,
        justifyContent: 'center',
        flex: 1,
        overflow: 'hidden',
    },
});