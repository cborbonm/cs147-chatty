import React, { useState } from 'react';

import {
    StyleSheet,
    Text,
    View,
    Pressable,
    FlatList,
    Dimensions,
    TextInput,
    Image,
} from 'react-native';
import Colors from "../Themes/colors";
import Constants from 'expo-constants';
import { MaterialCommunityIcons } from '@expo/vector-icons';


import { FontAwesome } from '@expo/vector-icons';

const windowWidth = Dimensions.get('window').width;

export function Profile({ navigation }) {
    const [view, setView] = useState('about');
    const [introductionText, setIntroductionText] = useState('');
    const [talkingPointsText, setTalkingPointsText] = useState('');


    return (
        <>
        <View style={styles.container}>
            <View style={styles.profile}>
                <View style={styles.left}>
                     <FontAwesome name="user-circle" size={100} color={Colors.chatty} />
                </View>
                <View stlye={styles.right}>
                    <View style={styles.profileInfo}>
                        <Text style={styles.name}>Jane</Text>
                        <Text style={styles.username}>@jane10239842</Text>
                    </View>

                    <Image source = {require("../assets/Icons/learning-native.png")} style={styles.learnnative}/>
                </View>
            </View>


            <View>
                {/* About + Logs clickable buttons  */}
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Pressable onPress={() => setView('about')}>
                        <Text>About</Text>
                    </Pressable>
                    <Pressable onPress={() => setView('logs')}>
                        <Text>Logs</Text>
                    </Pressable>
                </View>
            </View>

            {/* Content based on which one is selected */}
            {view === 'about' ? (
            <View>
                <Text>Introduction</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={setIntroductionText}
                    value={introductionText}
                    placeholder="Nothing yet"
                />
                <Text>Talking Points</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={setTalkingPointsText}
                    value={talkingPointsText}
                    placeholder="Nothing yet"
                />

                <Text>Activity</Text>
                <View style={styles.activity}>
                    {/* ? Image from Figma */}
                    {/* Lightbulb Image from Figma */}
                    {/* Blue people Image from Figma */}
                    <Image source = {require("../assets/Icons/activitybar.png")} style={styles.learnnative}/>

                </View>
            </View>
            ) : (
                <View style={styles.logs}>
                    {/* Logs image from Figma */}
                    <Text>Logs</Text>
                    <Image source = {require("../assets/Icons/logsicon.png")} style={styles.logimage}/>

                </View>
            )}
            </View>

        </>
    );
}
  
export default Profile;

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.background,
        //justifyContent: 'center',
        flex: 1,
        overflow: 'hidden',
        padding: 8,
    },
    profile: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 30,
        marginBottom: 24,
    },
    left: {
        flex: 1,
    },
    right: {
        flex: 9,
        paddingLeft: 10,
    },
    profileInfo: {
        flexDirection: 'row',
        alignItems: "baseline",
    },
    name: {
        fontSize: 28,
        fontFamily: "Lato-Bold",
        paddingRight: 10,
    }, 
    username: {
        color: Colors.purplegrey,
        fontSize: 16,
    },
    learnnative: {
        flex: 1,
        width: 200,
        height: 200,
        resizeMode: 'contain'
    },

    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        borderColor: Colors.lighter_purplegrey,
        padding: 10,
        borderRadius: 25,
    },

    activity: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    logs: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    logimage: {
        width: null,
        resizeMode: 'contain',
        height: 220
    }
        


    // header_style: {
    //     flexDirection: 'row',
    //     alignItems: 'baseline',
    //     justifyContent: 'space-between',
    //     width: windowWidth,
    //     height: 45,
    //     borderBottomWidth: 1,
    //     borderColor: Colors.lavender,
    //     backgroundColor: Colors.background,
    //     paddingHorizontal: 10,
    //     paddingTop: 4,
    // },

    

    // logo: {
    //     height: 36,
    //     width: undefined,
    //     aspectRatio: 364/98,
    // },
});
