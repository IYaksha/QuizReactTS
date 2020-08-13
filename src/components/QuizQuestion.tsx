import React from "react";
import { Question } from "../remoteHooks/useGetQuizQuestions";

type QuizQuestionProps = {
  currentQuestionNumber: number;
  setCurrentQuestionNumber: React.Dispatch<React.SetStateAction<number>>;
  currentQuestion: Question<string>;
  children?: React.ReactNode;
};

const QuizQuestion: React.FC<QuizQuestionProps> = ({
  currentQuestionNumber,
  currentQuestion,
  setCurrentQuestionNumber,
}: QuizQuestionProps) => {
  return (
    <div>
      <span dangerouslySetInnerHTML={{ __html: currentQuestion.category }} /> ={" "}
      <span dangerouslySetInnerHTML={{ __html: currentQuestion.difficulty }} />{" "}
      difficulty
      <div dangerouslySetInnerHTML={{ __html: currentQuestion.question }} />
      {currentQuestion.allAnswers.map((answer) => (
        <div key={answer} dangerouslySetInnerHTML={{ __html: answer }} />
      ))}
    </div>
  );
};

export default QuizQuestion;
