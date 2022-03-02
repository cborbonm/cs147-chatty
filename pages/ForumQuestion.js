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

export function ForumQuestion({ name, question, timestamp}) {
    return (
      <View>
        <Text>Forum</Text>
      </View>
    );
  }
  
export default ForumQuestion;

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.background,
        justifyContent: 'center',
        flex: 1,
    },
});