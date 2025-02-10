"use client"
import { useParams } from "next/navigation"
import { Layout } from "@/components/shared/Layout"
import QuizSelection from "@/features/quiz-selection/QuizSelection"
import { quizzes } from "../../../data/quizzes"

export default function CategoryQuizzesPage() {
  const params = useParams()
  const categoryId = params.category as string
  
  const categoryQuizzes = quizzes.filter(quiz => 
    quiz.category === categoryId
  )

  return (
    <Layout>
      <QuizSelection quizzes={categoryQuizzes} />
    </Layout>
  )
}