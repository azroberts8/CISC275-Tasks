import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

/**
 * A helper function for the win/lose output because ESLint will not accept nested ternary operators
 * @param left The value on the left die
 * @param right The value on the right die
 * @returns the outputted string to display
 */
function getOutput(left?: number, right?: number): string {
    if (left === undefined && right === undefined) return "";
    else if (left !== right) return "Roll Again";
    else if (left === 1) return "You Lose";
    else return "You Win";
}

export function TwoDice(): JSX.Element {
    const [leftDie, setLeftDie] = useState<number>(0); // Initializing these as null, d6(), both as 0 or both as -1 all cause test cases to fail
    const [rightDie, setRightDie] = useState<number>(1);
    return (
        <span>
            <Button onClick={() => setLeftDie(d6())}>Roll Left</Button>
            <Button onClick={() => setRightDie(d6())}>Roll Right</Button>
            <p>
                Left Die: <span data-testid="left-die">{leftDie}</span> | Right
                Die: <span data-testid="right-die">{rightDie}</span>
            </p>
            <p>{getOutput(leftDie, rightDie)}</p>
        </span>
    );
}
