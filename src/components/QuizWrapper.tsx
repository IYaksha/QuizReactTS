import React, { useState, useEffect } from "react";
import useGetQuizQuestions from "../remoteHooks/useGetQuizQuestions";
import QuizQuestions from "./QuizQuestions";

type Props = {
  children?: React.ReactNode;
};

const QuizWrapper: React.FC<Props> = (props: Props) => {
  const { loading, quizQuestions } = useGetQuizQuestions();
  const [currentQuestionNumber, setCurrentQuestionNumber] = useState(-1);
  useEffect(() => {
    if (!loading) {
      setCurrentQuestionNumber(0);
    }
  }, [loading]);
  return (
    <div>
      {loading || currentQuestionNumber === -1 ? (
        <div>Loading Quiz</div>
      ) : (
        <QuizQuestions
          quizQuestions={quizQuestions}
          currentQuestionNumber={currentQuestionNumber}
          setCurrentQuestionNumber={setCurrentQuestionNumber}
        />
      )}
    </div>
  );
};

export default QuizWrapper;
