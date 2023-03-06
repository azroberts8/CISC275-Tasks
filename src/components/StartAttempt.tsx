import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [quizInProgress, setQuizProgress] = useState<boolean>(false);
    const [attempts, setAttempts] = useState<number>(4);
    return (
        <span>
            <Button
                onClick={() => {
                    setQuizProgress(true);
                    setAttempts(attempts - 1);
                }}
                disabled={quizInProgress || attempts < 1}
            >
                Start Quiz
            </Button>
            <Button
                onClick={() => setQuizProgress(false)}
                disabled={!quizInProgress}
            >
                Stop Quiz
            </Button>
            <Button
                onClick={() => setAttempts(attempts + 1)}
                disabled={quizInProgress}
            >
                Mulligan
            </Button>
            <p>Attempts Remaining: {attempts}</p>
        </span>
    );
}
