import { useState } from "react";
import Questions from "./data";
import SingleQuestion from "./components/singleQuestion";

const App = () => {
  const [questions, setQuestions] = useState(Questions);

  return <main>
    <article className="container">
      {questions.map((question) => {
        return <SingleQuestion key={question.id} {...question} />
      })}
    </article>
  </main>
};
export default App;
