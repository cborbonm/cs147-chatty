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
  
  export default function NewQuestion( {navigation, prompt} ) {
    return (
        <Pressable // press whole row
            onPress={ () => console.log("pressed prompt") /*navigation.navigate("SongDetail", { question: question })(/) */ } 
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
  