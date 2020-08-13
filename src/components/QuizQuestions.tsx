import React from "react";
import { Question } from "../remoteHooks/useGetQuizQuestions";
import QuizQuestion from "./QuizQuestion";

type Props = {
  quizQuestions: Question<string>[];
  currentQuestionNumber: number;
  setCurrentQuestionNumber: React.Dispatch<React.SetStateAction<number>>;
  children?: React.ReactNode;
};

const QuizQuestions: React.FC<Props> = ({
  quizQuestions,
  currentQuestionNumber,
  setCurrentQuestionNumber,
}: Props) => {
  return (
    <div>
      <QuizQuestion
        currentQuestion={quizQuestions[currentQuestionNumber]}
        currentQuestionNumber={currentQuestionNumber}
        setCurrentQuestionNumber={setCurrentQuestionNumber}
      />
    </div>
  );
};

export default QuizQuestions;
