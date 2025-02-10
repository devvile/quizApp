export interface Quiz {
    id: string
    title: string
    questionsCount: number
    estimatedTime: string
    difficulty: string
  }

export const quizzes: Quiz[] = [
    {
        id: "1",
        title: "React Hooks Basics",
        questionsCount: 20,
        estimatedTime: "10 min",
        difficulty: "Beginner",
    }
]
