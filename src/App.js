import "./App.css"
import React, { useState } from "react"

import Menu from "./components/Menu/Menu"
import Test from "./components/Test/Test"

function App() {
    const [testVisible, setTestVisible] = useState(false)

    const btnOnClickHandler = () => {
        setTestVisible(!testVisible)
    }

    return (
        <div className="App">
            {/* <Menu /> */}

            <button onClick={btnOnClickHandler}>Start test</button>
            {testVisible && (
                <div className="test-container">
                    <Test />
                </div>
            )}
        </div>
    )
}

export default App
