"use client"
import { useParams } from "next/navigation"
import Quiz from "@/features/quiz/Quiz"
import { questions } from "@/data/questions"

export default function QuizPage() {
  const params = useParams()
  const quizIds = (params.quizIds as string).split(',')
  
  // Filter questions for selected quizzes
  const quizQuestions = questions.filter(q => 
    quizIds.includes(q.quizId)
  )

  return <Quiz questions={quizQuestions} />
}