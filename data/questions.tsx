export interface Question {
  id: number
  text: string
  options: string[]
  correctAnswer: number
}


export const questions: Question[] = [
  {
    id: 1,
    text: "What is the primary function of React's useEffect hook?",
    options: [
      "To handle side effects in components",
      "To create new components",
      "To style components",
      "To handle routing"
    ],
    correctAnswer: 0
  },
  {
    id: 2,
    text: "What is JSX in React?",
    options: [
      "A JavaScript testing framework",
      "A syntax extension for JavaScript that allows HTML-like code",
      "A new programming language",
      "A database query language"
    ],
    correctAnswer: 1
  },
  {
    id: 3,
    text: "Which hook is used for managing local state in React components?",
    options: [
      "useLocal",
      "useStatus",
      "useState",
      "useState()"
    ],
    correctAnswer: 2
  },
  {
    id: 4,
    text: "What is the Virtual DOM in React?",
    options: [
      "A physical copy of the browser's DOM",
      "A lightweight copy of the actual DOM in memory",
      "A new web browser",
      "A JavaScript engine"
    ],
    correctAnswer: 1
  },
  {
    id: 5,
    text: "How do you pass data from parent to child component?",
    options: [
      "Using setState",
      "Using props",
      "Using useEffect",
      "Using context"
    ],
    correctAnswer: 1
  },
  {
    id: 6,
    text: "What is the purpose of React.memo()?",
    options: [
      "To memorize React syntax",
      "To optimize performance by preventing unnecessary re-renders",
      "To store data permanently",
      "To create memoization functions"
    ],
    correctAnswer: 1
  },
  {
    id: 7,
    text: "What is the correct way to update state in React?",
    options: [
      "Directly modifying the state variable",
      "Using the setState function from useState",
      "Using XML",
      "Using async/await"
    ],
    correctAnswer: 1
  },
  {
    id: 8,
    text: "What is React Context used for?",
    options: [
      "Styling components",
      "Routing",
      "Passing data through component tree without props",
      "Testing components"
    ],
    correctAnswer: 2
  },
  {
    id: 9,
    text: "Which lifecycle method is called after a component renders?",
    options: [
      "componentDidMount",
      "componentWillMount",
      "componentWillRender",
      "componentDidRender"
    ],
    correctAnswer: 0
  },
  {
    id: 10,
    text: "What is the purpose of useRef hook?",
    options: [
      "To create references to DOM elements",
      "To manage component state",
      "To handle routing",
      "To style components"
    ],
    correctAnswer: 0
  },
  {
    id: 11,
    text: "What is the key prop in React used for?",
    options: [
      "Styling elements",
      "Authentication",
      "Uniquely identifying elements in lists",
      "Creating routes"
    ],
    correctAnswer: 2
  },
  {
    id: 12,
    text: "Which hook is used for data fetching in React?",
    options: [
      "useFetch",
      "useEffect",
      "useData",
      "useAPI"
    ],
    correctAnswer: 1
  },
  {
    id: 13,
    text: "What is a controlled component in React?",
    options: [
      "A component with its own state",
      "A component controlled by Redux",
      "A form element controlled by React state",
      "A component with routing"
    ],
    correctAnswer: 2
  },
  {
    id: 14,
    text: "How do you handle forms in React?",
    options: [
      "Using only HTML form elements",
      "Using controlled components with state",
      "Using only uncontrolled components",
      "Forms are not supported in React"
    ],
    correctAnswer: 1
  },
  {
    id: 15,
    text: "What is the purpose of useCallback hook?",
    options: [
      "To create new components",
      "To memoize functions",
      "To handle routing",
      "To manage state"
    ],
    correctAnswer: 1
  },
  {
    id: 16,
    text: "What is prop drilling in React?",
    options: [
      "A new feature in React 18",
      "Passing props through multiple levels of components",
      "Creating new props",
      "A testing technique"
    ],
    correctAnswer: 1
  },
  {
    id: 17,
    text: "What is the StrictMode in React?",
    options: [
      "A tool for highlighting potential problems",
      "A way to write strict TypeScript",
      "A production mode",
      "A testing framework"
    ],
    correctAnswer: 0
  },
  {
    id: 18,
    text: "How do you optimize React performance?",
    options: [
      "By using more components",
      "Using React.memo and useMemo for expensive calculations",
      "By removing all hooks",
      "By using more state"
    ],
    correctAnswer: 1
  },
  {
    id: 19,
    text: "What is the purpose of useLayoutEffect?",
    options: [
      "To handle routing",
      "To manage state",
      "To synchronously run effects before browser paint",
      "To style components"
    ],
    correctAnswer: 2
  },
  {
    id: 20,
    text: "What is the difference between state and props?",
    options: [
      "They are the same thing",
      "Props are mutable, state is immutable",
      "State is passed to components, props are internal",
      "Props are read-only, state can be updated"
    ],
    correctAnswer: 3
  }
]