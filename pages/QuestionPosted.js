// a copy of Question.js in every way, except it has a different header in CustomNavigation.js

import Question from "./Question";

export function QuestionPosted({ route, navigation }) {
    return (
        <Question route={route} navigation={navigation}/>
    );
}
  
export default QuestionPosted;