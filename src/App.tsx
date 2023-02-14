import React from "react";
import "./App.css";
import { Button, Col, Container, Row } from "react-bootstrap";
import Tampa from "../src/images/tampa.jpg";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
            </header>
            <h1>Hello World!</h1>
            <p>
                My name is Andrew Roberts and I am a software engineer and
                photographer.
            </p>
            <Container className="App-container">
                <Row>
                    <Col>
                        <img
                            src={Tampa}
                            alt="Night time long exposure of downtown Tampa"
                        />
                        <div
                            className="App-spicyBox"
                            style={{
                                backgroundColor: "maroon",
                                width: "85%",
                                height: "auto"
                            }}
                        >
                            <p>
                                Here is a long exposure photo of Downtown Tampa
                                that I took last summer. For this photo I used a
                                small aperture and long exposure time to create
                                the smooth overal texture.
                            </p>
                        </div>
                    </Col>
                    <Col>
                        <div
                            className="App-spicyBox"
                            style={{
                                backgroundColor: "maroon",
                                width: "85%",
                                height: "auto"
                            }}
                        >
                            <p>
                                There are 3 elements to consider in the exposure
                                of an image:
                            </p>
                            <ul>
                                <li>
                                    Aperture - The size of the pupil in the lens
                                    that allows light to pass through it
                                </li>
                                <li>
                                    Shutter Speed - The length of time the film
                                    or digital sensor is being exposed to light
                                </li>
                                <li>
                                    ISO - The sensitivity of the film or digital
                                    sensor
                                </li>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Button onClick={() => console.log("Hello World!")}>
                Log Hello World
            </Button>
        </div>
    );
}

export default App;
