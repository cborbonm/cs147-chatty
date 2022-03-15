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
import { FontAwesome, Ionicons, AntDesign, MaterialCommunityIcons, SimpleLineIcons } from '@expo/vector-icons';


const windowWidth = Dimensions.get('window').width;

export function Profile({ navigation }) {
    const [view, setView] = useState('about');
    const [introductionText, setIntroductionText] = useState('');
    const [talkingPointsText, setTalkingPointsText] = useState('');


    return (
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
                    <View style={styles.textRow}>
                        <Text>Learning:</Text>
                        <Text>French (Parisian)</Text>
                    </View>
                    <View style={styles.bar}><View style={styles.progressBar} /></View>
                    <View style={styles.textRow}>
                        <Text>Native:</Text>
                        <Text>English (US)</Text>
                    </View>
                    <View style={styles.bar2} />
                </View>
            </View>


            <View>
                {/* About + Logs clickable buttons  */}
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Pressable style={[
                        {
                            borderBottomWidth: view === 'about' ? 3 : 1,
                            borderColor: view === 'about' ? Colors.chatty : Colors.lavender,
                        },
                        styles.tab
                        ]} 
                        onPress={() => setView('about')} 
                    >
                        <Text style={[
                            { color: view === 'about' ? Colors.chatty : Colors.lavender },
                            styles.title
                        ]}>
                            About
                        </Text>
                    </Pressable>
                    <Pressable style={[
                        { 
                            borderBottomWidth: view === 'logs' ? 3 : 1,
                            borderColor: view === 'logs' ? Colors.chatty : Colors.lavender,
                        },
                        styles.tab
                        ]} 
                        onPress={() => setView('logs')}
                    >
                        <Text style={[
                            { color: view === 'logs' ? Colors.chatty : Colors.lavender },
                            styles.title
                        ]}>
                            Logs
                        </Text>
                    </Pressable>
                    
                </View>
            </View>

            <View style={styles.profileContent}>
            {/* Content based on which one is selected */}
            {view === 'about' ? (
                <>
                <Text style={styles.subheading}>Introduction</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={setIntroductionText}
                    value={introductionText}
                    placeholder="Nothing yet"
                    multiline
                />
                <Text style={styles.subheading}>Talking Points</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={setTalkingPointsText}
                    value={talkingPointsText}
                    placeholder="Nothing yet"
                    multiline
                />

                <Text style={styles.subheading}>Activity</Text>
                <View style={styles.activity}>
                    <View style={[{paddingTop: 5}, styles.activityItem]}>
                        <AntDesign name="questioncircleo" size={40} color={Colors.red} />
                        <Text>1 asked</Text>
                    </View>
                    <View style={[{paddingTop: 2}, styles.activityItem]}>
                        <MaterialCommunityIcons name="lightbulb-on-outline" size={45} color={Colors.yellow} />
                        <Text>1 answered</Text>
                    </View>
                    <View style={styles.activityItem}>
                        <Ionicons name="people-outline" size={50} color={Colors.blue} />
                        <Text>0 friends</Text>
                    </View>
                    
                    
                </View>
                </>
            ) : (
                <View style={styles.logs}>
                    <SimpleLineIcons name="notebook" size={50} color={Colors.lighter_purplegrey} />
                    <Text style={styles.logsDescription}>When you match with people for calls or chats, you'll be able to take notes and see records here.</Text>
                </View>
            )}
            </View>
        </View>
    );
}
  
export default Profile;

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.background,
        //justifyContent: 'center',
        flex: 1,
        overflow: 'hidden',
    },
    profile: {
        flexDirection: 'row',
        paddingHorizontal: 45,
        paddingVertical: 30,
    },
    left: {
        flex: 1,
    },
    right: {
        flex: 9,
        paddingLeft: 0,
        alignItems: 'flex-start',
    },
    profileInfo: {
        flexDirection: 'row',
        alignItems: "baseline",
    },
    name: {
        fontSize: 24,
        fontFamily: "Lato-Bold",
        paddingRight: 10,
    }, 
    username: {
        color: Colors.purplegrey,
        fontSize: 12,
    },

    input: {
        borderWidth: 1,
        borderColor: Colors.lightest_purplegrey,
        borderRadius: 20,
        padding: 10,
        paddingTop: 10,
        marginTop: 10,
        marginBottom: 20,
    },

    activity: {
        borderWidth: 1,
        borderColor: Colors.lightest_purplegrey,
        borderRadius: 20,
        paddingVertical: 20,
        marginTop: 10,
        marginBottom: 20,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    activityItem: {
        flexDirection: 'column',
        height: 70,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    textRow: {
        display: 'flex',
        flexDirection: 'row',
        width: 200,
        justifyContent: 'space-between',
        marginTop: 10,
    },
    bar: {
        display: 'flex',
        height: 5,
        width: 200,
        backgroundColor: Colors.lightest_purplegrey,
        opacity: 0.70,
        borderRadius: 10,
        marginTop: 7,
    },
    progressBar: {
        display: 'flex',
        height: 5,
        width: 30,
        backgroundColor: Colors.red,
        borderRadius: 10,
    },
    bar2: {
        display: 'flex',
        height: 5,
        width: 200,
        backgroundColor: Colors.blue,
        borderRadius: 10,
        marginTop: 7,
    },
    tab: {
        paddingBottom: 10,
        flex: 1,
        alignItems: 'center',
    },
    title: {
        fontFamily: 'Lato-Bold',
        fontSize: 16,
    },
    subheading: {
        fontFamily: 'Lato-Bold',
        fontSize: 16,
        color: Colors.purplegrey,
    },
    profileContent: {
        paddingTop: 20,
        paddingHorizontal: 30,
    },
    logs: {
        height: '70%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    logsDescription: {
        marginTop: 10,
        color: Colors.lighter_purplegrey,
        fontSize: 14,
        textAlign: 'center',
        width: '60%',
    },
});
