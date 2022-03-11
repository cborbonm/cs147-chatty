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
            <FontAwesome name="user-circle" size={120} color={Colors.lighter_purple} />
            <Text style={styles.name}>Carolina</Text>
            <View style={styles.textRow}>
                <Text>Learning:</Text>
                <Text>English (American)</Text>
            </View>
            <View style={styles.bar}><View style={styles.progressBar}></View></View>
            <View style={styles.textRow}>
                <Text>Native:</Text>
                <Text>Spanish (Mexican)</Text>
            </View>
            <View style={styles.bar2}></View>
            <View style={styles.buttons}>
                <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => {
                    setModalVisible(!modalVisible);
                    navigation.navigate("Match");}}>
                <Text style={styles.textStyle}>Cancel</Text>
                </Pressable>
                <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => {
                    setModalVisible(!modalVisible);
                    navigation.navigate("Chat");}}>
                <Text style={styles.textStyle}>Start Messaging</Text>
                </Pressable>
            </View>
          </View>
        </View>
      </Modal>
      <Pressable style={[styles.button, styles.buttonOpen]} onPress={() => setModalVisible(true)}>
        <Text style={styles.textStyle}>Show Match</Text>
      </Pressable>
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.lighest_purplegrey,
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
        backgroundColor: Colors.lighest_purplegrey,
        opacity: 0.70,
        margin: 7,
        borderRadius: 10,
    },
    progressBar: {
        display: 'flex',
        height: 5,
        width: 75,
        backgroundColor: '#F1C423',
        borderRadius: 10,
    },
    bar2: {
        display: 'flex',
        height: 5,
        width: 225,
        backgroundColor: '#1D9BF0',
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
});