import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer
}: {
    options: string[];
    expectedAnswer: string;
}): JSX.Element {
    const [selectedAnswer, setselectedAnswer] = useState<string>(options[0]);

    return (
        <div>
            <h3>Multiple Choice Question</h3>
            <div>
                <Form.Group controlId="answerSelect">
                    <Form.Label>Select Answer</Form.Label>
                    <Form.Select
                        value={selectedAnswer}
                        onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                            setselectedAnswer(e.target.value)
                        }
                    >
                        {options.map((option: string) => (
                            <option key={option} value={option}>
                                {option}
                            </option>
                        ))}
                    </Form.Select>
                </Form.Group>
                <div>{selectedAnswer == expectedAnswer ? "✔️" : "❌"}</div>
            </div>
        </div>
    );
}
