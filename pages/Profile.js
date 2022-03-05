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

export function Profile({ navigation }) {
    return (
        <View style={styles.container}>
            <Text>Profile</Text>
        </View>
    );
}
  
export default Profile;

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        flex: 1,
        overflow: 'hidden',
    },
});