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

  
    // function Header() {
    //     return (
    //         <View style={styles.header_style}>
    //             {/* working on adding settings icon */}
    //             <Image source = {require("../assets/Icons/chatty.png")} style={styles.logo}/>
    //         </View>
    //     );
    // }
    return (
        <>
        <View style={styles.container}>
            {/* <View style={styles.header}>
       
                <Image source = {require("../assets/Icons/chatty.png")} style={styles.logo}/>
        
                <Image source = {require("../assets/Icons/chatty-settings-icon.png")} style={styles.logo}/>
        
             </View> */}


            <View style={styles.profile}>
       
                {/* <Image source = {require("../assets/Icons/profilepic.png")} style={styles.learnnative}/>
                 */}
                <View style={styles.left}>
                     <FontAwesome name="user-circle" size={100} color={Colors.chatty} />
             </View>
                <View>
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

    //    // <>
    //         {/* <View style={styles.left}>
    //                 <FontAwesome name="user-circle" size={24} color={Colors.chatty} />
    //         </View>
    //         <View style={styles.container}>
    //             <Text style={styles.name}>Jane</Text>
    //             <Text style={styles.username}>@jane10239842</Text>
    //             <Text style={styles.fillins}>Introduction</Text>
    //             <Text style={styles.fillins}>Talking Points</Text>
    //             <Text style={styles.fillins}>Activity</Text>
    //         </View> */}
    //   //  </>
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

    header: {
        width: '100%',
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginBottom: 16,
        borderBottomColor: 'gray',
        paddingBottom: 8,
        borderBottomWidth: 2,
    },

    profile: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 100,
        marginBottom: 24,
    },
    profileInfo: {
        flexDirection: 'row',
    },

    learnnative: {
        flex: 1,
        width: 100,
        height: 100,
        resizeMode: 'contain'
    },
    name: {
        color: 'black',
       fontSize: 40,
    },
        
    username: {
        color: Colors.purplegrey,
        fontSize: 20,
    },

    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
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
