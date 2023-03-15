import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): JSX.Element {
    const [attemptsRemaining, setAttemptsRemaining] = useState<number>(3);
    const [attemptsRequested, setAttemptsRequested] = useState<string>("");

    function requestAttempts(): void {
        if (!isNaN(Number(attemptsRequested))) {
            setAttemptsRemaining(Number(attemptsRequested) + attemptsRemaining);
        }
    }

    return (
        <div>
            <h3>Give Attempts</h3>
            <div>
                <Form.Group controlId="requestedAttempts">
                    <Form.Label>Requested Attempts: </Form.Label>
                    <Form.Control
                        type="number"
                        value={attemptsRequested}
                        onChange={(
                            e: React.ChangeEvent<HTMLInputElement>
                        ): void => {
                            setAttemptsRequested(e.target.value);
                        }}
                    />
                </Form.Group>
                <Button
                    onClick={() => setAttemptsRemaining(attemptsRemaining - 1)}
                    disabled={attemptsRemaining <= 0}
                >
                    Use
                </Button>
                <Button onClick={requestAttempts}>Gain</Button>
                Attempts Remaining: {attemptsRemaining}
            </div>
        </div>
    );
}
