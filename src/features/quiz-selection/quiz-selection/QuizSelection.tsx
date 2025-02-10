"use client"
import { useState } from "react"
import { BackButton } from "./BackButton"
import { Header } from "./Header"
import { QuizList } from "./QuizList"
import { ActionBar } from "./ActionBar"
import { quizzes } from "../../../../data/quizzes"
import { Layout } from "../../../components/shared/Layout"

export default function QuizSelectionPage() {
  const [selectedQuizzes, setSelectedQuizzes] = useState<string[]>([])

  const handleQuizToggle = (quizId: string) => {
    setSelectedQuizzes((prev) => 
      prev.includes(quizId) 
        ? prev.filter((id) => id !== quizId) 
        : [...prev, quizId]
    )
  }

  return (
    <Layout>
      <div className="flex flex-col min-h-screen">
        <div className="flex-1">
          <div className="max-w-2xl mx-auto p-4 space-y-8">
            <div className="space-y-6">
              <BackButton />
              <Header />
            </div>
            <QuizList
              quizzes={quizzes}
              selectedQuizzes={selectedQuizzes}
              onQuizToggle={handleQuizToggle}
            />
          </div>
        </div>
        <ActionBar
          selectedCount={selectedQuizzes.length}
          onShowRules={() => console.log("Show rules")}
          onStartQuiz={() => console.log("Start quizzes:", selectedQuizzes)}
        />
      </div>
    </Layout>
  )
}