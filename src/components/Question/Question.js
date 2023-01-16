import React from "react"

import "./Question.css"

const Question = ({ question, options }) => {
    return (
        <div>
            <p>{question}</p>
            {options.map((item) => (
                <button> {item} </button>
            ))}
        </div>
    )
}

export default Question
