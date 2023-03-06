import React from "react";
import "./App.css";
import { Button, Col, Container, Row } from "react-bootstrap";
import Tampa from "../src/images/tampa.jpg";
import { ChangeType } from "./components/ChangeType";
import { RevealAnswer } from "./components/RevealAnswer";
import { StartAttempt } from "./components/StartAttempt";
import { TwoDice } from "./components/TwoDice";
import { CycleHoliday } from "./components/CycleHoliday";
import { Counter } from "./components/Counter";
import { DoubleHalf } from "./bad-components/DoubleHalf";
import { ColoredBox } from "./bad-components/ColoredBox";
import { ShoveBox } from "./bad-components/ShoveBox";
import { ChooseTeam } from "./bad-components/ChooseTeam";

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
            <hr></hr>
            {/* <DoubleHalf></DoubleHalf> */}
            <hr></hr>
            <ChooseTeam></ChooseTeam>
            <hr></hr>
            <ColoredBox></ColoredBox>
            <hr></hr>
            <ShoveBox></ShoveBox>
            <hr></hr>
            <Counter></Counter>
            <hr />
            <RevealAnswer></RevealAnswer>
            <hr />
            <StartAttempt></StartAttempt>
            <hr />
            <TwoDice></TwoDice>
            <hr />
            <ChangeType></ChangeType>
            <hr />
            <CycleHoliday></CycleHoliday>
        </div>
    );
}

export default App;
