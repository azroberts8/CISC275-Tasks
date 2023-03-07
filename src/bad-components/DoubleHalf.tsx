import React, { useState } from "react";
import { Button } from "react-bootstrap";

interface DoubleHalfProp {
    value: number;
    DHSetter: (value: number) => void;
}

function Doubler({ value, DHSetter }: DoubleHalfProp): JSX.Element {
    return <Button onClick={() => DHSetter(2 * value)}>Double</Button>;
}

function Halver({ value, DHSetter }: DoubleHalfProp): JSX.Element {
    return <Button onClick={() => DHSetter(0.5 * value)}>Halve</Button>;
}

export function DoubleHalf(): JSX.Element {
    const [dhValue, setDhValue] = useState<number>(10);
    return (
        <div>
            <h3>Double Half</h3>
            <div>
                The current value is: <span>{dhValue}</span>
            </div>
            <Doubler DHSetter={setDhValue} value={dhValue}></Doubler>
            <Halver DHSetter={setDhValue} value={dhValue}></Halver>
        </div>
    );
}
