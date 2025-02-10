"use client"
import { Button } from "@/components/ui/button"
import { ScoreDisplay } from "./components/ScoreDisplay"
import { Layout } from "@/components/shared/Layout"

interface ScoreBoardProps {
  correctAnswers: number
  totalQuestions: number
  onTryAgain?: () => void
}

export default function ScoreBoard({
  correctAnswers = 0,
  totalQuestions = 6,
  onTryAgain
}: ScoreBoardProps) {
  const percentage = Math.round((correctAnswers / totalQuestions) * 100)

  return (
    <Layout>
        <div className="w-full h-full max-w-md bg-white rounded-3xl shadow-lg mt-8 p-6">
        <div className="w-full bg-white p-8 text-center">
          <ScoreDisplay
            correctAnswers={correctAnswers}
            totalQuestions={totalQuestions}
            percentage={percentage}
          />
          <Button
            onClick={onTryAgain}
            className="w-full bg-gray-900 text-white hover:bg-gray-800 h-12 text-lg"
          >
            Try Again
          </Button>
        </div>
      </div>
    </Layout>
  )
}