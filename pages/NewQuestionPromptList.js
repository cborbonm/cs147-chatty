import React from "react";
import { 
  StyleSheet, 
  Text, 
  SafeAreaView, 
  Pressable, 
  Image, 
  View, 
  FlatList 
} 
from "react-native";
import Colors from "../Themes/colors";

export default function NewQuestionPromptList( { route, navigation} ) {
  // hide bottom nav
  React.useEffect(() => {
    navigation.getParent()?.setOptions({ tabBarStyle: { display: "none" }});
    return () => navigation.getParent()?.setOptions({ tabBarStyle: styles.bottom_action_goback });
  }, [navigation]);

  const { addQuestion, addComment } = route.params;
  
  function NewQuestionPrompt( { prompt} ) {
    return (
        <Pressable // press whole row
            onPress={ () => navigation.navigate("NewQuestion", { prompt: prompt, addQuestion: addQuestion, addComment: addComment }) } 
            style={({ pressed }) => [
            {
                backgroundColor: pressed ? Colors.pressed_background : "white",
            },
            styles.question_container
        ]}>
            <Text style={styles.question}>{prompt}</Text>
        </Pressable>
    );
  } 

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
          onPress={ () => navigation.navigate("NewQuestion", { prompt: "" }) }
          style={({ pressed }) => [
            { opacity: pressed ? 0.5 : 1.0 }, styles.freeform
          ]}
        >
          <Text style={styles.writeyourown}>OR WRITE YOUR OWN</Text>
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
    color: Colors.lighter_purple,
    margin: 15,
    marginBottom: 5,
    marginTop: 30,
    display: "flex",
    letterSpacing: 2,
    fontFamily: 'Lato-Bold',
  },
  questionsDiv: {
    backgroundColor: 'white',
    borderColor: Colors.lavender,
    borderTopWidth: 1,
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
    paddingVertical: 10,
    paddingHorizontal: 30,
    fontSize: 16,
    fontWeight: '500',
  },
  divider: {
    width: "100%",
    height: 1,
    backgroundColor: Colors.lavender,
  },

  // individual question prompt styling
  question_container: {
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

  // to bring back the bottom nav bar on the previous page
  bottom_action_goback: {
    backgroundColor: Colors.background,
    // height: 90,
    // paddingTop: 10,
    borderTopColor: Colors.lavender,
    borderTopWidth: 1,
    // shadowColor: Colors.purplegrey,
    // shadowOpacity: 0.3,
    // shadowRadius: 3,
    // shadowOffset: { height: -5 },
  },
});
