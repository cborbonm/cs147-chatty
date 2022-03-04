import { 
    StyleSheet, 
    Text, 
    SafeAreaView, 
    Pressable, 
    Image, 
    View, 
    FlatList } 
  from "react-native";
import colors from "../Themes/colors";
import Colors from "../Themes/colors";
  
export default function NewQuestionPrompt( {navigation, prompt} ) {
    return (
        <Pressable // press whole row
            onPress={ () => navigation.navigate("NewQuestion", { prompt: prompt }) } 
            style={({ pressed }) => [
            {
                backgroundColor: pressed ? Colors.pressed_background : "white",
            },
            styles.container
        ]}>
            <Text style={styles.question}>{prompt}</Text>
        </Pressable>
    );
}
  
const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "row",
        width: "100%",
    },
    question: {
        padding: 15,
        fontSize: 16,
        display: "flex",
        justifyContent: "flex-start",
    },
});
  