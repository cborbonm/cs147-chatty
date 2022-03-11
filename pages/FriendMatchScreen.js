import React, { useState } from "react";
import {
    StyleSheet,
    Switch,
    Text,
    TextInput,
    TouchableOpacity,
    View,
    Image,
    Dimensions,
    Pressable,
} from 'react-native';

import Colors from "../Themes/colors";
import { MaterialCommunityIcons } from '@expo/vector-icons';

const windowWidth = Dimensions.get('window').width;

export default function FriendMatchScreen({ route, navigation }) {
    // hide bottom nav
    React.useEffect(() => {
        navigation.getParent()?.setOptions({ tabBarStyle: { display: "none" }});
        return () => navigation.getParent()?.setOptions({ tabBarStyle: styles.bottom_action_goback });
    }, [navigation]);

    return (
        <View style={styles.container}>
            <Text style={styles.text}>
            With Find Friend, you will connect with 
            a stranger who is: {"\n"}{"\n"}
            1) learning your native language, {"\n"}
            2) learning the same language as you are, or {"\n"}
            3) is a native speaker in the language you are learning.
            {"\n"}{"\n"}
            You will have 8 text or voice messages to get to 
            know that person before we prompt you to schedule 
            a video chat with them! You might meet your next 
            language learning partner!
            </Text>
            <TouchableOpacity style={styles.friendmatch_button} onPress={() => (navigation.navigate("FriendMatched"))}>
                <Text style={styles.button_text}>FIND A FRIEND</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.background,
        display: "flex",
        flex: 1,
        alignContent: 'center',
    },
    text: {
        fontSize: 15,
        margin: 22,
        color: Colors.purplegrey,
    },
    friendmatch_button: {
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        backgroundColor: Colors.lighter_purple,
        borderRadius: 40,
        height: 38,
        margin: 25,
    },
    button_text: {
        color: 'white',
        paddingVertical: 10,
        paddingHorizontal: 30,
        fontSize: 16,
        fontWeight: '500',
    },
});