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

import NewQuestionPrompt from "./NewQuestionPrompt";

export default function NewQuestion( {navigation} ) {
  return (
    <View style={styles.container}>
        <View style={styles.subContainer}> 
          <Text style={styles.questionTopic}>Language</Text>
          <View style={styles.questionsDiv}>
            <NewQuestionPrompt prompt="How do you say this?" />
            <View style={styles.divider}/>
            <NewQuestionPrompt prompt="What does this mean?" />
            <View style={styles.divider}/>
            <NewQuestionPrompt prompt="Does this sound natural?" />
            <View style={styles.divider}/>
            <NewQuestionPrompt prompt="What's the difference between...?" />
            <View style={styles.divider}/>
            <NewQuestionPrompt prompt="Can you use ... in a sentence?" />
          </View>
          <Text style={styles.questionTopic}>Speaking</Text>
          <View style={styles.questionsDiv}>
            <NewQuestionPrompt prompt="How's my pronounciation?" />
            <View style={styles.divider}/>
            <NewQuestionPrompt prompt="How do you pronounce...?" />
          </View>
          <Text style={styles.questionTopic}>Culture</Text>
          <View style={styles.questionsDiv}>
            <NewQuestionPrompt prompt="What should I say when...?" />
            <View style={styles.divider}/>
            <NewQuestionPrompt prompt="What should I do when...?" />
            <View style={styles.divider}/>
            <NewQuestionPrompt prompt="Is it acceptable to do this?" />
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
    alignItems: "center",
    justifyContent: "center",
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
  },
  divider: {
    width: "95%",
    height: 1,
    backgroundColor: Colors.lavender,
  },
});
