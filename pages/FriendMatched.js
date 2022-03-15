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
    Modal,
} from 'react-native';

import Colors from "../Themes/colors";
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';

const windowWidth = Dimensions.get('window').width;

export default function FriendMatched({ route, navigation }) {
    const [modalVisible, setModalVisible] = useState(false);

    // hide bottom nav
    React.useEffect(() => {
        navigation.getParent()?.setOptions({ tabBarStyle: { display: "none" }});
        return () => navigation.getParent()?.setOptions({ tabBarStyle: styles.bottom_action_goback });
    }, [navigation]);

    return (
      <View style={styles.container}>
        <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.modalHeader}>
                <Text style={styles.modalText}>You have a match!</Text>
            </View>
            <Image source={require("../assets/Photos/anna.jpeg")} style={styles.avatar} />
            <Text style={styles.name}>Anna</Text>
            <View style={styles.textRow}>
                <Text>Learning:</Text>
                <Text>English (US)</Text>
            </View>
            <View style={styles.bar}><View style={styles.progressBar}></View></View>
            <View style={styles.textRow}>
                <Text>Native:</Text>
                <Text>French (Parisian)</Text>
            </View>
            <View style={styles.bar2}></View>
            <View style={styles.buttons}>
                <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => {
                    setModalVisible(!modalVisible);
                    navigation.navigate("Match");}}>
                <Text style={styles.textStyle}>CANCEL</Text>
                </Pressable>
                <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => {
                    setModalVisible(!modalVisible);
                    navigation.navigate("Match");
                    navigation.navigate("Chat");}}>
                <Text style={styles.textStyle}>START CHATTING</Text>
                </Pressable>
            </View>
          </View>
        </View>
      </Modal>
      <Pressable style={[styles.button, styles.buttonOpen]} onPress={() => setModalVisible(true)}>
        <Text style={styles.textStyle}>SHOW MATCH</Text>
      </Pressable>
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.lightest_purplegrey,
        opacity: 0.75,
        display: "flex",
        flex: 1,
        alignItems: 'center',
    },
    modalHeader: {
        width: '100%',
        borderBottomWidth: 1,
        borderBottomColor: Colors.lavender,
        marginBottom: 15,
        paddingTop: 20,
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
        fontSize: 20,
    },
    name: {
        fontSize: 30,
        fontFamily: "Lato-Bold",
        fontWeight: '600',
        color: Colors.chatty,
        margin: 15,
    },
    textRow: {
        display: 'flex',
        flexDirection: 'row',
        width: 225,
        justifyContent: 'space-between',
        marginTop: 10,
    },
    bar: {
        display: 'flex',
        height: 5,
        width: 225,
        backgroundColor: Colors.lightest_purplegrey,
        opacity: 0.70,
        margin: 7,
        borderRadius: 10,
    },
    progressBar: {
        display: 'flex',
        height: 5,
        width: 75,
        backgroundColor: Colors.yellow,
        borderRadius: 10,
    },
    bar2: {
        display: 'flex',
        height: 5,
        width: 225,
        backgroundColor: Colors.blue,
        margin: 7,
        borderRadius: 10,
    },
    modalView: {
        margin: 20,
        marginTop: 200,
        backgroundColor: Colors.background,
        borderRadius: 20,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
        alignItems: 'center',
    },
    buttonOpen: {
        backgroundColor: Colors.chatty,
        width: '50%',
        marginTop: 300,
    },
    buttonClose: {
        backgroundColor: Colors.lighter_purple,
        margin: 10,
    },
    buttons: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 10,
    },
    textStyle: {
        color: 'white',
        margin: 2,
    },
    avatar: {
        width: 120,
        height: 120,
        borderRadius: 99999,
    }
});