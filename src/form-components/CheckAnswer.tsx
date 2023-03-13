import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function CheckAnswer({
    expectedAnswer
}: {
    expectedAnswer: string;
}): JSX.Element {
    const [answerInput, setAnswerInput] = useState<string>();

    function updateInput(e: React.ChangeEvent<HTMLInputElement>): void {
        setAnswerInput(e.target.value);
    }

    return (
        <div>
            <h3>Check Answer</h3>
            <div>
                <Form.Group controlId="formShortAnswer">
                    <Form.Label>Answer: </Form.Label>
                    <Form.Control value={answerInput} onChange={updateInput} />
                </Form.Group>
                <div>{answerInput == expectedAnswer ? "✔️" : "❌"}</div>
            </div>
        </div>
    );
}
