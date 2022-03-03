import { 
  StyleSheet, 
  Text, 
  SafeAreaView, 
  Pressable, 
  Image, 
  View, 
  FlatList } 
from "react-native";
import Colors from "../Themes/colors";

export default function NewQuestion( {navigation} ) {
  return (
    <View style={styles.container}>
        <View style={styles.subContainer}> 
          <Text style={styles.questionTopic}>Language</Text>
          <View style={styles.questionsDiv}>
            <Text style={styles.question}>How do you say this?</Text>
            <Text style={styles.question}>What does this mean?</Text>
            <Text style={styles.question}>Does this sound natural?</Text>
            <Text style={styles.question}>What's the difference between...?</Text>
            <Text style={styles.question}>Can you use ... in a sentence?</Text>
          </View>
          <Text style={styles.questionTopic}>Speaking</Text>
          <View style={styles.questionsDiv}>
            <Text style={styles.question}>How's my pronounciation?</Text>
            <Text style={styles.question}>How do you pronounce...?</Text>
          </View>
          <Text style={styles.questionTopic}>Culture</Text>
          <View style={styles.questionsDiv}>
            <Text style={styles.question}>What should I say when...?</Text>
            <Text style={styles.question}>What should I do when...?</Text>
            <Text style={styles.question}>Is it acceptable to do this?</Text>
          </View>
        </View>
        
        <Pressable 
          onPress={ () => console.log("writing my own question") }
          style={({ pressed }) => [
            { opacity: pressed ? 0.5 : 1.0 }, styles.freeform
          ]}
        >
          <Text style={styles.writeyourown}>Or write your own!</Text>
        </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.background,
    display: "flex",
    flex: 1,
  },
  subContainer: {
    display: "flex",
  },
  questionTopic: {
    fontSize: 15,
    textTransform: 'uppercase',
    color: Colors.purplegrey,
    margin: 15,
    display: "flex",
  },
  questionsDiv: {
    backgroundColor: 'white',
    borderColor: Colors.lavender,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    display: "flex",
  }, 
  question: {
    padding: 15,
    fontSize: 16,
    display: "flex",
  },
  freeform: {
    display: "flex",
    alignSelf: 'center',
    backgroundColor: Colors.lighter_purple,
    margin: 20,
    borderRadius: 50,
  },
  writeyourown: {
    color: 'white',
    padding: 10,
    fontSize: 15,
    fontWeight: '500',
  }
});
