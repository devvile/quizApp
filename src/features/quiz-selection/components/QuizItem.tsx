
// components/quiz-selection/BackButton.ts// components/quiz-selection/QuizItem.tsx
import { Checkbox } from "@/components/ui/checkbox"
import { Quiz } from "@/types/quiz"

interface QuizItemProps {
  quiz: Quiz
  isSelected: boolean
  onToggle: (id: string) => void
}

export function QuizItem({ quiz, isSelected, onToggle }: QuizItemProps) {
  return (
    <div className="flex items-center space-x-4 border rounded-lg p-4">
      <Checkbox
        id={quiz.id}
        checked={isSelected}
        onCheckedChange={() => onToggle(quiz.id)}
      />
      <div className="flex-1 space-y-1">
        <label
          htmlFor={quiz.id}
          className="text-lg font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
        >
          {quiz.title}
        </label>
        <p className="text-sm text-muted-foreground">
          {quiz.questionsCount} questions · {quiz.estimatedTime} · {quiz.difficulty}
        </p>
      </div>
    </div>
  )
}