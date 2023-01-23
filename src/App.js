import "./App.css"
import React, { Component, useState } from "react"
import "bootstrap/dist/css/bootstrap.min.css"

import Menu from "./components/Menu/Menu"
import Test from "./components/Test/Test"
import NavDropDown from "./components/NavDropDown"
import { Container, Row, Col } from "react-bootstrap"
import { quizData, siteData } from "./data"
import TestCard from "./components/TestCard"

function App() {
    const [testVisible, setTestVisible] = useState(false)

    const btnOnClickHandler = () => {
        setTestVisible(!testVisible)
    }

    return (
        <html>
            <head></head>
            <body>
                <NavDropDown />

                <Container>
                    <Row>
                        {siteData.map((data) => (
                            <Col xs={3} className="mb-5" key={`${data.id}`}>
                                <TestCard data={data} />
                            </Col>
                        ))}
                    </Row>
                </Container>
            </body>
        </html>
    )
}

export default App
