import { cn } from "@/lib/utils"
import { Quiz } from "@/types/quiz"

interface QuizItemProps {
  quiz: Quiz
  isSelected: boolean
  onToggle: (id: string) => void
}

export function QuizItem({ quiz, isSelected, onToggle }: QuizItemProps) {
  return (
    <button
      onClick={() => onToggle(quiz.id)}
      className={cn(
        "w-full p-4 rounded-xl border text-left transition-all duration-200",
        "hover:bg-gray-50",
        isSelected && "bg-green-500 text-white border-green-500",
        "flex flex-col gap-2"
      )}
    >
      <span className="text-lg font-medium leading-none">
        {quiz.title}
      </span>
      <span className={cn(
        "text-sm",
        isSelected ? "text-white/90" : "text-muted-foreground"
      )}>
        {quiz.questionsCount} questions · {quiz.estimatedTime} · {quiz.difficulty}
      </span>
    </button>
  )
}