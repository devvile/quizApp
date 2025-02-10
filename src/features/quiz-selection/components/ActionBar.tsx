import { Button } from "@/components/ui/button"

interface ActionBarProps {
  selectedCount: number
  onShowRules: () => void
  onStartQuiz: () => void
}

export function ActionBar({ selectedCount, onShowRules, onStartQuiz }: ActionBarProps) {
  return (
    <div className="sticky bottom-0 border-t bg-background/80 backdrop-blur-sm">
      <div className="max-w-2xl mx-auto p-4 flex gap-4">
        <Button variant="outline" className="flex-1" onClick={onShowRules}>
          Rules
        </Button>
        <Button className="flex-1" disabled={selectedCount === 0} onClick={onStartQuiz}>
          Start Quiz {selectedCount > 0 && `(${selectedCount})`}
        </Button>
      </div>
    </div>
  )
}