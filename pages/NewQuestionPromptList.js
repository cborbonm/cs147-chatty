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

function NewQuestionPrompt( {navigation, prompt} ) {
  return (
      <Pressable // press whole row
          onPress={ () => navigation.navigate("NewQuestion", { prompt: prompt }) } 
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

export default function NewQuestionPromptList( {navigation} ) {
  // hide bottom nav
  React.useEffect(() => {
    navigation.getParent()?.setOptions({ tabBarStyle: { display: "none" }});
    return () => navigation.getParent()?.setOptions({ tabBarStyle: styles.bottom_action_goback });
}, [navigation]);

  return (
    <View style={styles.container}>
        <View style={styles.subContainer}> 
          <Text style={styles.questionTopic}>Language</Text>
          <View style={styles.questionsDiv}>
            <NewQuestionPrompt prompt="How do you say this?" navigation={navigation}/>
            <View style={styles.divider}/>
            <NewQuestionPrompt prompt="What does this mean?" navigation={navigation}/>
            <View style={styles.divider}/>
            <NewQuestionPrompt prompt="Does this sound natural?" navigation={navigation}/>
            <View style={styles.divider}/>
            <NewQuestionPrompt prompt="What's the difference between...?" navigation={navigation}/>
            <View style={styles.divider}/>
            <NewQuestionPrompt prompt="Can you use ... in a sentence?" navigation={navigation}/>
          </View>
          <Text style={styles.questionTopic}>Speaking</Text>
          <View style={styles.questionsDiv}>
            <NewQuestionPrompt prompt="How's my pronounciation?" navigation={navigation}/>
            <View style={styles.divider}/>
            <NewQuestionPrompt prompt="How do you pronounce...?" navigation={navigation}/>
          </View>
          <Text style={styles.questionTopic}>Culture</Text>
          <View style={styles.questionsDiv}>
            <NewQuestionPrompt prompt="What should I say when...?" navigation={navigation}/>
            <View style={styles.divider}/>
            <NewQuestionPrompt prompt="What should I do when...?" navigation={navigation}/>
            <View style={styles.divider}/>
            <NewQuestionPrompt prompt="Is it acceptable to do this?" navigation={navigation}/>
          </View>
        </View>

        <Pressable 
          onPress={ () => navigation.navigate("NewQuestion", { prompt: "" }) }
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
    fontSize: 16,
    fontWeight: '500',
  },
  divider: {
    width: "95%",
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
