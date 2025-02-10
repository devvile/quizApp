interface CircularProgressProps {
    percentage: number
  }
  
  export function CircularProgress({ percentage }: CircularProgressProps) {
    return (
      <div className="relative w-32 h-32 mx-auto mb-6">
        <div className="absolute inset-0 rounded-full border-8 border-gray-100" />
        <svg className="absolute inset-0 transform -rotate-90" viewBox="0 0 100 100">
          <circle
            cx="50"
            cy="50"
            r="46"
            stroke="currentColor"
            strokeWidth="8"
            fill="none"
            className="text-green-500"
            strokeDasharray={`${percentage * 2.89}, 289`}
            style={{ strokeLinecap: "round" }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-2xl font-semibold">{percentage}%</span>
        </div>
      </div>
    )
  }