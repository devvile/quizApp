"use client"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ProgressBar } from "./ProgressBar"

interface QuizHeaderProps {
  questionText: string
  currentQuestion: number
  totalQuestions: number
  timeLeft: number
}

export function QuizHeader({ questionText, currentQuestion, totalQuestions, timeLeft }: QuizHeaderProps) {
  return (
    <div className="mb-8">
      <Button variant="ghost" size="icon" className="mb-4">
        <ArrowLeft className="h-6 w-6" />
      </Button>
      <h1 className="text-2xl font-semibold mb-2">{questionText}</h1>
      <div className="mt-4 flex items-center justify-between">
        <p className="text-sm text-gray-600">
          Step {currentQuestion + 1} of {totalQuestions}
        </p>
        <p className="text-sm font-medium">Time left: {timeLeft}s</p>
      </div>
      <ProgressBar progress={(currentQuestion + 1) / totalQuestions * 100} />
    </div>
  )
}