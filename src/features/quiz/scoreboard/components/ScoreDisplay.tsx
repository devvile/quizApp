import { CircularProgress } from "./CircularProgress"

interface ScoreDisplayProps {
    correctAnswers: number
    totalQuestions: number
    percentage: number
  }
  
  export function ScoreDisplay({ correctAnswers, totalQuestions, percentage }: ScoreDisplayProps) {
    return (
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">
          {correctAnswers}/{totalQuestions}
        </h1>
        <CircularProgress percentage={percentage} />
        <p className="text-gray-500 mb-8">
          {percentage >= 70 
            ? "Great job! You've mastered this quiz!" 
            : "Keep practicing to improve your score!"}
        </p>
      </div>
    )
  }
  