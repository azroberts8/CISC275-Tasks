import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): JSX.Element {
    const [visible, setValue] = useState<boolean>(false);
    return (
        <span>
            <Button onClick={() => setValue(!visible)}>Reveal Answer</Button>
            <p>{visible ? "The answer is 42" : ""}</p>
        </span>
    );
}
