"use client"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { QuizHeader } from "./QuizHeader"
import { QuizOption } from "./QuizOption"
import { questions } from "../../../data/questions"
import { quizConfig } from "../../../config"

export default function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [isAnswered, setIsAnswered] = useState(false)
  const [timeLeft, setTimeLeft] = useState(quizConfig.timePerQuestion)

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
      setTimeLeft(quizConfig.timePerQuestion)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-lg p-6">
        <QuizHeader
          questionText={questions[currentQuestion].text}
          currentQuestion={currentQuestion}
          totalQuestions={questions.length}
          timeLeft={timeLeft}
        />

        <div className="space-y-3">
          {questions[currentQuestion].options.map((option, index) => (
            <QuizOption
              key={index}
              option={option}
              index={index}
              isSelected={selectedAnswer === index}
              isAnswered={isAnswered}
              isCorrect={index === questions[currentQuestion].correctAnswer}
              onClick={() => handleAnswerClick(index)}
            />
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