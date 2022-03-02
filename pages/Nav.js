import {
    StyleSheet,
    Text,
    View,
    Image,
    Dimensions,
    Pressable,
} from 'react-native';
import Colors from "../Themes/colors";
import { Ionicons } from '@expo/vector-icons';

export function Nav({ name, question, timestamp}) {
    return (
      <View>
        <Text>Nav</Text>
      </View>
    );
  }
  
export default Nav;

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.chatty,
        justifyContent: 'center',
        flex: 1,
    },
});