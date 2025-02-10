"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import { cn } from "@/lib/utils"

interface Question {
  id: number
  text: string
  options: string[]
  correctAnswer: number
  timeLimit: number // in seconds
}

const questions: Question[] = [
  {
    id: 1,
    text: "What's your expertise?",
    options: ["Data Analyst", "Arts & Culture", "IT Infrastructure", "MySQL Admin"],
    correctAnswer: 0,
    timeLimit: 30,
  },
  // Add more questions here
]

export default function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [isAnswered, setIsAnswered] = useState(false)
  const [timeLeft, setTimeLeft] = useState(questions[0].timeLimit)

  useEffect(() => {
    if (timeLeft > 0 && !isAnswered) {
      const timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1)
      }, 1000)
      return () => clearInterval(timer)
    } else if (timeLeft === 0 && !isAnswered) {
      setIsAnswered(true)
    }
  }, [timeLeft, isAnswered])

  const handleAnswerClick = (index: number) => {
    if (isAnswered) return
    setSelectedAnswer(index)
    setIsAnswered(true)
  }

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1)
      setSelectedAnswer(null)
      setIsAnswered(false)
      setTimeLeft(questions[currentQuestion + 1].timeLimit)
    }
  }

  const getAnswerStyle = (index: number) => {
    if (!isAnswered || selectedAnswer !== index) return ""
    return index === questions[currentQuestion].correctAnswer ? "bg-green-500" : "bg-red-500"
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-lg p-6">
        <div className="mb-8">
          <Button variant="ghost" size="icon" className="mb-4">
            <ArrowLeft className="h-6 w-6" />
          </Button>
          <h1 className="text-2xl font-semibold mb-2">{questions[currentQuestion].text}</h1>
          <p className="text-gray-500">Answer and get points</p>
          <div className="mt-4 flex items-center justify-between">
            <p className="text-sm text-gray-600">
              Step {currentQuestion + 1} of {questions.length}
            </p>
            <p className="text-sm font-medium">Time left: {timeLeft}s</p>
          </div>
          <div className="w-full h-1 bg-gray-100 rounded-full mt-2">
            <div
              className="h-1 bg-green-500 rounded-full transition-all duration-300"
              style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
            />
          </div>
        </div>

        <div className="space-y-3">
          {questions[currentQuestion].options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswerClick(index)}
              disabled={isAnswered && selectedAnswer !== index}
              className={cn(
                "w-full p-4 rounded-xl border text-left transition-all duration-200",
                "hover:bg-gray-50 disabled:hover:bg-white",
                selectedAnswer === index && getAnswerStyle(index),
                selectedAnswer === index && "text-white",
                "flex items-center gap-3",
              )}
            >
              <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center shrink-0">
                {/* Add icons here if needed */}
              </div>
              {option}
            </button>
          ))}
        </div>

        <Button
          className="w-full mt-6 bg-gray-900 text-white hover:bg-gray-800"
          onClick={handleNext}
          disabled={!isAnswered}
        >
          Next
        </Button>
      </div>
    </div>
  )
}

