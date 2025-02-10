import { cn } from "@/lib/utils"

interface QuizOptionProps {
  option: string
  index: number
  isSelected: boolean
  isAnswered: boolean
  isCorrect: boolean
  onClick: () => void
}

export function QuizOption({ option, index, isSelected, isAnswered, isCorrect, onClick }: QuizOptionProps) {
  const getAnswerStyle = () => {
    if (!isAnswered || !isSelected) return ""
    return isCorrect ? "bg-green-500" : "bg-red-500"
  }

  return (
    <button
      onClick={onClick}
      disabled={isAnswered && !isSelected}
      className={cn(
        "w-full p-4 rounded-xl border text-left transition-all duration-200",
        "hover:bg-gray-50 disabled:hover:bg-white",
        isSelected && getAnswerStyle(),
        isSelected && "text-white",
        "flex items-center gap-3"
      )}
    >
      <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center shrink-0" />
      {option}
    </button>
  )
}