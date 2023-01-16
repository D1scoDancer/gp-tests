import React, { useState } from "react"

import Likert from "react-likert-scale"

const LikertScale = () => {
    const likertOptions = {
        question: "What is your opinion of the President’s performance?",
        responses: [
            { value: 1, text: "Abysmal" },
            { value: 2, text: "Poor" },
            { value: 3, text: "Average", checked: true },
            { value: 4, text: "Good" },
            { value: 5, text: "Excellent" },
        ],
        onChange: (val) => {
            console.log(val)
        },
        layout: "stacked",
    }
    return (
        <div>
            <Likert {...likertOptions} />
        </div>
    )
}

export default LikertScale
