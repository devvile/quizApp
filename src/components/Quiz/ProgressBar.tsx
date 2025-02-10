interface ProgressBarProps {
    progress: number
  }
  
  export function ProgressBar({ progress }: ProgressBarProps) {
    return (
      <div className="w-full h-1 bg-gray-100 rounded-full mt-2">
        <div
          className="h-1 bg-green-500 rounded-full transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>
    )
  }
  