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

export default function QuickMatchScreen({ route, navigation }) {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    // hide bottom nav
    React.useEffect(() => {
        navigation.getParent()?.setOptions({ tabBarStyle: { display: "none" }});
        return () => navigation.getParent()?.setOptions({ tabBarStyle: styles.bottom_action_goback });
    }, [navigation]);

    return (
        <View style={styles.container}>
            <Text style={styles.text}>
            In Quick Match, you will voice call or video call with 
            a stranger who is: {"\n"}{"\n"}
            1) learning your native language, {"\n"}
            2) learning the same language as you are, or {"\n"}
            3) is a native speaker in the language you are learning.
            {"\n"}{"\n"}
            You will have 5 minutes to talk, but if you and your 
            partner both choose to add time, your talk can be extended for as long as you want.
            {"\n"}{"\n"}
            Remember to relax and have fun!
            </Text>
            <View style={styles.toggle_container}>
                <Text style={styles.toggle_text}> Enable Video </Text>
                <Switch style={styles.toggle}
                trackColor={{ false: "#767577", true: "#34c759" }}
                ios_backgroundColor={Colors.lighest_purplegrey}
                onValueChange={toggleSwitch}
                value={isEnabled}
                />
            </View>
            <TouchableOpacity style={styles.quickmatch_button} onPress={() => {
                if (isEnabled) {
                    navigation.navigate("QuickMatchedVideo");
                } else {
                    navigation.navigate("QuickMatchedNoVideo");
                }
                }}>
                <Text style={styles.button_text}>FIND MATCH</Text>
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
    toggle_container: {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderTopWidth: 1,
        borderColor: Colors.lavender,
    },
    toggle_text: {
        fontSize: 15,
        color: Colors.purplegrey,
        marginLeft: 20,
    },
    toggle: {
        margin: 7,
        marginRight: 20,
    },
    quickmatch_button: {
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        backgroundColor: Colors.lighter_purple,
        borderRadius: 40,
        width: 160,
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

    // to bring back the bottom nav bar on the previous page
    bottom_action_goback: {
        backgroundColor: Colors.background,
        // height: 90,
        // paddingTop: 10,
        borderTopColor: Colors.lavender,
        borderTopWidth: 1,
        // shadowColor: Colors.purplegrey,
        // shadowOpacity: 0.3,
        // shadowRadius: 3,
        // shadowOffset: { height: -5 },
    },
});