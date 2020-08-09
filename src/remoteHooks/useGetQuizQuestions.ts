import { useState, useEffect } from "react";
import { getQuizQuestions } from "../remoteMethods/quiz";

export type Question<T> = {
  category: T;
  difficulty: T;
  question: T;
  correctAnswer: T;
  incorrectAnswers: T[];
  allAnswers: T[];
};

type QuizState = {
  loading: Boolean;
  quizQuestions: Question<string>[];
};

const initialQuizState = (): QuizState => ({
  loading: true,
  quizQuestions: [],
});

const useGetQuizQuestions = () => {
  const [quizState, setQuizState] = useState<QuizState>(initialQuizState);

  useEffect(() => {
    setQuizState({ loading: true, quizQuestions: [] });
    getQuizQuestions().then((data) => {
      setQuizState({
        loading: false,
        quizQuestions: data.results.map((question: any) => ({
          ...question,
          allAnswers: [...question.incorrect_answers, question.correct_answer],
        })),
      });
    });
  }, []);
  console.log(quizState);
  return quizState;
};

export default useGetQuizQuestions;
