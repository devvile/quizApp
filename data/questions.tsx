export interface Question {
  id: number
  text: string
  options: string[]
  correctAnswer: number
  timeLimit: number
}


export const questions: Question[] = [
    {
      id: 1,
      text: "What's your expertise?",
      options: ["Data Analyst", "Arts & Culture", "IT Infrastructure", "MySQL Admin"],
      correctAnswer: 0,
      timeLimit: 30,
    },
  ]