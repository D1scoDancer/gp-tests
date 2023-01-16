import React, { useState, useEffect } from "react"

import Question from "../Question/Question"
import quizData from "../data"

const Test = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [state, setState] = useState({ question: "", options: [] })

    const loadQuizData = () => {
        setState((prevState) => ({
            ...prevState,
            question: quizData[currentQuestion].question,
            options: quizData[currentQuestion].options,
        }))
    }

    useEffect(() => {
        loadQuizData()
    })

    return (
        <div>
            <ol>
                {quizData.map((item) => (
                    <li>
                        <Question
                            question={item.question}
                            options={item.options}
                        />
                    </li>
                ))}
            </ol>
        </div>
    )
}

export default Test
