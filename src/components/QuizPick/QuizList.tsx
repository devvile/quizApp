import { ScrollArea } from "@/components/ui/scroll-area"
import { Quiz } from "@/types/quiz"
import { QuizItem } from "./QuizItem"

interface QuizListProps {
  quizzes: Quiz[]
  selectedQuizzes: string[]
  onQuizToggle: (id: string) => void
}

export function QuizList({ quizzes, selectedQuizzes, onQuizToggle }: QuizListProps) {
  return (
    <ScrollArea className="h-[calc(100vh-300px)]">
      <div className="grid gap-4 pb-24">
        {quizzes.map((quiz) => (
          <QuizItem
            key={quiz.id}
            quiz={quiz}
            isSelected={selectedQuizzes.includes(quiz.id)}
            onToggle={onQuizToggle}
          />
        ))}
      </div>
    </ScrollArea>
  )
}